(() => {
  const config = Object.assign({
    provider: 'ga4',
    measurementId: '',
    enabled: true,
    requireConsent: true,
    anonymizeIp: true,
    debug: false,
    siteName: 'AniPick',
  }, window.ANIPICK_ANALYTICS_CONFIG || {});

  const consentKey = 'anipick-analytics-consent';
  const sessionKey = 'anipick-anonymous-session';
  const isConfigured = Boolean(config.enabled && config.measurementId);
  const state = { ready: false, queue: [] };

  function getSessionId() {
    let id = localStorage.getItem(sessionKey);
    if (!id) {
      id = `ap_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(sessionKey, id);
    }
    return id;
  }

  function hasConsent() {
    return !config.requireConsent || localStorage.getItem(consentKey) === 'granted';
  }

  function setConsent(value) {
    localStorage.setItem(consentKey, value);
    removeConsentBanner();
    if (value === 'granted') {
      initProvider();
      flushQueue();
      track('analytics_consent_granted');
    }
  }

  function createConsentBanner() {
    if (!config.requireConsent || localStorage.getItem(consentKey) || document.getElementById('analyticsConsent')) return;
    const banner = document.createElement('aside');
    banner.id = 'analyticsConsent';
    banner.className = 'analytics-consent';
    banner.innerHTML = `
      <div>
        <strong>방문 분석 안내</strong>
        <p>사이트 개선을 위해 익명 방문/클릭/설문 선택 이벤트를 수집할 수 있어요. 이름, 연락처 같은 개인정보는 수집하지 않습니다.</p>
      </div>
      <div class="analytics-consent-actions">
        <button type="button" data-analytics-consent="denied">거절</button>
        <button type="button" data-analytics-consent="granted">허용</button>
      </div>
    `;
    banner.addEventListener('click', event => {
      const value = event.target?.dataset?.analyticsConsent;
      if (value) setConsent(value);
    });
    document.body.appendChild(banner);
  }

  function removeConsentBanner() {
    document.getElementById('analyticsConsent')?.remove();
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function initProvider() {
    if (state.ready || !config.enabled || !hasConsent()) return;
    if (!isConfigured) {
      state.ready = true;
      return;
    }

    if (config.provider === 'ga4') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(){ window.dataLayer.push(arguments); };
      await loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.measurementId)}`);
      window.gtag('js', new Date());
      window.gtag('config', config.measurementId, {
        anonymize_ip: config.anonymizeIp,
        send_page_view: false,
        custom_map: { dimension1: 'anonymous_session_id' },
      });
    }

    state.ready = true;
  }

  function normalizeParams(params = {}) {
    return Object.assign({
      site_name: config.siteName,
      page_path: location.pathname,
      page_title: document.title,
      anonymous_session_id: getSessionId(),
    }, params);
  }

  function send(name, params = {}) {
    const payload = normalizeParams(params);
    if (!config.enabled || !hasConsent()) {
      state.queue.push({ name, params: payload });
      return;
    }

    if (!isConfigured) {
      if (config.debug || location.hostname === '127.0.0.1' || location.hostname === 'localhost') {
        console.info('[AniPick analytics demo]', name, payload);
      }
      return;
    }

    if (config.provider === 'ga4' && typeof window.gtag === 'function') {
      window.gtag('event', name, payload);
    }
  }

  function flushQueue() {
    const queued = state.queue.splice(0);
    queued.forEach(item => send(item.name, item.params));
  }

  function track(name, params = {}) {
    send(name, params);
  }

  function trackPageView() {
    track('page_view', {
      page_location: location.href,
      referrer: document.referrer || 'direct',
      viewport: `${window.innerWidth}x${window.innerHeight}`,
    });
  }

  window.AniPickAnalytics = { track, initProvider, hasConsent, setConsent, config };

  document.addEventListener('DOMContentLoaded', async () => {
    createConsentBanner();
    if (hasConsent()) {
      await initProvider();
      flushQueue();
      trackPageView();
    }
  });
})();
