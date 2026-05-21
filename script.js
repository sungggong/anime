const animeList = [
  {
    id: 'frieren',
    title: '장송의 프리렌',
    genre: 'fantasy',
    mood: 'comfort',
    score: 98,
    symbol: '✦',
    palette: ['#1ed760', '#38bdf8'],
    tags: ['판타지', '힐링', '여운'],
    summary: '마왕을 쓰러뜨린 이후의 시간을 따라가며 모험의 의미와 기억을 천천히 되짚는 감성 판타지.',
    reason: '조용하지만 깊은 여운과 아름다운 작화가 필요할 때 가장 안정적인 선택이에요.'
  },
  {
    id: 'jjk',
    title: '주술회전',
    genre: 'action',
    mood: 'power',
    score: 94,
    symbol: '呪',
    palette: ['#8b5cf6', '#111827'],
    tags: ['액션', '다크', '능력 배틀'],
    summary: '저주와 주술사가 충돌하는 세계에서 펼쳐지는 빠르고 강렬한 현대 퇴마 액션.',
    reason: '속도감 있는 전투, 스타일리시한 연출, 강한 캐릭터성을 원한다면 추천해요.'
  },
  {
    id: 'spy-family',
    title: '스파이 패밀리',
    genre: 'healing',
    mood: 'comfort',
    score: 91,
    symbol: '★',
    palette: ['#fb7185', '#facc15'],
    tags: ['코미디', '가족', '힐링'],
    summary: '스파이, 암살자, 초능력자가 가짜 가족으로 만나 진짜 같은 일상을 만들어가는 코미디.',
    reason: '부담 없이 웃고 싶거나 누군가와 같이 보기 좋은 작품을 찾을 때 좋아요.'
  },
  {
    id: 'your-lie',
    title: '4월은 너의 거짓말',
    genre: 'romance',
    mood: 'heart',
    score: 90,
    symbol: '♪',
    palette: ['#38bdf8', '#fb7185'],
    tags: ['로맨스', '음악', '감동'],
    summary: '음악을 잃은 피아노 소년이 한 바이올리니스트를 만나 다시 무대와 감정을 마주하는 이야기.',
    reason: '감정선이 진하고 음악이 오래 남는 로맨스를 보고 싶을 때 잘 맞아요.'
  },
  {
    id: 'steins-gate',
    title: '슈타인즈 게이트',
    genre: 'mystery',
    mood: 'brain',
    score: 97,
    symbol: 'β',
    palette: ['#22c55e', '#64748b'],
    tags: ['SF', '타임리프', '반전'],
    summary: '우연한 시간 간섭 실험이 걷잡을 수 없는 결과를 낳으며 세계선을 뒤흔드는 SF 스릴러.',
    reason: '초반 빌드업 뒤에 터지는 강한 몰입감과 반전을 원한다면 강력 추천해요.'
  },
  {
    id: 'demon-slayer',
    title: '귀멸의 칼날',
    genre: 'action',
    mood: 'power',
    score: 93,
    symbol: '炎',
    palette: ['#f97316', '#dc2626'],
    tags: ['액션', '시대극', '작화'],
    summary: '가족을 잃은 소년이 혈귀가 된 여동생을 되돌리기 위해 검사가 되는 이야기.',
    reason: '화려한 전투 연출과 정통 성장 서사를 한 번에 즐기기 좋아요.'
  },
  {
    id: 'apothecary',
    title: '약사의 혼잣말',
    genre: 'mystery',
    mood: 'brain',
    score: 92,
    symbol: '薬',
    palette: ['#14b8a6', '#a855f7'],
    tags: ['추리', '궁중', '캐릭터'],
    summary: '약학 지식과 관찰력을 가진 마오마오가 궁중의 사건들을 풀어가는 미스터리 드라마.',
    reason: '날카로운 추리와 매력적인 주인공의 티키타카를 좋아한다면 잘 맞아요.'
  },
  {
    id: 'haikyu',
    title: '하이큐!!',
    genre: 'healing',
    mood: 'power',
    score: 95,
    symbol: '排',
    palette: ['#f97316', '#111827'],
    tags: ['스포츠', '성장', '팀워크'],
    summary: '작은 키의 배구 소년이 팀원들과 함께 한계를 넘어서는 청춘 스포츠 애니.',
    reason: '기분을 끌어올리고 싶을 때, 노력과 팀워크의 에너지가 확실히 전달돼요.'
  },
  {
    id: 'violet',
    title: '바이올렛 에버가든',
    genre: 'healing',
    mood: 'comfort',
    score: 96,
    symbol: '✉',
    palette: ['#60a5fa', '#a78bfa'],
    tags: ['힐링', '감동', '작화'],
    summary: '감정을 배우는 자동수기인형 바이올렛이 편지를 통해 사람들의 마음을 이어주는 이야기.',
    reason: '아름다운 영상미와 잔잔한 감동을 원할 때 최고의 선택지 중 하나예요.'
  },
  {
    id: 'kaguya',
    title: '카구야 님은 고백받고 싶어',
    genre: 'romance',
    mood: 'heart',
    score: 93,
    symbol: '♡',
    palette: ['#fb7185', '#8b5cf6'],
    tags: ['로맨스', '코미디', '두뇌전'],
    summary: '서로 좋아하지만 먼저 고백하지 않으려는 두 천재의 귀여운 심리전 로맨틱 코미디.',
    reason: '웃기면서 설레는 로맨스를 원한다면 실패 확률이 낮아요.'
  },
  {
    id: 'aot',
    title: '진격의 거인',
    genre: 'action',
    mood: 'brain',
    score: 99,
    symbol: '⚔',
    palette: ['#9ca3af', '#7f1d1d'],
    tags: ['액션', '정치극', '반전'],
    summary: '거인에게 둘러싸인 세계의 진실을 추적하며 전쟁, 자유, 선택의 무게를 다루는 대서사시.',
    reason: '압도적인 스케일과 끊임없는 반전, 무거운 주제를 원할 때 추천해요.'
  },
  {
    id: 'mushoku',
    title: '무직전생',
    genre: 'fantasy',
    mood: 'power',
    score: 89,
    symbol: '✧',
    palette: ['#34d399', '#2563eb'],
    tags: ['이세계', '판타지', '성장'],
    summary: '새로운 세계에서 다시 태어난 주인공이 마법과 모험 속에서 삶을 다시 배워가는 판타지.',
    reason: '정통 판타지 모험과 성장형 서사를 길게 즐기고 싶을 때 좋아요.'
  }
];

const genreLabels = {
  action: '액션',
  healing: '힐링',
  romance: '로맨스',
  mystery: '미스터리',
  fantasy: '판타지'
};

const moodTitles = {
  power: '오늘은 에너지 폭발형 추천',
  comfort: '오늘은 마음이 편안해지는 추천',
  heart: '오늘은 설렘이 필요한 추천',
  brain: '오늘은 머리 쓰는 몰입형 추천'
};

const grid = document.querySelector('#animeGrid');
const heroPick = document.querySelector('#heroPick');
const moodResult = document.querySelector('#moodResult');
const rankingList = document.querySelector('#rankingList');
const watchlistItems = document.querySelector('#watchlistItems');
const storageKey = 'anipick-watchlist';

let currentFilter = 'all';
let watchlist = loadWatchlist();

function loadWatchlist() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveWatchlist() {
  localStorage.setItem(storageKey, JSON.stringify(watchlist));
}

function pickRandom(items = animeList) {
  return items[Math.floor(Math.random() * items.length)];
}

function posterStyle(anime) {
  return `--poster-a: ${anime.palette[0]}; --poster-b: ${anime.palette[1]};`;
}

function createPoster(anime, extraClass = '') {
  return `
    <div class="poster-tile ${extraClass}" style="${posterStyle(anime)}" data-symbol="${anime.symbol}">
      <div class="relative z-10 flex h-full min-h-[15rem] flex-col justify-between p-5">
        <div class="flex flex-wrap gap-2">${anime.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}</div>
        <div>
          <p class="text-sm font-black uppercase tracking-[0.2em] text-white/70">score ${anime.score}</p>
          <h3 class="mt-2 font-kr text-3xl font-black leading-tight">${anime.title}</h3>
        </div>
      </div>
    </div>
  `;
}

function renderHero(anime = pickRandom()) {
  heroPick.innerHTML = `
    ${createPoster(anime, 'mb-5')}
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-sm font-black uppercase tracking-[0.22em] text-mint">today's pick</p>
        <h2 class="mt-2 font-kr text-3xl font-black">${anime.title}</h2>
      </div>
      <button class="icon-button" type="button" aria-label="${anime.title} 찜하기" data-add="${anime.id}">+</button>
    </div>
    <p class="mt-4 leading-7 text-white/62">${anime.summary}</p>
    <p class="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/72">추천 이유: ${anime.reason}</p>
  `;
}

function renderGrid() {
  const filtered = currentFilter === 'all' ? animeList : animeList.filter(anime => anime.genre === currentFilter);
  grid.innerHTML = filtered.map(anime => `
    <article class="anime-card" data-id="${anime.id}">
      ${createPoster(anime)}
      <div class="p-3">
        <div class="mt-1 flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-mint">${genreLabels[anime.genre]}</p>
            <h3 class="mt-1 font-kr text-xl font-black">${anime.title}</h3>
          </div>
          <button class="icon-button shrink-0" type="button" aria-label="${anime.title} 찜하기" data-add="${anime.id}">+</button>
        </div>
        <p class="mt-3 min-h-[4.5rem] text-sm leading-6 text-white/58">${anime.summary}</p>
      </div>
    </article>
  `).join('');
}

function renderMood(mood) {
  const candidates = animeList.filter(anime => anime.mood === mood);
  const anime = pickRandom(candidates);
  moodResult.innerHTML = `
    <p class="text-sm font-bold uppercase tracking-[0.24em] text-mint">${moodTitles[mood]}</p>
    <div class="mt-5 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-center">
      ${createPoster(anime)}
      <div>
        <h3 class="font-kr text-3xl font-black">${anime.title}</h3>
        <p class="mt-4 leading-7 text-white/62">${anime.summary}</p>
        <p class="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/72">${anime.reason}</p>
        <button class="btn-primary mt-5" type="button" data-add="${anime.id}">찜 목록에 추가</button>
      </div>
    </div>
  `;
}

function renderRanking() {
  const ranked = [...animeList]
    .sort((a, b) => b.score - a.score)
    .slice(0, 7);

  rankingList.innerHTML = ranked.map((anime, index) => `
    <li class="ranking-row">
      <span class="rank-number">${index + 1}</span>
      <div>
        <strong class="font-kr text-lg font-black">${anime.title}</strong>
        <p class="mt-1 text-sm text-white/50">${anime.tags.join(' · ')}</p>
      </div>
      <span class="score rounded-full bg-white/10 px-4 py-2 text-sm font-black text-mint">${anime.score}점</span>
    </li>
  `).join('');
}

function shuffleRanking() {
  const shuffled = [...animeList].sort(() => Math.random() - 0.5).slice(0, 7);
  rankingList.innerHTML = shuffled.map((anime, index) => `
    <li class="ranking-row">
      <span class="rank-number">${index + 1}</span>
      <div>
        <strong class="font-kr text-lg font-black">${anime.title}</strong>
        <p class="mt-1 text-sm text-white/50">랜덤 큐레이션 · ${anime.tags.join(' · ')}</p>
      </div>
      <span class="score rounded-full bg-white/10 px-4 py-2 text-sm font-black text-mint">Pick</span>
    </li>
  `).join('');
}

function addToWatchlist(id) {
  if (!watchlist.includes(id)) {
    watchlist.push(id);
    saveWatchlist();
    renderWatchlist();
  }
}

function removeFromWatchlist(id) {
  watchlist = watchlist.filter(item => item !== id);
  saveWatchlist();
  renderWatchlist();
}

function renderWatchlist() {
  const items = watchlist.map(id => animeList.find(anime => anime.id === id)).filter(Boolean);
  if (items.length === 0) {
    watchlistItems.innerHTML = `
      <div class="rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.035] p-8 text-white/55 sm:col-span-2 lg:col-span-3">
        아직 찜한 애니가 없습니다. 추천 카드의 + 버튼을 눌러 감상 후보를 저장해보세요.
      </div>
    `;
    return;
  }

  watchlistItems.innerHTML = items.map(anime => `
    <article class="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.2em] text-mint">saved</p>
          <h3 class="mt-1 font-kr text-xl font-black">${anime.title}</h3>
        </div>
        <button class="rounded-full border border-white/10 px-3 py-1 text-sm font-black text-white/55 hover:text-rose" type="button" data-remove="${anime.id}">삭제</button>
      </div>
      <p class="mt-3 text-sm leading-6 text-white/58">${anime.reason}</p>
    </article>
  `).join('');
}

function bindEvents() {
  document.querySelector('#menuButton')?.addEventListener('click', event => {
    const menu = document.querySelector('#mobileMenu');
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    event.currentTarget.setAttribute('aria-expanded', String(!isOpen));
  });

  document.querySelectorAll('.filter-chip').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.dataset.filter;
      renderGrid();
    });
  });

  document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.mood-button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      renderMood(button.dataset.mood);
    });
  });

  document.body.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add]');
    const removeButton = event.target.closest('[data-remove]');

    if (addButton) {
      addToWatchlist(addButton.dataset.add);
      addButton.textContent = '✓';
      setTimeout(() => { addButton.textContent = '+'; }, 900);
    }

    if (removeButton) {
      removeFromWatchlist(removeButton.dataset.remove);
    }
  });

  document.querySelector('#randomHeroButton')?.addEventListener('click', () => renderHero());
  document.querySelector('#shuffleRanking')?.addEventListener('click', shuffleRanking);
  document.querySelector('#clearWatchlist')?.addEventListener('click', () => {
    watchlist = [];
    saveWatchlist();
    renderWatchlist();
  });
}

function init() {
  renderHero();
  renderGrid();
  renderRanking();
  renderWatchlist();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
