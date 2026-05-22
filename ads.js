(() => {
  const config = Object.assign({
    provider: 'adsense',
    enabled: false,
    requireConsent: true,
    publisherId: '',
    showPlaceholders: false,
    slots: {},
  }, window.ANIPICK_ADS_CONFIG || {});

  const consentKey = 'anipick-analytics-consent';
  const state = { ready: false, loading: null };

  function hasConsent() {
    return !config.requireConsent || localStorage.getItem(consentKey) === 'granted';
  }

  function isConfigured() {
    return Boolean(config.enabled && /^ca-pub-\d{10,}$/.test(config.publisherId));
  }

  function slotId(name) {
    return config.slots?.[name] || '';
  }

  function loadScript() {
    if (state.loading) return state.loading;
    const existing = document.querySelector(`script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CSS.escape(config.publisherId)}"]`);
    if (existing) {
      state.ready = true;
      return Promise.resolve();
    }
    state.loading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.publisherId)}`;
      script.onload = () => { state.ready = true; resolve(); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return state.loading;
  }

  function renderPlaceholder(container) {
    if (!config.showPlaceholders && location.hostname !== '127.0.0.1' && location.hostname !== 'localhost') {
      container.classList.add('ad-slot--hidden');
      return;
    }
    container.classList.remove('ad-slot--hidden');
    container.classList.add('ad-slot--placeholder');
    container.textContent = '';
    const label = document.createElement('span');
    label.className = 'ad-slot-label';
    label.textContent = 'SPONSORED';
    const copy = document.createElement('strong');
    copy.textContent = '광고 영역 준비 중';
    const hint = document.createElement('small');
    hint.textContent = 'AdSense 승인 후 자동으로 표시됩니다.';
    container.append(label, copy, hint);
  }

  async function renderSlot(container) {
    const name = container.dataset.adSlot;
    const adSlot = slotId(name);
    if (!isConfigured() || !adSlot || !hasConsent()) {
      renderPlaceholder(container);
      return;
    }

    try {
      await loadScript();
      container.classList.remove('ad-slot--hidden');
      container.classList.remove('ad-slot--placeholder');
      container.innerHTML = '';
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.dataset.adClient = config.publisherId;
      ins.dataset.adSlot = adSlot;
      ins.dataset.adFormat = container.dataset.adFormat || 'auto';
      ins.dataset.fullWidthResponsive = 'true';
      container.appendChild(ins);
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      renderPlaceholder(container);
      if (config.debug) console.warn('[AniPick ads] failed to load', error);
    }
  }

  function refresh() {
    document.querySelectorAll('[data-ad-slot]').forEach(renderSlot);
  }

  window.AniPickAds = { refresh, hasConsent, config };
  document.addEventListener('DOMContentLoaded', refresh);
  window.addEventListener('storage', event => { if (event.key === consentKey) refresh(); });
})();
