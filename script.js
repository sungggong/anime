const animeList = [
  { id:'frieren', title:'장송의 프리렌', genre:'fantasy', mood:'comfort', world:'fantasy', pace:'slow', length:'medium', score:98, symbol:'旅', palette:['#32d583','#60a5fa'], tags:['판타지','힐링','여운'], summary:'마왕을 쓰러뜨린 이후의 시간을 따라가며 모험의 의미와 기억을 되짚는 감성 판타지.', reason:'조용하지만 깊은 여운과 아름다운 작화가 필요할 때 가장 안정적인 선택이에요.' },
  { id:'jjk', title:'주술회전', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:94, symbol:'呪', palette:['#8b5cf6','#111827'], tags:['액션','다크','능력 배틀'], summary:'저주와 주술사가 충돌하는 세계에서 펼쳐지는 빠르고 강렬한 현대 퇴마 액션.', reason:'속도감 있는 전투와 스타일리시한 연출을 원한다면 추천해요.' },
  { id:'spy-family', title:'스파이 패밀리', genre:'healing', mood:'comfort', world:'modern', pace:'balanced', length:'short', score:91, symbol:'家', palette:['#fb7185','#facc15'], tags:['코미디','가족','힐링'], summary:'스파이, 암살자, 초능력자가 가짜 가족으로 만나 진짜 같은 일상을 만들어가는 코미디.', reason:'부담 없이 웃고 싶거나 같이 보기 좋은 작품을 찾을 때 좋아요.' },
  { id:'your-lie', title:'4월은 너의 거짓말', genre:'romance', mood:'heart', world:'modern', pace:'slow', length:'medium', score:90, symbol:'音', palette:['#38bdf8','#fb7185'], tags:['로맨스','음악','감동'], summary:'음악을 잃은 피아노 소년이 바이올리니스트를 만나 다시 감정을 마주하는 이야기.', reason:'감정선이 진하고 음악이 오래 남는 로맨스를 보고 싶을 때 잘 맞아요.' },
  { id:'steins-gate', title:'슈타인즈 게이트', genre:'mystery', mood:'brain', world:'sf', pace:'slow', length:'medium', score:97, symbol:'時', palette:['#22c55e','#64748b'], tags:['SF','타임리프','반전'], summary:'우연한 시간 간섭 실험이 세계선을 뒤흔드는 SF 스릴러.', reason:'초반 빌드업 뒤에 터지는 강한 몰입감과 반전을 원한다면 강력 추천해요.' },
  { id:'demon-slayer', title:'귀멸의 칼날', genre:'action', mood:'power', world:'japan', pace:'fast', length:'medium', score:93, symbol:'炎', palette:['#f97316','#dc2626'], tags:['액션','일본풍','작화'], summary:'혈귀가 된 여동생을 되돌리기 위해 검사가 되는 소년의 성장 액션.', reason:'화려한 전투 연출과 일본풍 시대극 분위기를 즐기기 좋아요.' },
  { id:'apothecary', title:'약사의 혼잣말', genre:'mystery', mood:'brain', world:'japan', pace:'balanced', length:'medium', score:92, symbol:'薬', palette:['#14b8a6','#a855f7'], tags:['추리','궁중','캐릭터'], summary:'약학 지식과 관찰력을 가진 마오마오가 궁중 사건을 풀어가는 미스터리 드라마.', reason:'날카로운 추리와 매력적인 주인공의 티키타카를 좋아한다면 잘 맞아요.' },
  { id:'haikyu', title:'하이큐!!', genre:'healing', mood:'power', world:'modern', pace:'fast', length:'long', score:95, symbol:'翔', palette:['#f97316','#111827'], tags:['스포츠','성장','팀워크'], summary:'작은 키의 배구 소년이 팀원들과 함께 한계를 넘어서는 청춘 스포츠 애니.', reason:'기분을 끌어올리고 싶을 때 노력과 팀워크의 에너지가 확실히 전달돼요.' },
  { id:'violet', title:'바이올렛 에버가든', genre:'healing', mood:'comfort', world:'fantasy', pace:'slow', length:'short', score:96, symbol:'便', palette:['#60a5fa','#a78bfa'], tags:['힐링','감동','작화'], summary:'감정을 배우는 자동수기인형이 편지를 통해 사람들의 마음을 이어주는 이야기.', reason:'아름다운 영상미와 잔잔한 감동을 원할 때 최고의 선택지 중 하나예요.' },
  { id:'kaguya', title:'카구야 님은 고백받고 싶어', genre:'romance', mood:'heart', world:'modern', pace:'fast', length:'short', score:93, symbol:'恋', palette:['#fb7185','#8b5cf6'], tags:['로맨스','코미디','두뇌전'], summary:'서로 좋아하지만 먼저 고백하지 않으려는 두 천재의 귀여운 심리전 로맨틱 코미디.', reason:'웃기면서 설레는 로맨스를 원한다면 실패 확률이 낮아요.' },
  { id:'aot', title:'진격의 거인', genre:'action', mood:'brain', world:'fantasy', pace:'fast', length:'long', score:99, symbol:'壁', palette:['#9ca3af','#7f1d1d'], tags:['액션','정치극','반전'], summary:'거인에게 둘러싸인 세계의 진실을 추적하며 전쟁, 자유, 선택을 다루는 대서사시.', reason:'압도적인 스케일과 끊임없는 반전, 무거운 주제를 원할 때 추천해요.' },
  { id:'mushoku', title:'무직전생', genre:'fantasy', mood:'power', world:'fantasy', pace:'balanced', length:'long', score:89, symbol:'魔', palette:['#34d399','#2563eb'], tags:['이세계','판타지','성장'], summary:'새로운 세계에서 다시 태어난 주인공이 마법과 모험 속에서 삶을 배워가는 판타지.', reason:'정통 판타지 모험과 성장형 서사를 길게 즐기고 싶을 때 좋아요.' }
];

const profiles = [
  { id:'solo', name:'혼자 몰입', avatar:'🎧', palette:['#8b5cf6','#38bdf8'], prefer:{mood:'brain', pace:'slow'} },
  { id:'family', name:'가족과 함께', avatar:'🍿', palette:['#fb7185','#facc15'], prefer:{mood:'comfort', length:'short'} },
  { id:'action', name:'액션 덕후', avatar:'⚔️', palette:['#f97316','#dc2626'], prefer:{mood:'power', pace:'fast'} },
  { id:'romance', name:'설렘 모드', avatar:'🌸', palette:['#ff8fb8','#a78bfa'], prefer:{mood:'heart', world:'modern'} }
];

const genreLabels = { action:'액션', healing:'힐링', romance:'로맨스', mystery:'미스터리', fantasy:'판타지' };
const seasonParticle = { spring:['🌸','花'], summer:['✨','祭'], autumn:['🍁','秋'], winter:['❄','雪'] };
let currentFilter = 'all';
let activeProfile = localStorage.getItem('anipick-profile') || 'solo';
let watchlist = JSON.parse(localStorage.getItem('anipick-watchlist-v2') || '[]');

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const pickRandom = (items = animeList) => items[Math.floor(Math.random() * items.length)];
const findAnime = id => animeList.find(anime => anime.id === id);

function saveWatchlist(){ localStorage.setItem('anipick-watchlist-v2', JSON.stringify(watchlist)); }
function animeStyle(anime){ return `--p1:${anime.palette[0]};--p2:${anime.palette[1]};`; }
function poster(anime){ return `<div class="poster" style="${animeStyle(anime)}" data-symbol="${anime.symbol}"><div class="relative z-10 flex min-h-[15rem] flex-col justify-between p-5"><div class="flex flex-wrap gap-2">${anime.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div><div><p class="text-sm font-black uppercase tracking-[.22em] text-white/75">match base ${anime.score}</p><h3 class="mt-2 font-kr text-3xl font-black text-white">${anime.title}</h3></div></div></div>`; }
function addButton(id, label = '+'){ return `<button class="icon-button" type="button" data-add="${id}" aria-label="찜하기">${label}</button>`; }

function renderHero(anime = recommendByProfile()[0]?.anime || pickRandom()){
  $('#heroPick').innerHTML = `${poster(anime)}<div class="mt-5 flex items-start justify-between gap-4"><div><p class="kicker">today's seasonal pick</p><h2 class="font-kr text-3xl font-black">${anime.title}</h2></div>${addButton(anime.id)}</div><p class="mt-4 leading-7 text-[var(--muted)]">${anime.summary}</p><p class="mt-4 rounded-2xl border border-[var(--line)] bg-black/10 p-4 text-sm leading-6">추천 이유: ${anime.reason}</p>`;
}

function renderProfiles(){
  $('#profileGrid').innerHTML = profiles.map(p => `<button class="profile-card ${p.id===activeProfile?'active':''}" data-profile="${p.id}" type="button"><div class="avatar" style="--p1:${p.palette[0]};--p2:${p.palette[1]};">${p.avatar}</div><strong class="mt-4 block font-kr text-xl font-black">${p.name}</strong><small class="mt-1 block text-[var(--muted)]">${profileDescription(p)}</small></button>`).join('');
  const p = profiles.find(item => item.id === activeProfile);
  $('#activeProfileLabel').textContent = `현재 프로필: ${p.name}`;
}
function profileDescription(p){ return {solo:'몰입도와 반전 중심 추천',family:'편하게 같이 보기 좋은 추천',action:'빠른 전개와 전투 중심 추천',romance:'설렘과 감정선 중심 추천'}[p.id]; }

function scoreAnime(anime, answers){
  let score = anime.score;
  if(anime.mood === answers.mood) score += 26;
  if(anime.world === answers.world) score += 18;
  if(anime.pace === answers.pace) score += 14;
  if(anime.length === answers.length) score += 12;
  const profile = profiles.find(p=>p.id===activeProfile);
  Object.entries(profile.prefer).forEach(([key,value]) => { if(anime[key] === value) score += 10; });
  return score;
}
function getAnswers(){ return Object.fromEntries(new FormData($('#surveyForm')).entries()); }
function recommendByProfile(){
  const profile = profiles.find(p=>p.id===activeProfile);
  const defaults = { mood: profile.prefer.mood || 'comfort', world: profile.prefer.world || 'modern', pace: profile.prefer.pace || 'balanced', length: profile.prefer.length || 'medium' };
  return animeList.map(anime => ({ anime, score: scoreAnime(anime, defaults) })).sort((a,b)=>b.score-a.score);
}
function renderSurveyResult(answers = null){
  const selected = answers || getAnswers();
  const ranked = animeList.map(anime => ({ anime, score: scoreAnime(anime, selected) })).sort((a,b)=>b.score-a.score);
  const top = ranked[0];
  const percent = Math.min(99, Math.round((top.score / 170) * 100));
  $('#surveyResult').innerHTML = `<p class="kicker">your best match</p><div class="grid gap-6 md:grid-cols-[.82fr_1fr] md:items-center">${poster(top.anime)}<div><h3 class="font-kr text-3xl font-black">${top.anime.title}</h3><p class="mt-3 text-[var(--muted)]">${top.anime.summary}</p><div class="mt-5"><div class="mb-2 flex justify-between text-sm font-black"><span>취향 매칭률</span><span>${percent}%</span></div><div class="match-meter"><span style="width:${percent}%"></span></div></div><p class="mt-4 rounded-2xl border border-[var(--line)] bg-black/10 p-4 text-sm leading-6">${top.anime.reason}</p>${addButton(top.anime.id, '＋ 찜')}</div></div><div class="mt-6 grid gap-3 sm:grid-cols-2">${ranked.slice(1,5).map(({anime,score})=>`<button class="watch-card text-left" data-hero="${anime.id}" type="button"><strong>${anime.title}</strong><small class="mt-1 block text-[var(--muted)]">후보 점수 ${score}</small></button>`).join('')}</div>`;
}

function renderGrid(){
  const items = currentFilter === 'all' ? animeList : animeList.filter(anime => anime.genre === currentFilter);
  $('#animeGrid').innerHTML = items.map(anime => `<article class="anime-card">${poster(anime)}<div class="p-3"><div class="mt-1 flex items-start justify-between gap-4"><div><p class="text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">${genreLabels[anime.genre]}</p><h3 class="mt-1 font-kr text-xl font-black">${anime.title}</h3></div>${addButton(anime.id)}</div><p class="mt-3 min-h-[4.5rem] text-sm leading-6 text-[var(--muted)]">${anime.summary}</p></div></article>`).join('');
}
function renderWatchlist(){
  const items = watchlist.map(findAnime).filter(Boolean);
  if(!items.length){ $('#watchlistItems').innerHTML = `<div class="watch-card sm:col-span-2 lg:col-span-3 text-[var(--muted)]">아직 찜한 작품이 없습니다. 추천 카드의 + 버튼을 눌러 저장해보세요.</div>`; return; }
  $('#watchlistItems').innerHTML = items.map(anime => `<article class="watch-card"><div class="flex items-start justify-between gap-4"><div><p class="kicker !mb-1">saved</p><h3 class="font-kr text-xl font-black">${anime.title}</h3></div><button class="rounded-full border border-[var(--line)] px-3 py-1 text-sm font-black" data-remove="${anime.id}" type="button">삭제</button></div><p class="mt-3 text-sm leading-6 text-[var(--muted)]">${anime.reason}</p></article>`).join('');
}
function addToWatchlist(id){ if(!watchlist.includes(id)){ watchlist.push(id); saveWatchlist(); renderWatchlist(); } }
function removeFromWatchlist(id){ watchlist = watchlist.filter(item => item !== id); saveWatchlist(); renderWatchlist(); }

function setTheme(theme){ document.documentElement.dataset.theme = theme; localStorage.setItem('anipick-theme', theme); const label = theme === 'dark' ? '🌙 Dark' : '☀️ Light'; $$('#themeToggle,#themeToggleMobile').forEach(btn=>{ if(btn) btn.textContent = label; }); }
function toggleTheme(){ setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); }
function setSeason(season){ document.documentElement.dataset.season = season; localStorage.setItem('anipick-season', season); $$('.season-card').forEach(btn=>btn.classList.toggle('active', btn.dataset.season===season)); renderParticles(season); }
function renderParticles(season){ const symbols = seasonParticle[season]; const wrap = $('#particles'); wrap.innerHTML = Array.from({length:34},(_,i)=>`<span style="left:${Math.random()*100}vw;animation-duration:${8+Math.random()*10}s;animation-delay:${Math.random()*-12}s;--drift:${(Math.random()*160-80).toFixed(0)}px">${symbols[i%symbols.length]}</span>`).join(''); }

function bindEvents(){
  $('#menuButton')?.addEventListener('click', e => { const menu = $('#mobileMenu'); const open = !menu.classList.contains('hidden'); menu.classList.toggle('hidden'); e.currentTarget.setAttribute('aria-expanded', String(!open)); });
  $$('#themeToggle,#themeToggleMobile').forEach(btn=>btn?.addEventListener('click', toggleTheme));
  $('#profileGrid').addEventListener('click', e => { const card = e.target.closest('[data-profile]'); if(!card) return; activeProfile = card.dataset.profile; localStorage.setItem('anipick-profile', activeProfile); renderProfiles(); renderSurveyResult(); renderHero(); });
  $$('.season-card').forEach(btn=>btn.addEventListener('click',()=>setSeason(btn.dataset.season)));
  $$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filter-chip').forEach(c=>c.classList.remove('active')); btn.classList.add('active'); currentFilter=btn.dataset.filter; renderGrid(); }));
  $('#surveyForm').addEventListener('submit', e => { e.preventDefault(); renderSurveyResult(getAnswers()); $('#surveyResult').scrollIntoView({behavior:'smooth', block:'center'}); });
  $('#randomHeroButton').addEventListener('click',()=>renderHero(pickRandom()));
  $('#clearWatchlist').addEventListener('click',()=>{ watchlist=[]; saveWatchlist(); renderWatchlist(); });
  document.body.addEventListener('click', e => { const add=e.target.closest('[data-add]'); const rem=e.target.closest('[data-remove]'); const hero=e.target.closest('[data-hero]'); if(add){ addToWatchlist(add.dataset.add); add.textContent='✓'; setTimeout(()=>{add.textContent=add.dataset.add?'＋':'+'},800); } if(rem) removeFromWatchlist(rem.dataset.remove); if(hero) renderHero(findAnime(hero.dataset.hero)); });
}

function init(){
  setTheme(localStorage.getItem('anipick-theme') || 'dark');
  setSeason(localStorage.getItem('anipick-season') || 'spring');
  renderProfiles(); renderHero(); renderSurveyResult(); renderGrid(); renderWatchlist(); bindEvents();
}
document.addEventListener('DOMContentLoaded', init);
