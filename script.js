const animeList = [
{ id:'frieren', title:'장송의 프리렌', genre:'fantasy', mood:'comfort', world:'fantasy', pace:'slow', length:'medium', score:98, symbol:'旅', image:'https://cdn.myanimelist.net/images/anime/1015/138006l.webp', tags:['판타지','힐링','여운'], summary:'마왕을 쓰러뜨린 이후의 시간을 따라가며 모험의 의미와 기억을 되짚는 감성 판타지.', reason:'조용하지만 깊은 여운과 아름다운 작화가 필요할 때 가장 안정적인 선택이에요.' },
  { id:'jjk', title:'주술회전', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:94, symbol:'呪', image:'https://cdn.myanimelist.net/images/anime/1171/109222l.webp', tags:['액션','다크','능력 배틀'], summary:'저주와 주술사가 충돌하는 세계에서 펼쳐지는 빠르고 강렬한 현대 퇴마 액션.', reason:'속도감 있는 전투와 스타일리시한 연출을 원한다면 추천해요.' },
  { id:'spy-family', title:'스파이 패밀리', genre:'healing', mood:'comfort', world:'modern', pace:'balanced', length:'short', score:91, symbol:'家', image:'https://cdn.myanimelist.net/images/anime/1441/122795l.webp', tags:['코미디','가족','힐링'], summary:'스파이, 암살자, 초능력자가 가짜 가족으로 만나 진짜 같은 일상을 만들어가는 코미디.', reason:'부담 없이 웃고 싶거나 같이 보기 좋은 작품을 찾을 때 좋아요.' },
  { id:'your-lie', title:'4월은 너의 거짓말', genre:'romance', mood:'heart', world:'modern', pace:'slow', length:'medium', score:90, symbol:'音', image:'https://cdn.myanimelist.net/images/anime/1405/143284l.webp', tags:['로맨스','음악','감동'], summary:'음악을 잃은 피아노 소년이 바이올리니스트를 만나 다시 감정을 마주하는 이야기.', reason:'감정선이 진하고 음악이 오래 남는 로맨스를 보고 싶을 때 잘 맞아요.' },
  { id:'steins-gate', title:'슈타인즈 게이트', genre:'mystery', mood:'brain', world:'sf', pace:'slow', length:'medium', score:97, symbol:'時', image:'https://cdn.myanimelist.net/images/anime/1935/127974l.webp', tags:['SF','타임리프','반전'], summary:'우연한 시간 간섭 실험이 세계선을 뒤흔드는 SF 스릴러.', reason:'초반 빌드업 뒤에 터지는 강한 몰입감과 반전을 원한다면 강력 추천해요.' },
  { id:'demon-slayer', title:'귀멸의 칼날', genre:'action', mood:'power', world:'japan', pace:'fast', length:'medium', score:93, symbol:'炎', image:'https://cdn.myanimelist.net/images/anime/1286/99889l.webp', tags:['액션','일본풍','작화'], summary:'혈귀가 된 여동생을 되돌리기 위해 검사가 되는 소년의 성장 액션.', reason:'화려한 전투 연출과 일본풍 시대극 분위기를 즐기기 좋아요.' },
  { id:'apothecary', title:'약사의 혼잣말', genre:'mystery', mood:'brain', world:'japan', pace:'balanced', length:'medium', score:92, symbol:'薬', image:'https://cdn.myanimelist.net/images/anime/1708/138033l.webp', tags:['추리','궁중','캐릭터'], summary:'약학 지식과 관찰력을 가진 마오마오가 궁중 사건을 풀어가는 미스터리 드라마.', reason:'날카로운 추리와 매력적인 주인공의 티키타카를 좋아한다면 잘 맞아요.' },
  { id:'haikyu', title:'하이큐!!', genre:'healing', mood:'power', world:'modern', pace:'fast', length:'long', score:95, symbol:'翔', image:'https://cdn.myanimelist.net/images/anime/7/76014l.webp', tags:['스포츠','성장','팀워크'], summary:'작은 키의 배구 소년이 팀원들과 함께 한계를 넘어서는 청춘 스포츠 애니.', reason:'기분을 끌어올리고 싶을 때 노력과 팀워크의 에너지가 확실히 전달돼요.' },
  { id:'violet', title:'바이올렛 에버가든', genre:'healing', mood:'comfort', world:'fantasy', pace:'slow', length:'short', score:96, symbol:'便', image:'https://cdn.myanimelist.net/images/anime/1795/95088l.webp', tags:['힐링','감동','작화'], summary:'감정을 배우는 자동수기인형이 편지를 통해 사람들의 마음을 이어주는 이야기.', reason:'아름다운 영상미와 잔잔한 감동을 원할 때 최고의 선택지 중 하나예요.' },
  { id:'kaguya', title:'카구야 님은 고백받고 싶어', genre:'romance', mood:'heart', world:'modern', pace:'fast', length:'short', score:93, symbol:'恋', image:'https://cdn.myanimelist.net/images/anime/1295/106551l.webp', tags:['로맨스','코미디','두뇌전'], summary:'서로 좋아하지만 먼저 고백하지 않으려는 두 천재의 귀여운 심리전 로맨틱 코미디.', reason:'웃기면서 설레는 로맨스를 원한다면 실패 확률이 낮아요.' },
  { id:'aot', title:'진격의 거인', genre:'action', mood:'brain', world:'fantasy', pace:'fast', length:'long', score:99, symbol:'壁', image:'https://cdn.myanimelist.net/images/anime/10/47347l.webp', tags:['액션','정치극','반전'], summary:'거인에게 둘러싸인 세계의 진실을 추적하며 전쟁, 자유, 선택을 다루는 대서사시.', reason:'압도적인 스케일과 끊임없는 반전, 무거운 주제를 원할 때 추천해요.' },
  { id:'mushoku', title:'무직전생', genre:'fantasy', mood:'power', world:'fantasy', pace:'balanced', length:'long', score:89, symbol:'魔', image:'https://cdn.myanimelist.net/images/anime/1530/117776l.webp', tags:['이세계','판타지','성장'], summary:'새로운 세계에서 다시 태어난 주인공이 마법과 모험 속에서 삶을 배워가는 판타지.', reason:'정통 판타지 모험과 성장형 서사를 길게 즐기고 싶을 때 좋아요.' },
  { id:'naruto', title:'나루토', genre:'action', mood:'power', world:'japan', pace:'balanced', length:'long', score:88, symbol:'忍', image:'https://cdn.myanimelist.net/images/anime/1141/142503l.webp', tags:['닌자','성장','우정'], summary:'닌자 세계에서 인정받고 싶은 소년 나루토가 동료와 함께 성장하는 장편 액션.', reason:'왕도 성장물과 긴 호흡의 캐릭터 서사를 좋아한다면 잘 맞아요.' },
  { id:'one-piece', title:'원피스', genre:'fantasy', mood:'power', world:'fantasy', pace:'balanced', length:'long', score:97, symbol:'海', image:'https://cdn.myanimelist.net/images/anime/1244/138851l.webp', tags:['모험','해적','동료'], summary:'해적왕을 꿈꾸는 루피와 밀짚모자 일당이 바다를 누비는 대형 모험 서사.', reason:'끝없는 세계관 탐험과 동료애를 길게 즐기고 싶을 때 추천해요.' },
  { id:'death-note', title:'데스노트', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'medium', score:96, symbol:'死', image:'https://cdn.myanimelist.net/images/anime/1079/138100l.webp', tags:['심리전','스릴러','두뇌전'], summary:'이름을 쓰면 사람이 죽는 노트를 얻은 천재와 명탐정의 치열한 심리전.', reason:'한 번 보기 시작하면 멈추기 어려운 두뇌 싸움을 원할 때 좋아요.' },
  { id:'fmab', title:'강철의 연금술사 브라더후드', genre:'fantasy', mood:'brain', world:'fantasy', pace:'balanced', length:'long', score:99, symbol:'錬', image:'https://cdn.myanimelist.net/images/anime/1208/94745l.webp', tags:['판타지','모험','완성도'], summary:'금기를 범한 형제가 잃어버린 몸을 되찾기 위해 진실을 추적하는 명작 판타지.', reason:'서사 완성도와 액션, 감동의 균형이 뛰어난 작품을 찾는다면 추천해요.' },
  { id:'cowboy-bebop', title:'카우보이 비밥', genre:'mystery', mood:'comfort', world:'sf', pace:'slow', length:'short', score:95, symbol:'星', image:'https://cdn.myanimelist.net/images/anime/4/19644l.webp', tags:['SF','느와르','재즈'], summary:'우주 현상금 사냥꾼들의 고독한 여정을 재즈와 느와르 감성으로 그린 클래식.', reason:'세련된 분위기와 에피소드형 감상을 원할 때 잘 맞아요.' },
  { id:'chainsaw-man', title:'체인소 맨', genre:'action', mood:'power', world:'modern', pace:'fast', length:'short', score:91, symbol:'鋸', image:'https://cdn.myanimelist.net/images/anime/1806/126216l.webp', tags:['액션','고어','악마'], summary:'악마와 계약한 소년 덴지가 잔혹하고도 기묘한 세계에 뛰어드는 다크 액션.', reason:'강렬한 연출과 독특한 캐릭터 감각을 원한다면 추천해요.' },
  { id:'oshi-no-ko', title:'최애의 아이', genre:'mystery', mood:'brain', world:'modern', pace:'balanced', length:'medium', score:94, symbol:'推', image:'https://cdn.myanimelist.net/images/anime/1812/134736l.webp', tags:['아이돌','미스터리','드라마'], summary:'연예계의 빛과 그림자, 환생과 복수의 미스터리를 결합한 화제작.', reason:'화려한 소재 뒤에 숨은 어두운 진실을 따라가는 이야기를 좋아하면 잘 맞아요.' },
  { id:'solo-leveling', title:'나 혼자만 레벨업', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:90, symbol:'級', image:'https://cdn.myanimelist.net/images/anime/1801/142390l.webp', tags:['헌터','성장','액션'], summary:'최약체 헌터가 시스템의 힘으로 압도적인 성장 곡선을 그리는 액션 판타지.', reason:'빠른 성장과 시원한 전투 카타르시스를 원할 때 좋아요.' },
  { id:'mha', title:'나의 히어로 아카데미아', genre:'action', mood:'power', world:'modern', pace:'balanced', length:'long', score:89, symbol:'英', image:'https://cdn.myanimelist.net/images/anime/10/78745l.webp', tags:['히어로','성장','학원'], summary:'개성이 능력이 된 세계에서 히어로를 꿈꾸는 소년의 성장 학원 액션.', reason:'히어로물과 팀 배틀, 성장 서사를 함께 즐기고 싶다면 추천해요.' },
  { id:'mob-psycho', title:'모브사이코 100', genre:'action', mood:'comfort', world:'modern', pace:'fast', length:'short', score:94, symbol:'霊', image:'https://cdn.myanimelist.net/images/anime/8/80356l.webp', tags:['초능력','코미디','성장'], summary:'강력한 초능력을 가진 평범한 소년 모브가 감정과 성장을 배워가는 이야기.', reason:'유쾌하지만 따뜻한 성장물과 폭발적인 연출을 동시에 원할 때 좋아요.' },
  { id:'made-in-abyss', title:'메이드 인 어비스', genre:'fantasy', mood:'brain', world:'fantasy', pace:'slow', length:'medium', score:95, symbol:'淵', image:'https://cdn.myanimelist.net/images/anime/6/86733l.webp', tags:['모험','다크','미스터리'], summary:'거대한 구멍 어비스를 탐험하며 아름답고 잔혹한 비밀을 마주하는 모험 판타지.', reason:'귀여운 외형과 대비되는 깊은 미스터리와 어두운 세계관을 원할 때 추천해요.' },
  { id:'vinland', title:'빈란드 사가', genre:'action', mood:'brain', world:'japan', pace:'slow', length:'long', score:96, symbol:'剣', image:'https://cdn.myanimelist.net/images/anime/1500/103005l.webp', tags:['전쟁','복수','성장'], summary:'바이킹 시대를 배경으로 복수와 전쟁, 인간의 삶을 묵직하게 그린 역사 드라마.', reason:'무게감 있는 성장과 전쟁 서사를 보고 싶다면 잘 맞아요.' },
  { id:'bocchi', title:'봇치 더 록!', genre:'healing', mood:'comfort', world:'modern', pace:'fast', length:'short', score:92, symbol:'結', image:'https://cdn.myanimelist.net/images/anime/1448/127956l.webp', tags:['밴드','코미디','청춘'], summary:'극도로 낯가리는 소녀가 밴드 활동을 통해 조금씩 세상과 연결되는 음악 코미디.', reason:'가볍게 웃으면서도 청춘의 성장을 느끼고 싶을 때 추천해요.' },
  { id:'blue-lock', title:'블루 록', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:88, symbol:'蹴', image:'https://cdn.myanimelist.net/images/anime/1258/126929l.webp', tags:['스포츠','경쟁','축구'], summary:'세계 최고의 스트라이커를 만들기 위한 극한 경쟁 프로젝트를 그린 축구 애니.', reason:'팀워크보다 생존 경쟁에 가까운 뜨거운 스포츠물을 원할 때 좋아요.' },
  { id:'horimiya', title:'호리미야', genre:'romance', mood:'heart', world:'modern', pace:'balanced', length:'short', score:90, symbol:'恋', image:'https://cdn.myanimelist.net/images/anime/1695/111486l.webp', tags:['로맨스','학원','일상'], summary:'학교와 집에서 다른 얼굴을 가진 두 사람이 가까워지는 따뜻한 학원 로맨스.', reason:'편안하고 사랑스러운 분위기의 로맨스를 찾는다면 추천해요.' },
  { id:'one-punch', title:'원펀맨', genre:'action', mood:'power', world:'modern', pace:'fast', length:'short', score:92, symbol:'拳', image:'https://cdn.myanimelist.net/images/anime/12/76049l.webp', tags:['히어로','코미디','액션'], summary:'어떤 적이든 한 방에 끝내는 히어로 사이타마의 유쾌하고 시원한 액션 코미디.', reason:'부담 없이 강력한 액션과 웃음을 동시에 원할 때 좋아요.' },
  { id:'attack-on-titan', title:'진격의 거인', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'medium', score:86, symbol:'進', image:'https://cdn.myanimelist.net/images/anime/10/47347l.webp', tags:['액션','수상작','드라마'], summary:'거대한 벽 안에서 살아가던 인류가 거인의 습격과 세계의 진실을 마주하는 생존 서사.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'death-note-2', title:'데스노트', genre:'mystery', mood:'brain', world:'fantasy', pace:'balanced', length:'medium', score:86, symbol:'デ', image:'https://cdn.myanimelist.net/images/anime/1079/138100l.webp', tags:['초자연','서스펜스','심리'], summary:'이름을 쓰면 사람이 죽는 노트를 손에 넣은 천재가 정의와 광기의 경계에서 수사망과 맞선다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'fullmetal-alchemist-brotherhood', title:'강철의 연금술사 브라더후드', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:91, symbol:'鋼', image:'https://cdn.myanimelist.net/images/anime/1208/94745l.webp', tags:['액션','모험','드라마'], summary:'죽은 어머니를 되살리려다 모든 것을 잃은 형제가 몸을 되찾기 위해 현자의 돌을 추적한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'one-punch-man', title:'원펀맨', genre:'action', mood:'power', world:'modern', pace:'fast', length:'short', score:85, symbol:'ワ', image:'https://cdn.myanimelist.net/images/anime/12/76049l.webp', tags:['액션','코미디','성인 캐릭터'], summary:'너무 강해져 어떤 적도 한 방에 쓰러뜨리는 히어로가 지루함 속에서 진짜 싸움을 찾는다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'demon-slayer-kimetsu-no-yaiba', title:'귀멸의 칼날', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:84, symbol:'鬼', image:'https://cdn.myanimelist.net/images/anime/1286/99889l.webp', tags:['액션','수상작','초자연'], summary:'가족을 잃고 여동생이 혈귀가 된 소년이 그녀를 인간으로 되돌리기 위해 검을 든다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'my-hero-academia', title:'나의 히어로 아카데미아', genre:'action', mood:'power', world:'modern', pace:'fast', length:'short', score:82, symbol:'僕', image:'https://cdn.myanimelist.net/images/anime/10/78745l.webp', tags:['액션','학원','초능력'], summary:'초능력 사회에서 힘 없이 태어난 소년이 최고의 히어로를 꿈꾸며 성장한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'sword-art-online', title:'소드 아트 온라인', genre:'romance', mood:'heart', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'ソ', image:'https://cdn.myanimelist.net/images/anime/11/39717l.webp', tags:['액션','모험','판타지'], summary:'가상현실 게임에 갇힌 플레이어들이 목숨을 걸고 100층 던전 탈출에 도전한다.', reason:'설렘과 감정선을 편하게 따라가고 싶을 때 잘 맞아요.' },
  { id:'hunter-x-hunter', title:'헌터×헌터', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:90, symbol:'H', image:'https://cdn.myanimelist.net/images/anime/1337/99013l.webp', tags:['액션','모험','판타지'], summary:'아버지를 찾으려는 소년 곤이 헌터 시험을 시작으로 위험한 모험과 강적들을 만난다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'naruto-2', title:'나루토', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:82, symbol:'ナ', image:'https://cdn.myanimelist.net/images/anime/1141/142503l.webp', tags:['액션','모험','판타지'], summary:'마을의 문제아 나루토가 인정받는 닌자이자 호카게가 되기 위해 동료들과 성장한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'tokyo-ghoul', title:'도쿄 구울', genre:'mystery', mood:'brain', world:'fantasy', pace:'fast', length:'short', score:82, symbol:'東', image:'https://cdn.myanimelist.net/images/anime/1498/134443l.webp', tags:['액션','판타지','호러'], summary:'인간과 구울 사이의 존재가 된 대학생이 식욕과 정체성 사이에서 잔혹한 도시를 살아간다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'jujutsu-kaisen', title:'주술회전', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:85, symbol:'呪', image:'https://cdn.myanimelist.net/images/anime/1171/109222l.webp', tags:['액션','수상작','초자연'], summary:'저주의 왕을 몸에 품은 소년이 주술고전에 들어가 저주와 싸우는 길을 선택한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'your-name', title:'너의 이름은.', genre:'healing', mood:'comfort', world:'modern', pace:'slow', length:'short', score:88, symbol:'君', image:'https://cdn.myanimelist.net/images/anime/5/87048l.webp', tags:['수상작','드라마'], summary:'서로의 몸이 뒤바뀌는 두 고등학생이 시간과 재난을 넘어 서로를 찾아간다.', reason:'부담 없이 보기 좋고 여운이 남는 작품을 찾을 때 잘 맞아요.' },
  { id:'attack-on-titan-season-2', title:'진격의 거인 2기', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'short', score:85, symbol:'進', image:'https://cdn.myanimelist.net/images/anime/4/84177l.webp', tags:['액션','드라마','서스펜스'], summary:'거인의 정체와 벽 안의 비밀이 드러나며 조사병단의 믿음이 흔들리기 시작한다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'steins-gate-2', title:'슈타인즈 게이트', genre:'mystery', mood:'brain', world:'sf', pace:'slow', length:'medium', score:91, symbol:'S', image:'https://cdn.myanimelist.net/images/anime/1935/127974l.webp', tags:['드라마','SF','서스펜스'], summary:'우연히 시간 메시지를 보내게 된 연구회가 세계선의 비극을 바꾸기 위해 분투한다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'naruto-shippuden', title:'나루토 질풍전', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:83, symbol:'-', image:'https://cdn.myanimelist.net/images/anime/1565/111305l.webp', tags:['액션','모험','판타지'], summary:'성장해 돌아온 나루토가 사스케와 아카츠키를 둘러싼 더 큰 운명에 맞선다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'my-hero-academia-season-2', title:'나의 히어로 아카데미아 2기', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:82, symbol:'僕', image:'https://cdn.myanimelist.net/images/anime/12/85221l.webp', tags:['액션','학원','초능력'], summary:'유에이 체육대회와 히어로 인턴을 통해 학생들이 각자의 한계와 신념을 시험받는다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'one-piece-2', title:'원피스', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:87, symbol:'O', image:'https://cdn.myanimelist.net/images/anime/1244/138851l.webp', tags:['액션','모험','판타지'], summary:'루피와 밀짚모자 일당이 원피스를 찾아 위대한 항로의 섬들을 모험한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'attack-on-titan-season-3', title:'진격의 거인 3기', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'short', score:86, symbol:'進', image:'https://cdn.myanimelist.net/images/anime/1173/92110l.webp', tags:['액션','드라마','서스펜스'], summary:'왕정의 음모와 지하실의 단서가 맞물리며 벽 안 세계의 숨겨진 역사가 드러난다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'a-silent-voice', title:'목소리의 형태', genre:'healing', mood:'comfort', world:'modern', pace:'slow', length:'short', score:89, symbol:'聲', image:'https://cdn.myanimelist.net/images/anime/1122/96435l.webp', tags:['수상작','드라마','소년만화'], summary:'과거에 청각장애 소녀를 괴롭힌 소년이 죄책감을 안고 다시 그녀에게 다가간다.', reason:'부담 없이 보기 좋고 여운이 남는 작품을 찾을 때 잘 맞아요.' },
  { id:'attack-on-titan-season-3-part-2', title:'진격의 거인 3기 파트 2', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'short', score:90, symbol:'進', image:'https://cdn.myanimelist.net/images/anime/1517/100633l.webp', tags:['액션','드라마','서스펜스'], summary:'조사병단이 시간시나 탈환전에 모든 것을 걸고 지하실의 진실에 도달한다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'no-game-no-life', title:'노 게임 노 라이프', genre:'fantasy', mood:'power', world:'fantasy', pace:'balanced', length:'short', score:82, symbol:'ノ', image:'https://cdn.myanimelist.net/images/anime/1074/111944l.webp', tags:['코미디','판타지','러브코미디'], summary:'천재 게이머 남매가 모든 것이 게임으로 결정되는 이세계에서 신에게 도전한다.', reason:'새로운 세계관과 모험의 재미를 느끼고 싶을 때 추천해요.' },
  { id:'code-geass-lelouch-of-the-rebellion', title:'코드 기아스 반역의 를르슈', genre:'fantasy', mood:'brain', world:'sf', pace:'slow', length:'medium', score:87, symbol:'コ', image:'https://cdn.myanimelist.net/images/anime/1032/135088l.webp', tags:['수상작','드라마','SF'], summary:'초강대국에 빼앗긴 일본에서 망명 황자가 절대명령의 힘으로 반역을 시작한다.', reason:'새로운 세계관과 모험의 재미를 느끼고 싶을 때 추천해요.' },
  { id:'re-zero-starting-life-in-another-world', title:'리제로부터 시작하는 이세계 생활', genre:'mystery', mood:'brain', world:'fantasy', pace:'slow', length:'medium', score:82, symbol:'R', image:'https://cdn.myanimelist.net/images/anime/1522/128039l.webp', tags:['드라마','판타지','서스펜스'], summary:'이세계에 소환된 소년이 죽으면 되돌아가는 능력으로 사랑하는 사람들을 구하려 한다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'your-lie-in-april', title:'4월은 너의 거짓말', genre:'romance', mood:'heart', world:'modern', pace:'slow', length:'medium', score:86, symbol:'四', image:'https://cdn.myanimelist.net/images/anime/1405/143284l.webp', tags:['드라마','로맨스','삼각관계'], summary:'피아노를 칠 수 없게 된 소년이 자유로운 바이올리니스트를 만나 다시 음악과 마주한다.', reason:'설렘과 감정선을 편하게 따라가고 싶을 때 잘 맞아요.' },
  { id:'my-hero-academia-season-3', title:'나의 히어로 아카데미아 3기', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:82, symbol:'僕', image:'https://cdn.myanimelist.net/images/anime/1319/92084l.webp', tags:['액션','학원','초능력'], summary:'훈련 합숙과 빌런 연합의 습격 속에서 학생들과 히어로 사회가 큰 전환점을 맞는다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'toradora', title:'토라도라!', genre:'romance', mood:'heart', world:'modern', pace:'slow', length:'medium', score:82, symbol:'と', image:'https://cdn.myanimelist.net/images/anime/13/22128l.webp', tags:['드라마','로맨스','삼각관계'], summary:'험상궂은 소년과 작은 호랑이 같은 소녀가 서로의 짝사랑을 돕다 마음이 흔들린다.', reason:'설렘과 감정선을 편하게 따라가고 싶을 때 잘 맞아요.' },
  { id:'mob-psycho-100', title:'모브사이코 100', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'short', score:85, symbol:'モ', image:'https://cdn.myanimelist.net/images/anime/8/80356l.webp', tags:['액션','코미디','초자연'], summary:'강력한 초능력을 숨긴 평범한 소년이 감정과 인간관계를 배우며 성장한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'noragami', title:'노라가미', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'short', score:82, symbol:'ノ', image:'https://cdn.myanimelist.net/images/anime/1886/128266l.webp', tags:['액션','초자연','신화'], summary:'이름 없는 가난한 신 야토가 인간 소녀와 인연을 맺고 자신만의 신사를 꿈꾼다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'erased', title:'나만이 없는 거리', genre:'mystery', mood:'brain', world:'modern', pace:'balanced', length:'short', score:83, symbol:'僕', image:'https://cdn.myanimelist.net/images/anime/10/77957l.webp', tags:['미스터리','서스펜스','심리'], summary:'시간을 되돌리는 능력을 가진 남자가 어린 시절 사건으로 돌아가 연쇄 비극을 막으려 한다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'attack-on-titan-final-season', title:'진격의 거인 파이널 시즌', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'medium', score:88, symbol:'進', image:'https://cdn.myanimelist.net/images/anime/1000/110531l.webp', tags:['액션','드라마','서스펜스'], summary:'바다 너머의 적과 마주한 인물들이 자유와 복수를 위해 전쟁의 중심으로 들어간다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'akame-ga-kill', title:'아카메가 벤다!', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'ア', image:'https://cdn.myanimelist.net/images/anime/1429/95946l.webp', tags:['액션','판타지','고어'], summary:'부패한 제국을 바꾸려는 소년이 암살자 집단과 함께 피의 혁명에 뛰어든다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'assassination-classroom', title:'암살교실', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:82, symbol:'暗', image:'https://cdn.myanimelist.net/images/anime/5/75639l.webp', tags:['액션','코미디','학원'], summary:'지구를 파괴하겠다는 초생물 선생님을 학생들이 암살 대상으로 삼고 함께 성장한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'the-seven-deadly-sins', title:'일곱 개의 대죄', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'七', image:'https://cdn.myanimelist.net/images/anime/8/65409l.webp', tags:['액션','모험','판타지'], summary:'왕국의 공주가 전설의 기사단을 찾아 나라를 뒤흔드는 음모에 맞선다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'bleach', title:'블리치', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:82, symbol:'B', image:'https://cdn.myanimelist.net/images/anime/1541/147774l.webp', tags:['액션','모험','초자연'], summary:'영혼을 보는 고등학생이 사신의 힘을 얻고 악령과 사후 세계의 싸움에 휘말린다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'angel-beats', title:'엔젤 비트!', genre:'fantasy', mood:'power', world:'fantasy', pace:'slow', length:'short', score:82, symbol:'A', image:'https://cdn.myanimelist.net/images/anime/1244/111115l.webp', tags:['드라마','판타지','학원'], summary:'사후 세계의 학교에 모인 청춘들이 미련과 기억을 마주하며 떠날 준비를 한다.', reason:'새로운 세계관과 모험의 재미를 느끼고 싶을 때 추천해요.' },
  { id:'haikyu-2', title:'하이큐!!', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:84, symbol:'ハ', image:'https://cdn.myanimelist.net/images/anime/7/76014l.webp', tags:['스포츠','학원','팀 스포츠'], summary:'작은 키의 배구 소년 히나타가 카라스노 팀과 함께 전국 무대를 향해 도약한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'the-promised-neverland', title:'약속의 네버랜드', genre:'mystery', mood:'brain', world:'modern', pace:'balanced', length:'short', score:85, symbol:'約', image:'https://cdn.myanimelist.net/images/anime/1830/118780l.webp', tags:['미스터리','서스펜스','심리'], summary:'평화로운 고아원의 아이들이 끔찍한 진실을 알고 탈출 계획을 세운다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'konosuba-god-s-blessing-on-this-wonderful-worl', title:'이 멋진 세계에 축복을!', genre:'action', mood:'power', world:'fantasy', pace:'balanced', length:'short', score:82, symbol:'こ', image:'https://cdn.myanimelist.net/images/anime/1895/142748l.webp', tags:['모험','코미디','판타지'], summary:'이세계에 환생한 소년이 허당 여신과 괴짜 동료들과 엉망진창 모험을 벌인다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'the-future-diary', title:'미래일기', genre:'mystery', mood:'brain', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'未', image:'https://cdn.myanimelist.net/images/anime/13/33465l.webp', tags:['액션','초자연','서스펜스'], summary:'미래가 적힌 휴대폰을 받은 소년이 생존 게임과 집착적인 소녀의 보호 속에 휘말린다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'sword-art-online-ii', title:'소드 아트 온라인 2기', genre:'romance', mood:'heart', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'ソ', image:'https://cdn.myanimelist.net/images/anime/1223/121999l.webp', tags:['액션','모험','판타지'], summary:'키리토가 총격 사건의 진실을 좇아 새로운 가상현실 게임 건 게일 온라인에 잠입한다.', reason:'설렘과 감정선을 편하게 따라가고 싶을 때 잘 맞아요.' },
  { id:'cowboy-bebop-2', title:'카우보이 비밥', genre:'action', mood:'power', world:'sf', pace:'fast', length:'medium', score:88, symbol:'カ', image:'https://cdn.myanimelist.net/images/anime/4/19644l.webp', tags:['액션','수상작','SF'], summary:'우주를 떠도는 현상금 사냥꾼들이 각자의 과거와 고독을 안고 표적을 쫓는다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'blue-exorcist', title:'청의 엑소시스트', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'青', image:'https://cdn.myanimelist.net/images/anime/10/75195l.webp', tags:['액션','초자연','신화'], summary:'악마의 아들로 태어난 소년이 운명을 거스르고 엑소시스트가 되려 한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'parasyte-the-maxim', title:'기생수 세이의 격률', genre:'mystery', mood:'brain', world:'sf', pace:'fast', length:'medium', score:83, symbol:'寄', image:'https://cdn.myanimelist.net/images/anime/3/73178l.webp', tags:['액션','호러','SF'], summary:'오른손에 기생 생물이 깃든 고등학생이 인간을 잡아먹는 존재들과 싸운다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'neon-genesis-evangelion', title:'신세기 에반게리온', genre:'mystery', mood:'brain', world:'sf', pace:'slow', length:'medium', score:84, symbol:'新', image:'https://cdn.myanimelist.net/images/anime/1314/108941l.webp', tags:['실험적','수상작','드라마'], summary:'소년 파일럿들이 거대 병기 에바에 올라 정체불명의 사도와 마음의 균열에 맞선다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'spirited-away', title:'센과 치히로의 행방불명', genre:'action', mood:'power', world:'fantasy', pace:'balanced', length:'short', score:88, symbol:'千', image:'https://cdn.myanimelist.net/images/anime/6/79597l.webp', tags:['모험','수상작','판타지'], summary:'신들의 세계에迷失한 소녀가 부모를 구하고 집으로 돌아가기 위해 온천장에서 일한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'violet-evergarden', title:'바이올렛 에버가든', genre:'healing', mood:'comfort', world:'modern', pace:'slow', length:'short', score:87, symbol:'ヴ', image:'https://cdn.myanimelist.net/images/anime/1795/95088l.webp', tags:['드라마'], summary:'전쟁을 겪은 소녀가 편지를 대필하며 사랑한다는 말의 의미를 배워간다.', reason:'부담 없이 보기 좋고 여운이 남는 작품을 찾을 때 잘 맞아요.' },
  { id:'chainsaw-man-2', title:'체인소 맨', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'short', score:84, symbol:'チ', image:'https://cdn.myanimelist.net/images/anime/1806/126216l.webp', tags:['액션','판타지','고어'], summary:'빚에 시달리던 소년이 체인소 악마와 하나가 되어 공안 데빌 헌터로 살아간다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'rascal-does-not-dream-of-bunny-girl-senpai', title:'청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다', genre:'romance', mood:'heart', world:'fantasy', pace:'slow', length:'short', score:82, symbol:'青', image:'https://cdn.myanimelist.net/images/anime/1301/93586l.webp', tags:['드라마','로맨스','초자연'], summary:'청춘증후군이라는 이상 현상을 겪는 소녀들과 소년이 상처와 마음을 풀어간다.', reason:'설렘과 감정선을 편하게 따라가고 싶을 때 잘 맞아요.' },
  { id:'dr-stone', title:'닥터 스톤', genre:'action', mood:'power', world:'modern', pace:'balanced', length:'medium', score:83, symbol:'ド', image:'https://cdn.myanimelist.net/images/anime/1613/102576l.webp', tags:['모험','코미디','소년만화'], summary:'전 인류가 돌이 된 뒤 깨어난 과학 소년이 문명을 처음부터 다시 세운다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'code-geass-lelouch-of-the-rebellion-r2', title:'코드 기아스 반역의 를르슈 2기', genre:'fantasy', mood:'brain', world:'sf', pace:'slow', length:'medium', score:89, symbol:'コ', image:'https://cdn.myanimelist.net/images/anime/1088/135089l.webp', tags:['수상작','드라마','SF'], summary:'기억을 되찾은 를르슈가 세계를 바꾸기 위한 마지막 반역의 판을 움직인다.', reason:'새로운 세계관과 모험의 재미를 느끼고 싶을 때 추천해요.' },
  { id:'kaguya-sama-love-is-war', title:'카구야 님은 고백받고 싶어', genre:'romance', mood:'heart', world:'modern', pace:'balanced', length:'short', score:84, symbol:'か', image:'https://cdn.myanimelist.net/images/anime/1295/106551l.webp', tags:['코미디','로맨스','학원'], summary:'서로 좋아하지만 먼저 고백하지 않으려는 학생회 천재들이 심리전을 벌인다.', reason:'설렘과 감정선을 편하게 따라가고 싶을 때 잘 맞아요.' },
  { id:'death-parade', title:'데스 퍼레이드', genre:'mystery', mood:'brain', world:'fantasy', pace:'slow', length:'short', score:82, symbol:'デ', image:'https://cdn.myanimelist.net/images/anime/5/71553l.webp', tags:['드라마','판타지','서스펜스'], summary:'죽은 사람들이 도착하는 바에서 게임을 통해 삶의 진실과 심판이 드러난다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'my-hero-academia-season-4', title:'나의 히어로 아카데미아 4기', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:82, symbol:'僕', image:'https://cdn.myanimelist.net/images/anime/1412/107914l.webp', tags:['액션','학원','초능력'], summary:'데쿠가 프로 히어로와 함께 인턴 활동을 하며 오버홀 사건에 맞선다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'black-clover', title:'블랙 클로버', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:82, symbol:'ブ', image:'https://cdn.myanimelist.net/images/anime/2/88336l.webp', tags:['액션','판타지','소년만화'], summary:'마력이 없는 소년 아스타가 반마법 검으로 마법제의 꿈에 도전한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'tokyo-ghoul-a', title:'도쿄 구울 루트 에이', genre:'mystery', mood:'brain', world:'fantasy', pace:'fast', length:'short', score:82, symbol:'東', image:'https://cdn.myanimelist.net/images/anime/1889/123307l.webp', tags:['액션','판타지','호러'], summary:'구울 세계에 깊이 발을 들인 카네키가 인간성과 힘 사이에서 다른 길을 택한다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'spy-x-family', title:'스파이 패밀리', genre:'action', mood:'power', world:'modern', pace:'fast', length:'short', score:84, symbol:'S', image:'https://cdn.myanimelist.net/images/anime/1441/122795l.webp', tags:['액션','수상작','코미디'], summary:'스파이 아버지, 암살자 어머니, 초능력자 딸이 임무를 위해 가짜 가족이 된다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'one-punch-man-season-2', title:'원펀맨 2기', genre:'action', mood:'power', world:'modern', pace:'fast', length:'short', score:82, symbol:'ワ', image:'https://cdn.myanimelist.net/images/anime/1247/122044l.webp', tags:['액션','코미디','성인 캐릭터'], summary:'히어로 협회와 괴인 세력이 충돌하는 가운데 가로우가 히어로 사냥을 시작한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'jojo-s-bizarre-adventure-2012', title:'죠죠의 기묘한 모험', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'ジ', image:'https://cdn.myanimelist.net/images/anime/3/40409l.webp', tags:['액션','모험','초자연'], summary:'죠스타 가문의 후손들이 기묘한 능력과 숙명을 이어받아 악과 맞선다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'kill-la-kill', title:'킬라킬', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'キ', image:'https://cdn.myanimelist.net/images/anime/1464/111943l.webp', tags:['액션','코미디','판타지'], summary:'아버지의 죽음을 쫓는 소녀가 살아있는 교복과 함께 지배적인 학생회에 도전한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'fairy-tail', title:'페어리 테일', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:82, symbol:'F', image:'https://cdn.myanimelist.net/images/anime/5/18179l.webp', tags:['액션','모험','판타지'], summary:'마도사 길드 페어리 테일의 동료들이 의뢰와 전투 속에서 가족 같은 유대를 쌓는다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'vinland-saga', title:'빈란드 사가', genre:'action', mood:'power', world:'japan', pace:'fast', length:'medium', score:88, symbol:'ヴ', image:'https://cdn.myanimelist.net/images/anime/1500/103005l.webp', tags:['액션','모험','드라마'], summary:'바이킹 시대의 소년 토르핀이 복수심을 안고 전장 속에서 진정한 전사를 배워간다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'darling-in-the-franxx', title:'달링 인 더 프랑키스', genre:'romance', mood:'heart', world:'sf', pace:'slow', length:'medium', score:82, symbol:'ダ', image:'https://cdn.myanimelist.net/images/anime/1614/90408l.webp', tags:['드라마','로맨스','SF'], summary:'아이들이 거대 로봇을 타고 괴물과 싸우며 사랑과 존재 이유를 알아간다.', reason:'설렘과 감정선을 편하게 따라가고 싶을 때 잘 맞아요.' },
  { id:'another', title:'어나더', genre:'mystery', mood:'brain', world:'modern', pace:'balanced', length:'short', score:82, symbol:'ア', image:'https://cdn.myanimelist.net/images/anime/4/75509l.webp', tags:['호러','미스터리','고어'], summary:'전학생이 저주받은 반의 비밀을 파헤치며 계속되는 의문의 죽음에 맞선다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'demon-slayer-kimetsu-no-yaiba-the-movie-mugen-', title:'귀멸의 칼날 무한열차편', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'short', score:85, symbol:'劇', image:'https://cdn.myanimelist.net/images/anime/1704/106947l.webp', tags:['액션','초자연','역사'], summary:'탄지로 일행이 무한열차에서 사람들을 잠재우는 혈귀와 최강의 위협을 만난다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'soul-eater', title:'소울 이터', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'long', score:82, symbol:'ソ', image:'https://cdn.myanimelist.net/images/anime/1071/149486l.webp', tags:['액션','코미디','판타지'], summary:'사신 무기 장인 학교의 학생들이 파트너 무기를 키우며 악한 영혼과 마녀에 맞선다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'gurren-lagann', title:'천원돌파 그렌라간', genre:'action', mood:'power', world:'sf', pace:'balanced', length:'medium', score:86, symbol:'天', image:'https://cdn.myanimelist.net/images/anime/4/5123l.webp', tags:['모험','수상작','SF'], summary:'지하 마을의 소년들이 드릴과 열혈로 지상과 우주를 향해 운명을 뚫고 나아간다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'the-rising-of-the-shield-hero', title:'방패 용사 성공담', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:82, symbol:'盾', image:'https://cdn.myanimelist.net/images/anime/1490/101365l.webp', tags:['액션','모험','드라마'], summary:'배신당한 방패 용사가 동료를 모아 누명을 벗고 파도 재앙에 맞선다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'charlotte', title:'샬럿', genre:'healing', mood:'comfort', world:'modern', pace:'slow', length:'short', score:82, symbol:'C', image:'https://cdn.myanimelist.net/images/anime/1826/147276l.webp', tags:['드라마','학원','초능력'], summary:'초능력을 가진 청소년들이 능력의 대가와 비밀 조직의 위협을 마주한다.', reason:'부담 없이 보기 좋고 여운이 남는 작품을 찾을 때 잘 맞아요.' },
  { id:'overlord', title:'오버로드', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'short', score:82, symbol:'オ', image:'https://cdn.myanimelist.net/images/anime/1945/136600l.webp', tags:['액션','모험','판타지'], summary:'게임 속 마왕 캐릭터로 남게 된 남자가 거대한 언데드 왕국을 이끌기 시작한다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'psycho-pass', title:'사이코패스', genre:'mystery', mood:'brain', world:'sf', pace:'fast', length:'medium', score:83, symbol:'サ', image:'https://cdn.myanimelist.net/images/anime/1314/142015l.webp', tags:['액션','미스터리','SF'], summary:'범죄 가능성을 수치화하는 사회에서 감시관들이 정의와 시스템의 모순을 추적한다.', reason:'반전과 추리, 긴장감 있는 이야기를 보고 싶을 때 좋아요.' },
  { id:'food-wars-shokugeki-no-soma', title:'식극의 소마', genre:'healing', mood:'comfort', world:'modern', pace:'balanced', length:'medium', score:82, symbol:'食', image:'https://cdn.myanimelist.net/images/anime/1444/148976l.webp', tags:['요리','러브코미디','학원'], summary:'식당집 아들이 명문 요리학교에서 요리 대결로 강자들과 맞붙는다.', reason:'부담 없이 보기 좋고 여운이 남는 작품을 찾을 때 잘 맞아요.' },
  { id:'demon-slayer-kimetsu-no-yaiba-entertainment-di', title:'귀멸의 칼날 환락의 거리편', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'short', score:87, symbol:'鬼', image:'https://cdn.myanimelist.net/images/anime/1908/120036l.webp', tags:['액션','초자연','역사'], summary:'탄지로 일행이 유곽에 숨어든 상현 혈귀를 쫓아 화려하고 처절한 전투를 벌인다.', reason:'시원한 전개와 몰입감 있는 장면을 원할 때 추천해요.' },
  { id:'extra-001', title:'슬램덩크', genre:'action', mood:'power', world:'japan', pace:'fast', length:'medium', score:81, symbol:'슬', image:'https://cdn.myanimelist.net/images/anime/12/86890l.webp', tags:['액션','성장','몰입'], summary:'농구 초보 강백호가 북산고에 들어가 천재들과 부딪히며 진짜 선수로 성장한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-002', title:'은혼', genre:'healing', mood:'comfort', world:'sf', pace:'balanced', length:'long', score:82, symbol:'은', image:'https://cdn.myanimelist.net/images/anime/4/50361l.webp', tags:['힐링','일상','여운'], summary:'외계인이 점령한 에도에서 해결사 긴토키와 동료들이 황당한 사건들을 처리한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-003', title:'유유백서', genre:'romance', mood:'heart', world:'modern', pace:'slow', length:'short', score:83, symbol:'유', image:'https://cdn.myanimelist.net/images/anime/1228/111372l.webp', tags:['로맨스','청춘','감정선'], summary:'불량 소년 유스케가 영계 탐정이 되어 인간계와 마계의 사건을 해결한다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-004', title:'이누야샤', genre:'mystery', mood:'brain', world:'fantasy', pace:'fast', length:'medium', score:84, symbol:'이', image:'https://cdn.myanimelist.net/images/anime/1589/95329l.webp', tags:['미스터리','반전','긴장감'], summary:'전국시대로 넘어간 소녀가 반요 이누야샤와 사혼의 구슬 조각을 찾아 모험한다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-005', title:'란마 1/2', genre:'fantasy', mood:'power', world:'japan', pace:'balanced', length:'long', score:85, symbol:'란', image:'https://cdn.myanimelist.net/images/anime/11/63453l.webp', tags:['판타지','모험','세계관'], summary:'찬물을 맞으면 여자가 되는 무술 소년 란마가 약혼자와 가족 소동에 휘말린다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-006', title:'명탐정 코난', genre:'action', mood:'power', world:'sf', pace:'slow', length:'short', score:86, symbol:'명', image:'https://cdn.myanimelist.net/images/anime/7/75199l.webp', tags:['액션','성장','몰입'], summary:'몸이 작아진 고등학생 탐정이 코난이라는 이름으로 사건과 검은 조직을 추적한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-007', title:'드래곤볼', genre:'healing', mood:'comfort', world:'modern', pace:'fast', length:'medium', score:87, symbol:'드', image:'https://cdn.myanimelist.net/images/anime/1887/92364l.webp', tags:['힐링','일상','여운'], summary:'손오공이 강적들과 싸우며 드래곤볼을 둘러싼 모험과 수련을 이어간다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-008', title:'드래곤볼 Z', genre:'romance', mood:'heart', world:'fantasy', pace:'balanced', length:'long', score:88, symbol:'드', image:'https://cdn.myanimelist.net/images/anime/1277/142022l.webp', tags:['로맨스','청춘','감정선'], summary:'성장한 손오공과 동료들이 사이어인, 프리저, 셀, 마인 부우 같은 우주적 적과 맞선다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-009', title:'드래곤볼 슈퍼', genre:'mystery', mood:'brain', world:'japan', pace:'slow', length:'short', score:89, symbol:'드', image:'https://cdn.myanimelist.net/images/anime/7/74606l.webp', tags:['미스터리','반전','긴장감'], summary:'손오공과 동료들이 파괴신과 다른 우주의 전사들을 만나 더 큰 힘의 세계로 나아간다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-010', title:'포켓몬스터', genre:'fantasy', mood:'power', world:'sf', pace:'fast', length:'medium', score:90, symbol:'포', image:'https://cdn.myanimelist.net/images/anime/1787/140239l.webp', tags:['판타지','모험','세계관'], summary:'포켓몬 트레이너 지우가 피카츄와 함께 배지를 모으며 최고의 트레이너를 꿈꾼다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-011', title:'디지몬 어드벤처', genre:'action', mood:'power', world:'modern', pace:'balanced', length:'long', score:91, symbol:'디', image:'https://cdn.myanimelist.net/images/anime/1471/99249l.webp', tags:['액션','성장','몰입'], summary:'디지털 월드에 선택받은 아이들이 디지몬 파트너와 함께 세계를 구하는 모험을 한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-012', title:'카드캡터 체리', genre:'healing', mood:'comfort', world:'fantasy', pace:'slow', length:'short', score:92, symbol:'카', image:'https://cdn.myanimelist.net/images/anime/8/60781l.webp', tags:['힐링','일상','여운'], summary:'초등학생 체리가 흩어진 마법 카드들을 모으며 카드캡터로 성장한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-013', title:'세일러 문', genre:'romance', mood:'heart', world:'japan', pace:'fast', length:'medium', score:93, symbol:'세', image:'https://cdn.myanimelist.net/images/anime/1440/92258l.webp', tags:['로맨스','청춘','감정선'], summary:'평범한 소녀 우사기가 세일러 전사로 각성해 사랑과 지구를 지키기 위해 싸운다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-014', title:'건담 수성의 마녀', genre:'mystery', mood:'brain', world:'sf', pace:'balanced', length:'long', score:94, symbol:'건', image:'https://cdn.myanimelist.net/images/anime/1440/127624l.webp', tags:['미스터리','반전','긴장감'], summary:'기업 학교의 전학생 슬레타가 건담 에어리얼과 함께 결투와 음모의 중심에 선다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-015', title:'기동전사 건담', genre:'fantasy', mood:'power', world:'modern', pace:'slow', length:'short', score:95, symbol:'기', image:'https://cdn.myanimelist.net/images/anime/5/88524l.webp', tags:['판타지','모험','세계관'], summary:'우주세기 전쟁 속에서 소년 아무로가 건담에 올라 전쟁의 현실과 마주한다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-016', title:'마크로스 프론티어', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:96, symbol:'마', image:'https://cdn.myanimelist.net/images/anime/9/15648l.webp', tags:['액션','성장','몰입'], summary:'우주 이민선단을 무대로 파일럿, 가수, 외계 생명체의 전쟁과 노래가 교차한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-017', title:'에우레카 세븐', genre:'healing', mood:'comfort', world:'japan', pace:'balanced', length:'long', score:97, symbol:'에', image:'https://cdn.myanimelist.net/images/anime/12/34443l.webp', tags:['힐링','일상','여운'], summary:'하늘을 나는 보드를 타는 소년이 신비한 소녀와 만나 전쟁과 세계의 비밀에 휘말린다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-018', title:'공각기동대', genre:'romance', mood:'heart', world:'sf', pace:'slow', length:'short', score:80, symbol:'공', image:'https://cdn.myanimelist.net/images/anime/10/82594l.webp', tags:['로맨스','청춘','감정선'], summary:'사이버화된 미래 사회에서 공안 9과가 해킹 범죄와 인간 정체성의 경계를 추적한다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-019', title:'아키라', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'medium', score:81, symbol:'아', image:'https://cdn.myanimelist.net/images/anime/1408/114012l.webp', tags:['미스터리','반전','긴장감'], summary:'폭주족 소년과 초능력 실험체가 네오 도쿄를 뒤흔드는 거대한 재앙을 일으킨다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-020', title:'파프리카', genre:'fantasy', mood:'power', world:'fantasy', pace:'balanced', length:'long', score:82, symbol:'파', image:'https://cdn.myanimelist.net/images/anime/1929/93629l.webp', tags:['판타지','모험','세계관'], summary:'꿈을 침투하는 치료 장치가 도난당하자 현실과 꿈이 뒤섞이는 사건이 벌어진다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-021', title:'퍼펙트 블루', genre:'action', mood:'power', world:'japan', pace:'slow', length:'short', score:83, symbol:'퍼', image:'https://cdn.myanimelist.net/images/anime/1254/134212l.webp', tags:['액션','성장','몰입'], summary:'아이돌 출신 배우가 스토커와 환영에 시달리며 정체성과 현실의 경계가 무너진다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-022', title:'천공의 성 라퓨타', genre:'healing', mood:'comfort', world:'sf', pace:'fast', length:'medium', score:84, symbol:'천', image:'https://cdn.myanimelist.net/images/anime/5/37799l.webp', tags:['힐링','일상','여운'], summary:'하늘의 성을 둘러싼 비밀을 가진 소녀와 광산 소년이 군대와 해적을 피해 모험한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-023', title:'하울의 움직이는 성', genre:'romance', mood:'heart', world:'modern', pace:'balanced', length:'long', score:85, symbol:'하', image:'https://cdn.myanimelist.net/images/anime/1470/138723l.webp', tags:['로맨스','청춘','감정선'], summary:'저주로 노인이 된 소녀가 움직이는 성의 마법사 하울과 전쟁 속에서 마음을 나눈다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-024', title:'모노노케 히메', genre:'mystery', mood:'brain', world:'fantasy', pace:'slow', length:'short', score:86, symbol:'모', image:'https://cdn.myanimelist.net/images/anime/1355/147277l.webp', tags:['미스터리','반전','긴장감'], summary:'숲의 신과 인간의 전쟁 사이에서 소년 아시타카가 증오를 멈출 길을 찾는다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-025', title:'이웃집 토토로', genre:'fantasy', mood:'power', world:'japan', pace:'fast', length:'medium', score:87, symbol:'이', image:'https://cdn.myanimelist.net/images/anime/1110/147278l.webp', tags:['판타지','모험','세계관'], summary:'시골로 이사 온 자매가 숲의 정령 토토로와 만나 따뜻한 여름의 기억을 만든다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-026', title:'벼랑 위의 포뇨', genre:'action', mood:'power', world:'sf', pace:'balanced', length:'long', score:88, symbol:'벼', image:'https://cdn.myanimelist.net/images/anime/1331/138727l.webp', tags:['액션','성장','몰입'], summary:'바다에서 온 물고기 소녀 포뇨가 인간 소년과 친구가 되며 세상의 균형이 흔들린다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-027', title:'날씨의 아이', genre:'healing', mood:'comfort', world:'modern', pace:'slow', length:'short', score:89, symbol:'날', image:'https://cdn.myanimelist.net/images/anime/1880/101146l.webp', tags:['힐링','일상','여운'], summary:'날씨를 맑게 하는 소녀와 가출 소년이 비 내리는 도쿄에서 서로를 선택한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-028', title:'스즈메의 문단속', genre:'romance', mood:'heart', world:'fantasy', pace:'fast', length:'medium', score:90, symbol:'스', image:'https://cdn.myanimelist.net/images/anime/1598/128450l.webp', tags:['로맨스','청춘','감정선'], summary:'재난의 문을 닫는 소녀가 의자로 변한 청년과 함께 일본 곳곳을 여행한다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-029', title:'초속 5센티미터', genre:'mystery', mood:'brain', world:'japan', pace:'balanced', length:'long', score:91, symbol:'초', image:'https://cdn.myanimelist.net/images/anime/1410/112994l.webp', tags:['미스터리','반전','긴장감'], summary:'서로 멀어진 소년과 소녀의 첫사랑이 시간과 거리 속에서 천천히 흩어진다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-030', title:'언어의 정원', genre:'fantasy', mood:'power', world:'sf', pace:'slow', length:'short', score:92, symbol:'언', image:'https://cdn.myanimelist.net/images/anime/1597/112995l.webp', tags:['판타지','모험','세계관'], summary:'비 오는 정원에서 만난 고등학생과 성인 여성이 상처를 나누며 잠시 기대어 선다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-031', title:'바람이 분다', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:93, symbol:'바', image:'https://cdn.myanimelist.net/images/anime/8/52353l.webp', tags:['액션','성장','몰입'], summary:'비행기를 사랑한 청년이 꿈과 전쟁의 현실 사이에서 자신의 하늘을 좇는다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-032', title:'늑대아이', genre:'healing', mood:'comfort', world:'fantasy', pace:'balanced', length:'long', score:94, symbol:'늑', image:'https://cdn.myanimelist.net/images/anime/9/35721l.webp', tags:['힐링','일상','여운'], summary:'인간 엄마가 늑대인간 남매를 키우며 아이들이 각자의 삶을 선택하도록 지켜본다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-033', title:'시간을 달리는 소녀', genre:'romance', mood:'heart', world:'japan', pace:'slow', length:'short', score:95, symbol:'시', image:'https://cdn.myanimelist.net/images/anime/1/2432l.webp', tags:['로맨스','청춘','감정선'], summary:'시간을 뛰어넘는 능력을 얻은 소녀가 일상과 사랑의 선택을 되돌아본다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-034', title:'썸머 워즈', genre:'mystery', mood:'brain', world:'sf', pace:'fast', length:'medium', score:96, symbol:'썸', image:'https://cdn.myanimelist.net/images/anime/1593/116751l.webp', tags:['미스터리','반전','긴장감'], summary:'가상세계 OZ의 위기 속에서 한 가족과 소년이 힘을 합쳐 세계를 구한다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-035', title:'괴물의 아이', genre:'fantasy', mood:'power', world:'modern', pace:'balanced', length:'long', score:97, symbol:'괴', image:'https://cdn.myanimelist.net/images/anime/11/73540l.webp', tags:['판타지','모험','세계관'], summary:'외로운 소년이 짐승의 세계에서 스승을 만나 싸움과 가족의 의미를 배운다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-036', title:'미래의 미라이', genre:'action', mood:'power', world:'fantasy', pace:'slow', length:'short', score:80, symbol:'미', image:'https://cdn.myanimelist.net/images/anime/1042/95674l.webp', tags:['액션','성장','몰입'], summary:'어린 소년이 미래에서 온 여동생과 가족의 시간을 여행하며 성장한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-037', title:'벨', genre:'healing', mood:'comfort', world:'japan', pace:'fast', length:'medium', score:81, symbol:'벨', image:'https://cdn.myanimelist.net/images/anime/1081/115716l.webp', tags:['힐링','일상','여운'], summary:'가상 세계에서 노래하는 소녀가 현실의 상처와 용기를 마주하며 세상을 바꾼다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-038', title:'플라스틱 메모리즈', genre:'romance', mood:'heart', world:'sf', pace:'balanced', length:'long', score:82, symbol:'플', image:'https://cdn.myanimelist.net/images/anime/4/72750l.webp', tags:['로맨스','청춘','감정선'], summary:'수명이 정해진 안드로이드를 회수하는 청년이 파트너와 사랑의 끝을 배워간다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-039', title:'아노하나', genre:'mystery', mood:'brain', world:'modern', pace:'slow', length:'short', score:83, symbol:'아', image:'https://cdn.myanimelist.net/images/anime/5/79697l.webp', tags:['미스터리','반전','긴장감'], summary:'죽은 친구의 영혼을 본 소년과 친구들이 과거의 상처를 풀고 이별을 준비한다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-040', title:'클라나드', genre:'fantasy', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:84, symbol:'클', image:'https://cdn.myanimelist.net/images/anime/1804/95033l.webp', tags:['판타지','모험','세계관'], summary:'불량 소년과 병약한 소녀가 학교에서 만나 가족과 삶의 의미를 찾아간다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-041', title:'클라나드 애프터 스토리', genre:'action', mood:'power', world:'japan', pace:'balanced', length:'long', score:85, symbol:'클', image:'https://cdn.myanimelist.net/images/anime/1299/110774l.webp', tags:['액션','성장','몰입'], summary:'결혼 이후의 삶과 가족의 기적을 통해 사랑의 대가와 소중함을 그린다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-042', title:'케이온!', genre:'healing', mood:'comfort', world:'sf', pace:'slow', length:'short', score:86, symbol:'케', image:'https://cdn.myanimelist.net/images/anime/10/76120l.webp', tags:['힐링','일상','여운'], summary:'폐부 직전의 경음악부 소녀들이 밴드를 만들고 느긋한 청춘을 쌓아간다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-043', title:'유루캠프', genre:'romance', mood:'heart', world:'modern', pace:'fast', length:'medium', score:87, symbol:'유', image:'https://cdn.myanimelist.net/images/anime/4/89877l.webp', tags:['로맨스','청춘','감정선'], summary:'여고생들이 캠핑을 즐기며 자연 속에서 천천히 가까워지는 일상을 보낸다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-044', title:'논논비요리', genre:'mystery', mood:'brain', world:'fantasy', pace:'balanced', length:'long', score:88, symbol:'논', image:'https://cdn.myanimelist.net/images/anime/9/75105l.webp', tags:['미스터리','반전','긴장감'], summary:'시골 마을 학교의 아이들이 느긋하고 따뜻한 사계절 일상을 함께한다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-045', title:'바라카몬', genre:'fantasy', mood:'power', world:'japan', pace:'slow', length:'short', score:89, symbol:'바', image:'https://cdn.myanimelist.net/images/anime/1426/111248l.webp', tags:['판타지','모험','세계관'], summary:'도시에서 온 서예가가 섬마을 아이들과 부딪히며 자신만의 글씨와 삶을 찾는다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-046', title:'나츠메 우인장', genre:'action', mood:'power', world:'sf', pace:'fast', length:'medium', score:90, symbol:'나', image:'https://cdn.myanimelist.net/images/anime/1681/108439l.webp', tags:['액션','성장','몰입'], summary:'요괴를 보는 소년이 할머니의 우인장을 물려받아 이름을 돌려주는 여행을 한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-047', title:'충사', genre:'healing', mood:'comfort', world:'modern', pace:'balanced', length:'long', score:91, symbol:'충', image:'https://cdn.myanimelist.net/images/anime/2/73862l.webp', tags:['힐링','일상','여운'], summary:'인간도 요괴도 아닌 벌레 같은 존재 무시를 좇는 방랑자가 기묘한 사건을 해결한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-048', title:'아리아', genre:'romance', mood:'heart', world:'fantasy', pace:'slow', length:'short', score:92, symbol:'아', image:'https://cdn.myanimelist.net/images/anime/2/77620l.webp', tags:['로맨스','청춘','감정선'], summary:'수상도시 네오 베네치아에서 곤돌라 안내인을 꿈꾸는 소녀들이 느린 행복을 배운다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-049', title:'목소리의 형태 외전', genre:'mystery', mood:'brain', world:'japan', pace:'fast', length:'medium', score:93, symbol:'목', image:'https://cdn.myanimelist.net/images/anime/1122/96435l.webp', tags:['미스터리','반전','긴장감'], summary:'상처를 안고 살아가는 인물들이 목소리와 마음을 통해 다시 연결되는 이야기.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-050', title:'월간순정 노자키군', genre:'fantasy', mood:'power', world:'sf', pace:'balanced', length:'long', score:94, symbol:'월', image:'https://cdn.myanimelist.net/images/anime/5/66083l.webp', tags:['판타지','모험','세계관'], summary:'순정만화가 남학생과 그를 좋아하는 여학생이 엉뚱한 만화 제작 일상을 보낸다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-051', title:'오란고교 호스트부', genre:'action', mood:'power', world:'modern', pace:'slow', length:'short', score:95, symbol:'오', image:'https://cdn.myanimelist.net/images/anime/2/71992l.webp', tags:['액션','성장','몰입'], summary:'남장 여학생이 부유한 학교의 호스트부에 들어가 개성 강한 멤버들과 얽힌다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-052', title:'옆자리 괴물군', genre:'healing', mood:'comfort', world:'fantasy', pace:'fast', length:'medium', score:96, symbol:'옆', image:'https://cdn.myanimelist.net/images/anime/4/39779l.webp', tags:['힐링','일상','여운'], summary:'차가운 우등생과 감정 표현이 서툰 문제아가 서로에게 끌리며 변해간다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-053', title:'아오하라이드', genre:'romance', mood:'heart', world:'japan', pace:'balanced', length:'long', score:97, symbol:'아', image:'https://cdn.myanimelist.net/images/anime/8/64813l.webp', tags:['로맨스','청춘','감정선'], summary:'중학교의 첫사랑과 고등학교에서 재회한 소녀가 서툰 감정을 다시 마주한다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-054', title:'후르츠 바스켓', genre:'mystery', mood:'brain', world:'sf', pace:'slow', length:'short', score:80, symbol:'후', image:'https://cdn.myanimelist.net/images/anime/4/75204l.webp', tags:['미스터리','반전','긴장감'], summary:'십이지 저주를 가진 가족과 만난 소녀가 상처 입은 사람들의 마음을 감싸준다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-055', title:'너에게 닿기를', genre:'fantasy', mood:'power', world:'modern', pace:'fast', length:'medium', score:81, symbol:'너', image:'https://cdn.myanimelist.net/images/anime/1502/124384l.webp', tags:['판타지','모험','세계관'], summary:'음침하다고 오해받는 소녀가 반 친구들과 첫사랑을 통해 세상과 가까워진다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-056', title:'오타쿠에게 사랑은 어려워', genre:'action', mood:'power', world:'fantasy', pace:'balanced', length:'long', score:82, symbol:'오', image:'https://cdn.myanimelist.net/images/anime/1864/93518l.webp', tags:['액션','성장','몰입'], summary:'오타쿠 직장인들이 취미와 연애를 숨기지 않고 서툴지만 솔직한 사랑을 한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-057', title:'5등분의 신부', genre:'healing', mood:'comfort', world:'japan', pace:'slow', length:'short', score:83, symbol:'5', image:'https://cdn.myanimelist.net/images/anime/1819/97947l.webp', tags:['힐링','일상','여운'], summary:'가정교사가 된 남학생이 다섯 쌍둥이 자매와 공부와 마음의 거리를 좁혀간다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-058', title:'그 비스크 돌은 사랑을 한다', genre:'romance', mood:'heart', world:'sf', pace:'fast', length:'medium', score:84, symbol:'그', image:'https://cdn.myanimelist.net/images/anime/1179/119897l.webp', tags:['로맨스','청춘','감정선'], summary:'코스프레를 좋아하는 인기 소녀와 전통 인형 장인 소년이 의상 제작으로 가까워진다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-059', title:'토모짱은 여자아이!', genre:'mystery', mood:'brain', world:'modern', pace:'balanced', length:'long', score:85, symbol:'토', image:'https://cdn.myanimelist.net/images/anime/1444/131828l.webp', tags:['미스터리','반전','긴장감'], summary:'운동부 소녀 토모가 소꿉친구에게 여자로 보이고 싶어 고군분투한다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-060', title:'스킵과 로퍼', genre:'fantasy', mood:'power', world:'fantasy', pace:'slow', length:'short', score:86, symbol:'스', image:'https://cdn.myanimelist.net/images/anime/1518/138730l.webp', tags:['판타지','모험','세계관'], summary:'시골에서 도쿄로 온 밝은 소녀가 학교 친구들과 어색하지만 건강한 관계를 만든다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-061', title:'빙과', genre:'action', mood:'power', world:'japan', pace:'fast', length:'medium', score:87, symbol:'빙', image:'https://cdn.myanimelist.net/images/anime/13/50521l.webp', tags:['액션','성장','몰입'], summary:'호기심 많은 고등학생들이 일상 속 작은 미스터리를 추리하며 청춘을 보낸다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-062', title:'고식', genre:'healing', mood:'comfort', world:'sf', pace:'balanced', length:'long', score:88, symbol:'고', image:'https://cdn.myanimelist.net/images/anime/11/27906l.webp', tags:['힐링','일상','여운'], summary:'작은 탐정 소녀 빅토리카와 유학생 소년이 유럽 기숙학교에서 사건을 해결한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-063', title:'모노가타리 시리즈', genre:'romance', mood:'heart', world:'modern', pace:'slow', length:'short', score:89, symbol:'모', image:'https://cdn.myanimelist.net/images/anime/11/75274l.webp', tags:['로맨스','청춘','감정선'], summary:'괴이와 얽힌 소년이 상처를 가진 소녀들의 초자연적 문제를 풀어간다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-064', title:'쓰르라미 울 적에', genre:'mystery', mood:'brain', world:'fantasy', pace:'fast', length:'medium', score:90, symbol:'쓰', image:'https://cdn.myanimelist.net/images/anime/12/19634l.webp', tags:['미스터리','반전','긴장감'], summary:'폐쇄적인 마을에서 반복되는 참극의 진실을 아이들이 파헤친다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-065', title:'우마네코 울 적에', genre:'fantasy', mood:'power', world:'japan', pace:'balanced', length:'long', score:91, symbol:'우', image:'https://cdn.myanimelist.net/images/anime/10/17709l.webp', tags:['판타지','모험','세계관'], summary:'외딴 섬의 대저택에서 벌어진 살인극을 두고 인간과 마녀의 진실 게임이 펼쳐진다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-066', title:'어나더 월드', genre:'action', mood:'power', world:'sf', pace:'slow', length:'short', score:92, symbol:'어', image:'https://cdn.myanimelist.net/images/anime/1804/113788l.webp', tags:['액션','성장','몰입'], summary:'낯선 세계와 사건 속에서 인물들이 또 다른 현실의 비밀을 마주한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-067', title:'잔향의 테러', genre:'healing', mood:'comfort', world:'modern', pace:'fast', length:'medium', score:93, symbol:'잔', image:'https://cdn.myanimelist.net/images/anime/1417/117422l.webp', tags:['힐링','일상','여운'], summary:'도쿄를 뒤흔드는 폭탄 테러를 벌이는 두 소년과 형사가 숨겨진 과거를 쫓는다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-068', title:'바카노!', genre:'romance', mood:'heart', world:'fantasy', pace:'balanced', length:'long', score:94, symbol:'바', image:'https://cdn.myanimelist.net/images/anime/3/14547l.webp', tags:['로맨스','청춘','감정선'], summary:'금주법 시대 미국에서 불사자와 갱단, 강도들이 뒤얽힌 사건이 폭주한다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-069', title:'듀라라라!!', genre:'mystery', mood:'brain', world:'japan', pace:'slow', length:'short', score:95, symbol:'듀', image:'https://cdn.myanimelist.net/images/anime/10/71772l.webp', tags:['미스터리','반전','긴장감'], summary:'이케부쿠로에서 목 없는 라이더와 도시 전설, 조직들이 서로 얽혀 소동을 만든다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-070', title:'91 데이즈', genre:'fantasy', mood:'power', world:'sf', pace:'fast', length:'medium', score:96, symbol:'9', image:'https://cdn.myanimelist.net/images/anime/13/80515l.webp', tags:['판타지','모험','세계관'], summary:'금주법 시대 마피아 세계에서 가족을 잃은 청년이 복수를 위해 조직에 잠입한다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-071', title:'흑집사', genre:'action', mood:'power', world:'modern', pace:'balanced', length:'long', score:97, symbol:'흑', image:'https://cdn.myanimelist.net/images/anime/1467/137783l.webp', tags:['액션','성장','몰입'], summary:'악마 집사와 계약한 소년 백작이 영국 뒷세계의 사건을 해결한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-072', title:'혈계전선', genre:'healing', mood:'comfort', world:'fantasy', pace:'slow', length:'short', score:80, symbol:'혈', image:'https://cdn.myanimelist.net/images/anime/1449/142053l.webp', tags:['힐링','일상','여운'], summary:'이세계와 뉴욕이 겹친 도시에서 비밀결사 라이브라가 초상 사건을 처리한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-073', title:'문호 스트레이독스', genre:'romance', mood:'heart', world:'japan', pace:'fast', length:'medium', score:81, symbol:'문', image:'https://cdn.myanimelist.net/images/anime/3/79409l.webp', tags:['로맨스','청춘','감정선'], summary:'문호 이름을 가진 능력자들이 탐정사와 포트 마피아 사이에서 사건을 해결한다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-074', title:'도로헤도로', genre:'mystery', mood:'brain', world:'sf', pace:'balanced', length:'long', score:82, symbol:'도', image:'https://cdn.myanimelist.net/images/anime/1230/119278l.webp', tags:['미스터리','반전','긴장감'], summary:'마법과 혼돈의 도시에서 파충류 머리가 된 남자가 자신의 정체를 찾는다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-075', title:'골든 카무이', genre:'fantasy', mood:'power', world:'modern', pace:'slow', length:'short', score:83, symbol:'골', image:'https://cdn.myanimelist.net/images/anime/1145/90880l.webp', tags:['판타지','모험','세계관'], summary:'홋카이도 금괴를 찾는 군인과 아이누 소녀가 생존과 추격전을 벌인다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-076', title:'던전밥', genre:'action', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:84, symbol:'던', image:'https://cdn.myanimelist.net/images/anime/1711/142478l.webp', tags:['액션','성장','몰입'], summary:'던전에서 여동생을 구하려는 모험가들이 몬스터를 요리해 먹으며 내려간다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-077', title:'고블린 슬레이어', genre:'healing', mood:'comfort', world:'japan', pace:'balanced', length:'long', score:85, symbol:'고', image:'https://cdn.myanimelist.net/images/anime/1719/95621l.webp', tags:['힐링','일상','여운'], summary:'고블린에게 모든 것을 빼앗긴 모험가가 오직 고블린 퇴치에 집착한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-078', title:'마법사의 신부', genre:'romance', mood:'heart', world:'sf', pace:'slow', length:'short', score:86, symbol:'마', image:'https://cdn.myanimelist.net/images/anime/3/88476l.webp', tags:['로맨스','청춘','감정선'], summary:'인간 소녀가 이형의 마법사에게 팔려가 마법과 사랑, 자기 가치를 배워간다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-079', title:'새벽의 연화', genre:'mystery', mood:'brain', world:'modern', pace:'fast', length:'medium', score:87, symbol:'새', image:'https://cdn.myanimelist.net/images/anime/9/64225l.webp', tags:['미스터리','반전','긴장감'], summary:'왕궁에서 쫓겨난 공주가 동료를 모아 나라와 자신을 되찾는 여정을 시작한다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-080', title:'아카츠키의 요나', genre:'fantasy', mood:'power', world:'fantasy', pace:'balanced', length:'long', score:88, symbol:'아', image:'https://cdn.myanimelist.net/images/anime/9/64225l.webp', tags:['판타지','모험','세계관'], summary:'왕궁에서 쫓겨난 요나 공주가 전설의 네 용을 찾아 각성해 간다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-081', title:'노라가미 아라고토', genre:'action', mood:'power', world:'japan', pace:'slow', length:'short', score:89, symbol:'노', image:'https://cdn.myanimelist.net/images/anime/1689/94850l.webp', tags:['액션','성장','몰입'], summary:'야토와 히요리가 더 강한 인연을 맺는 가운데 과거와 신들의 갈등이 드러난다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-082', title:'청의 엑소시스트 교토 부정왕편', genre:'healing', mood:'comfort', world:'sf', pace:'fast', length:'medium', score:90, symbol:'청', image:'https://cdn.myanimelist.net/images/anime/5/85201l.webp', tags:['힐링','일상','여운'], summary:'린이 교토에서 되살아나는 부정왕의 위협과 자신의 악마 혈통을 마주한다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-083', title:'블랙 라군', genre:'romance', mood:'heart', world:'modern', pace:'balanced', length:'long', score:91, symbol:'블', image:'https://cdn.myanimelist.net/images/anime/1906/121592l.webp', tags:['로맨스','청춘','감정선'], summary:'평범한 회사원이 범죄 도시의 운반업자들과 얽혀 거친 뒷세계에 들어간다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-084', title:'헬싱 얼티메이트', genre:'mystery', mood:'brain', world:'fantasy', pace:'slow', length:'short', score:92, symbol:'헬', image:'https://cdn.myanimelist.net/images/anime/1012/143965l.webp', tags:['미스터리','반전','긴장감'], summary:'흡혈귀 알카드와 헬싱 기관이 나치 잔당과 괴물 군단에 맞서 피의 전쟁을 벌인다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-085', title:'트라이건', genre:'fantasy', mood:'power', world:'japan', pace:'fast', length:'medium', score:93, symbol:'트', image:'https://cdn.myanimelist.net/images/anime/1130/120002l.webp', tags:['판타지','모험','세계관'], summary:'총잡이 밧슈 더 스탬피드가 현상금을 피해 다니며 자신을 둘러싼 파괴의 진실과 만난다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-086', title:'트라이건 스탬피드', genre:'action', mood:'power', world:'sf', pace:'balanced', length:'long', score:94, symbol:'트', image:'https://cdn.myanimelist.net/images/anime/1426/129194l.webp', tags:['액션','성장','몰입'], summary:'사막 행성에서 쫓기는 밧슈가 형제와 인류를 둘러싼 비극의 근원을 마주한다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-087', title:'플루토', genre:'healing', mood:'comfort', world:'modern', pace:'slow', length:'short', score:95, symbol:'플', image:'https://cdn.myanimelist.net/images/anime/1021/138568l.webp', tags:['힐링','일상','여운'], summary:'인간과 로봇이 공존하는 미래에서 로봇 연쇄살인의 배후와 전쟁의 상처가 드러난다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-088', title:'몬스터', genre:'romance', mood:'heart', world:'fantasy', pace:'fast', length:'medium', score:96, symbol:'몬', image:'https://cdn.myanimelist.net/images/anime/10/18793l.webp', tags:['로맨스','청춘','감정선'], summary:'천재 외과의사가 살려낸 소년이 괴물이 되어 돌아오자 그의 뒤를 쫓는다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-089', title:'마스터 키튼', genre:'mystery', mood:'brain', world:'japan', pace:'balanced', length:'long', score:97, symbol:'마', image:'https://cdn.myanimelist.net/images/anime/7/73931l.webp', tags:['미스터리','반전','긴장감'], summary:'고고학자이자 전직 군인인 키튼이 세계 곳곳의 사건과 인간사를 파헤친다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-090', title:'왕도둑 징', genre:'fantasy', mood:'power', world:'sf', pace:'slow', length:'short', score:80, symbol:'왕', image:'https://cdn.myanimelist.net/images/anime/1961/92115l.webp', tags:['판타지','모험','세계관'], summary:'전설의 도둑 징이 파트너 키르와 함께 보물을 찾아 기묘한 세계를 여행한다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-091', title:'바쿠만', genre:'action', mood:'power', world:'modern', pace:'fast', length:'medium', score:81, symbol:'바', image:'https://cdn.myanimelist.net/images/anime/6/26138l.webp', tags:['액션','성장','몰입'], summary:'두 소년이 만화가 콤비를 이루어 주간 소년 점프 연재와 애니화를 목표로 달린다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-092', title:'시로바코', genre:'healing', mood:'comfort', world:'fantasy', pace:'balanced', length:'long', score:82, symbol:'시', image:'https://cdn.myanimelist.net/images/anime/1460/141897l.webp', tags:['힐링','일상','여운'], summary:'애니메이션 제작사 신입들이 마감과 현실 속에서 작품을 완성해 가는 현장 이야기.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-093', title:'우주보다 먼 곳', genre:'romance', mood:'heart', world:'japan', pace:'slow', length:'short', score:83, symbol:'우', image:'https://cdn.myanimelist.net/images/anime/6/89879l.webp', tags:['로맨스','청춘','감정선'], summary:'남극을 꿈꾸는 소녀들이 각자의 이유를 품고 지구 끝으로 떠나는 청춘 여행.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-094', title:'우주형제', genre:'mystery', mood:'brain', world:'sf', pace:'fast', length:'medium', score:84, symbol:'우', image:'https://cdn.myanimelist.net/images/anime/1290/135694l.webp', tags:['미스터리','반전','긴장감'], summary:'우주비행사를 꿈꾸던 형제가 다시 꿈을 향해 도전하며 서로를 밀어준다.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-095', title:'플라네테스', genre:'fantasy', mood:'power', world:'modern', pace:'balanced', length:'long', score:85, symbol:'플', image:'https://cdn.myanimelist.net/images/anime/1209/142900l.webp', tags:['판타지','모험','세계관'], summary:'우주 쓰레기를 수거하는 노동자들이 광활한 우주에서 일과 꿈의 의미를 찾는다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' },
  { id:'extra-096', title:'스킵 비트!', genre:'action', mood:'power', world:'fantasy', pace:'slow', length:'short', score:86, symbol:'스', image:'https://cdn.myanimelist.net/images/anime/11/84022l.webp', tags:['액션','성장','몰입'], summary:'복수심으로 연예계에 뛰어든 소녀가 연기와 사랑 속에서 자신을 바꿔간다.', reason:'빠른 전개와 강한 장면을 원할 때 펼쳐보기 좋은 추천작이에요.' },
  { id:'extra-097', title:'치하야후루', genre:'healing', mood:'comfort', world:'japan', pace:'fast', length:'medium', score:87, symbol:'치', image:'https://cdn.myanimelist.net/images/anime/1959/156735l.webp', tags:['힐링','일상','여운'], summary:'카루타에 매료된 소녀가 친구들과 전국 대회를 목표로 열정적인 청춘을 보낸다.', reason:'편안하게 쉬면서 여운을 느끼고 싶을 때 잘 맞아요.' },
  { id:'extra-098', title:'겁쟁이 페달', genre:'romance', mood:'heart', world:'sf', pace:'balanced', length:'long', score:88, symbol:'겁', image:'https://cdn.myanimelist.net/images/anime/5/53211l.webp', tags:['로맨스','청춘','감정선'], summary:'애니 오타쿠 소년이 자전거 경기부에 들어가 로드레이스의 재미에 눈뜬다.', reason:'설렘과 관계 변화를 따라가고 싶을 때 추천해요.' },
  { id:'extra-099', title:'쿠로코의 농구', genre:'mystery', mood:'brain', world:'modern', pace:'slow', length:'short', score:89, symbol:'쿠', image:'https://cdn.myanimelist.net/images/anime/11/50453l.webp', tags:['미스터리','반전','긴장감'], summary:'기적의 세대와 맞서는 그림자 선수 쿠로코와 에이스 카가미의 고교 농구 도전.', reason:'복선과 반전을 차근차근 즐기고 싶을 때 좋아요.' },
  { id:'extra-100', title:'다이아몬드 에이스', genre:'fantasy', mood:'power', world:'fantasy', pace:'fast', length:'medium', score:90, symbol:'다', image:'https://cdn.myanimelist.net/images/anime/5/54235l.webp', tags:['판타지','모험','세계관'], summary:'포수와 투수를 중심으로 고교 야구부가 전국 대회를 향해 팀으로 성장한다.', reason:'새로운 세계관과 모험의 재미를 찾을 때 잘 맞아요.' }
];

const profiles = [
  { id:'solo', name:'혼자 몰입', avatar:'🎧', palette:['#8b5cf6','#38bdf8'], prefer:{mood:'brain', pace:'slow'} },
  { id:'family', name:'가족과 함께', avatar:'🍿', palette:['#fb7185','#facc15'], prefer:{mood:'comfort', length:'short'} },
  { id:'action', name:'액션 덕후', avatar:'⚔️', palette:['#f97316','#dc2626'], prefer:{mood:'power', pace:'fast'} },
  { id:'romance', name:'설렘 모드', avatar:'🌸', palette:['#ff8fb8','#a78bfa'], prefer:{mood:'heart', world:'modern'} }
];

const genreLabels = { action:'액션', healing:'힐링', romance:'로맨스', mystery:'미스터리', fantasy:'판타지' };
const moodLabels = { power:'에너지/액션', comfort:'힐링/여운', heart:'설렘/로맨스', brain:'추리/반전' };
const worldLabels = { modern:'현대/학교', fantasy:'판타지/이세계', japan:'일본풍/시대극', sf:'SF/미래' };
const paceLabels = { fast:'빠른 전개', slow:'천천히 몰입', balanced:'균형 잡힌 전개' };
const lengthLabels = { short:'짧게 맛보기', medium:'주말 정주행', long:'긴 서사 환영' };
const intensityLabels = { soft:'잔잔하게', medium:'적당한 긴장', strong:'강렬하게' };
const toneLabels = { bright:'밝고 유쾌', emotional:'감성/눈물', dark:'어둡고 묵직', epic:'웅장한 대서사' };
const focusLabels = { battle:'전투/액션', character:'캐릭터 성장', story:'스토리/반전', romance:'관계/로맨스', worldbuilding:'세계관 탐험' };
const eraLabels = { recent:'최근 화제작', modernClassic:'검증된 명작', classic:'클래식 감성', movie:'영화 한 편' };
const answerLabelMaps = { genre:genreLabels, mood:moodLabels, world:worldLabels, pace:paceLabels, length:lengthLabels, intensity:intensityLabels, tone:toneLabels, focus:focusLabels, era:eraLabels };
const surveyQuestions = [
  { key:'genre', weight:24, eyebrow:'장르 우선순위', title:'가장 먼저 보고 싶은 장르는?', options:[{ value:'action', label:'액션', detail:'전투, 스포츠, 능력 배틀 중심' },{ value:'healing', label:'힐링', detail:'따뜻한 일상과 여운 중심' },{ value:'romance', label:'로맨스', detail:'설렘과 관계 변화 중심' },{ value:'mystery', label:'미스터리', detail:'추리, 반전, 심리전 중심' },{ value:'fantasy', label:'판타지', detail:'모험과 세계관 중심' }]},
  { key:'mood', weight:34, eyebrow:'오늘 기분', title:'지금 끌리는 감정은?', options:[{ value:'power', label:'에너지/액션', detail:'속도감 있는 전투와 카타르시스' },{ value:'comfort', label:'힐링/여운', detail:'마음이 천천히 풀리는 감정선' },{ value:'heart', label:'설렘/로맨스', detail:'관계 변화와 따뜻한 떨림' },{ value:'brain', label:'추리/반전', detail:'생각할수록 깊어지는 긴장감' }]},
  { key:'world', weight:22, eyebrow:'세계관', title:'어떤 배경에 들어가고 싶나요?', options:[{ value:'modern', label:'현대/학교', detail:'익숙한 일상 속 특별한 사건' },{ value:'fantasy', label:'판타지/이세계', detail:'마법, 모험, 거대한 세계관' },{ value:'japan', label:'일본풍/시대극', detail:'검, 요괴, 전통적인 분위기' },{ value:'sf', label:'SF/미래', detail:'시간, 우주, 기술의 상상력' }]},
  { key:'pace', weight:18, eyebrow:'호흡', title:'전개 속도는 어느 쪽이 좋나요?', options:[{ value:'fast', label:'빠른 전개', detail:'바로 몰입되는 에피소드' },{ value:'slow', label:'천천히 몰입', detail:'감정과 복선을 차근차근' },{ value:'balanced', label:'균형 잡힌 전개', detail:'액션과 서사의 안정적인 밸런스' }]},
  { key:'length', weight:16, eyebrow:'시청 시간', title:'오늘 확보한 시간은?', options:[{ value:'short', label:'짧게 맛보기', detail:'가볍게 시작하기 좋은 분량' },{ value:'medium', label:'주말 정주행', detail:'몰입해서 달리기 좋은 길이' },{ value:'long', label:'긴 서사 환영', detail:'세계관에 오래 머무는 장편' }]},
  { key:'intensity', weight:18, eyebrow:'자극 강도', title:'얼마나 강렬한 작품이 좋나요?', options:[{ value:'soft', label:'잔잔하게', detail:'편안하고 부담 없는 감상' },{ value:'medium', label:'적당한 긴장', detail:'웃음, 감동, 긴장감의 균형' },{ value:'strong', label:'강렬하게', detail:'전투, 공포, 충격적인 전개도 환영' }]},
  { key:'tone', weight:18, eyebrow:'톤 앤 매너', title:'작품의 전체 분위기는?', options:[{ value:'bright', label:'밝고 유쾌', detail:'코미디와 긍정적인 에너지' },{ value:'emotional', label:'감성/눈물', detail:'음악, 편지, 가족, 청춘의 여운' },{ value:'dark', label:'어둡고 묵직', detail:'스릴러, 전쟁, 심리, 다크 판타지' },{ value:'epic', label:'웅장한 대서사', detail:'장편 모험과 큰 스케일' }]},
  { key:'focus', weight:22, eyebrow:'중점 요소', title:'가장 중요하게 보는 재미는?', options:[{ value:'battle', label:'전투/액션', detail:'작화 좋은 전투와 승부' },{ value:'character', label:'캐릭터 성장', detail:'주인공과 팀의 변화' },{ value:'story', label:'스토리/반전', detail:'복선, 추리, 충격적인 진실' },{ value:'romance', label:'관계/로맨스', detail:'설렘, 고백, 관계의 진전' },{ value:'worldbuilding', label:'세계관 탐험', detail:'모험, 설정, 새로운 공간' }]},
  { key:'era', weight:16, eyebrow:'작품 감성', title:'어떤 시기의 작품이 끌리나요?', options:[{ value:'recent', label:'최근 화제작', detail:'요즘 많이 언급되는 작품' },{ value:'modernClassic', label:'검증된 명작', detail:'평가가 탄탄한 2000~2010년대 인기작' },{ value:'classic', label:'클래식 감성', detail:'레트로하고 오래 사랑받은 작품' },{ value:'movie', label:'영화 한 편', detail:'극장판처럼 짧고 강한 몰입' }]},
];
const defaultSurveyAnswers = { genre:'action', mood:'power', world:'modern', pace:'fast', length:'short', intensity:'medium', tone:'bright', focus:'battle', era:'recent' };
let surveyAnswers = { ...defaultSurveyAnswers };
let surveyStep = 0;
let heroBackdropTimer;
let revealObserver;
let currentFilter = 'all';
let currentPage = 1;
let recommendationsOpen = false;
const itemsPerPage = 12;
let activeProfile = localStorage.getItem('anipick-profile') || 'solo';
let watchlist = JSON.parse(localStorage.getItem('anipick-watchlist-v2') || '[]');
let watchStatus = JSON.parse(localStorage.getItem('anipick-watch-status-v1') || '{}');
let currentWatchFilter = 'all';
let lastSurveyResult = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const pickRandom = (items = animeList) => items[Math.floor(Math.random() * items.length)];
const findAnime = id => animeList.find(anime => anime.id === id);
const surveyScoreCache = new Map();
const signalCache = new Map();
const maxScoreCacheEntries = 800;
const scoringKeys = ['genre','mood','world','pace','length','intensity','tone','focus','era'];
const scoreWeights = { base:40, genre:24, mood:34, world:22, pace:18, length:16, intensity:18, tone:18, focus:22, era:16, profile:24 };
const scoreMax = Object.values(scoreWeights).reduce((a,b)=>a+b,0);
const breakdownLabels = { genre:'장르', mood:'감정', world:'세계관', pace:'전개', length:'분량', intensity:'강도', tone:'분위기', focus:'중점 재미', era:'작품 감성' };
const relatedTone = { bright:['emotional'], emotional:['bright','epic'], dark:['epic'], epic:['dark','emotional'] };
const relatedFocus = { battle:['character'], character:['battle','worldbuilding'], story:['worldbuilding'], romance:['character'], worldbuilding:['story','character'] };
const signalKeywords = {
  battle:['액션','전투','배틀','고어','히어로','스포츠','검','악마','헌터','닌자','축구','농구','배구'],
  story:['미스터리','반전','추리','심리','서스펜스','타임','정치','진실','복선'],
  romance:['로맨스','설렘','청춘','고백','감정선','삼각관계'],
  world:['판타지','모험','이세계','세계관','우주','SF','마법','해적','요괴'],
  emotional:['힐링','감동','여운','음악','편지','가족','드라마'],
  dark:['다크','고어','호러','전쟁','복수','스릴러','악마','거인','죽음','심리'],
  comedy:['코미디','유쾌','일상','가족','밴드'],
  classic:['슬램덩크','유유백서','드래곤볼','세일러 문','카드캡터','아키라','토토로','라퓨타','공각기동대','퍼펙트 블루','카우보이 비밥'],
  movie:['극장판','너의 이름은','센과 치히로','목소리의 형태','아키라','파프리카','퍼펙트 블루','토토로','라퓨타','하울','모노노케','포뇨','날씨의 아이','스즈메','초속','언어의 정원','바람이 분다','늑대아이','썸머 워즈','괴물의 아이','미래의 미라이','벨']
};

function saveWatchlist(){ localStorage.setItem('anipick-watchlist-v2', JSON.stringify(watchlist)); localStorage.setItem('anipick-watch-status-v1', JSON.stringify(watchStatus)); }
function clearScoreCache(){ surveyScoreCache.clear(); }
function animeStyle(anime){ return `--p1:${anime.palette?.[0] || '#8b5cf6'};--p2:${anime.palette?.[1] || '#38bdf8'};`; }
function malScore(anime){ return (anime.score / 10).toFixed(1); }
function episodeLabel(anime){ return { short:'약 12화/극장판', medium:'약 24화 전후', long:'장편·시리즈' }[anime.length] || '정보 확인 중'; }
function plotLine(anime){ return anime.summary || '인물의 선택과 사건 전개를 따라가며 작품의 핵심 이야기를 확인해 보세요.'; }
function labelFor(key, value){ return answerLabelMaps[key]?.[value] || value || '상관없음'; }
function animeSearchText(anime){ return anime._searchText || (anime._searchText = `${anime.title} ${(anime.tags || []).join(' ')} ${plotLine(anime)} ${anime.reason || ''}`.toLowerCase()); }
function hasTag(anime, keywords){
  const text = animeSearchText(anime);
  return keywords.some(keyword => text.includes(keyword.toLowerCase()));
}
function deriveAnimeSignals(anime){
  if(signalCache.has(anime.id)) return signalCache.get(anime.id);
  const intensity = anime.pace === 'fast' || anime.mood === 'power' || hasTag(anime, signalKeywords.battle.concat(signalKeywords.dark)) ? 'strong' : anime.pace === 'slow' && anime.mood === 'comfort' ? 'soft' : 'medium';
  const tone = hasTag(anime, signalKeywords.dark) || anime.mood === 'brain' ? 'dark' : hasTag(anime, signalKeywords.emotional) || anime.mood === 'comfort' ? 'emotional' : anime.length === 'long' || hasTag(anime, ['대서사','장편','모험','해적','연금술사']) ? 'epic' : hasTag(anime, signalKeywords.comedy) ? 'bright' : 'bright';
  const focus = anime.genre === 'romance' || hasTag(anime, signalKeywords.romance) ? 'romance' : anime.genre === 'mystery' || hasTag(anime, signalKeywords.story) ? 'story' : anime.genre === 'fantasy' || hasTag(anime, signalKeywords.world) ? 'worldbuilding' : hasTag(anime, ['성장','팀워크','청춘','가족']) ? 'character' : 'battle';
  const era = anime.length === 'short' && hasTag(anime, signalKeywords.movie) ? 'movie' : hasTag(anime, signalKeywords.classic) ? 'classic' : anime.id.startsWith('extra-') || anime.score >= 94 ? 'modernClassic' : 'recent';
  const signals = { genre:anime.genre, mood:anime.mood, world:anime.world, pace:anime.pace, length:anime.length, intensity, tone, focus, era };
  signalCache.set(anime.id, signals);
  return signals;
}
function scoreCacheKey(anime, answers){ return JSON.stringify([activeProfile, anime.id, scoringKeys.map(key=>answers[key] || null)]); }
function rememberScore(cacheKey, details){
  if(surveyScoreCache.size >= maxScoreCacheEntries) surveyScoreCache.clear();
  surveyScoreCache.set(cacheKey, details);
  return details;
}
function scoreAnimeDetailed(anime, answers = surveyAnswers){
  const cacheKey = scoreCacheKey(anime, answers);
  if(surveyScoreCache.has(cacheKey)) return surveyScoreCache.get(cacheKey);
  const signals = deriveAnimeSignals(anime);
  const profile = profiles.find(p=>p.id===activeProfile) || profiles[0];
  const breakdown = [];
  let score = Math.round((anime.score / 100) * scoreWeights.base);
  breakdown.push({ key:'base', label:'작품 기본 평점', expected:'MAL/인기도 기반', actual:malScore(anime), points:score, max:scoreWeights.base });
  scoringKeys.forEach(key => {
    const expected = answers[key];
    const actual = signals[key];
    const max = scoreWeights[key];
    let points = actual === expected ? max : 0;
    if(!points && key === 'tone' && relatedTone[expected]?.includes(actual)) points = Math.round(max * .45);
    if(!points && key === 'focus' && relatedFocus[expected]?.includes(actual)) points = Math.round(max * .45);
    breakdown.push({ key, label:breakdownLabels[key], expected:labelFor(key, expected), actual:labelFor(key, actual), points, max });
    score += points;
  });
  let profilePoints = 0;
  Object.entries(profile.prefer).forEach(([key,value]) => { if(signals[key] === value || anime[key] === value) profilePoints += 12; });
  profilePoints = Math.min(scoreWeights.profile, profilePoints);
  breakdown.push({ key:'profile', label:'프로필 보정', expected:profile.name, actual:profileDescription(profile), points:profilePoints, max:scoreWeights.profile });
  score += profilePoints;
  const percent = Math.min(99, Math.max(32, Math.round((score / scoreMax) * 100)));
  const details = { score, maxScore:scoreMax, percent, breakdown, signals };
  return rememberScore(cacheKey, details);
}

function reasonForAnime(anime, answers = surveyAnswers){
  const profile = profiles.find(p=>p.id===activeProfile) || profiles[0];
  const details = scoreAnimeDetailed(anime, answers);
  const matches = details.breakdown.filter(item => item.points > 0 && !['base','profile'].includes(item.key)).sort((a,b)=>b.points-a.points).slice(0,3).map(item=>item.expected);
  if(!matches.length) matches.push(`${profile.name} 프로필`);
  return `${matches.join(' + ')} 기준 ${details.percent}% 매칭 · ${details.breakdown.filter(item=>item.points>0).length}개 요소 반영`;
}
function preview(anime){
  return `<div class="preview-popover" role="status"><p class="kicker !mb-2">한 줄 줄거리</p><h4 class="font-kr text-xl font-black">${anime.title}</h4><p class="mt-2 text-sm leading-6 text-white/78">${plotLine(anime)}</p><div class="preview-meta"><span>MAL ${malScore(anime)}</span><span>${episodeLabel(anime)}</span><span>${genreLabels[anime.genre]}</span>${anime.tags.slice(0,2).map(tag=>`<span>${tag}</span>`).join('')}</div></div>`;
}
function poster(anime){
  return `<div class="poster real-poster" style="${animeStyle(anime)}" data-symbol="${anime.symbol}">
    <img src="${anime.image}" alt="${anime.title} 공식 커버 이미지" loading="lazy" referrerpolicy="no-referrer" />
    <div class="poster-shade"></div>
    <div class="relative z-10 flex min-h-[15rem] flex-col justify-between p-5">
      <div class="flex flex-wrap gap-2">${anime.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div>
      <div><p class="text-sm font-black uppercase tracking-[.22em] text-white/80">match base ${anime.score}</p><h3 class="mt-2 font-kr text-3xl font-black text-white drop-shadow">${anime.title}</h3></div>
    </div>
  </div>`;
}
function addButton(id, label = '+'){ return `<button class="icon-button" type="button" data-add="${id}" aria-label="찜하기">${label}</button>`; }
function statusLabel(status){ return { want:'보고 싶어요', watching:'시청 중', done:'완료' }[status || 'want']; }
function statusIcon(status){ return { want:'☆', watching:'▶', done:'✓' }[status || 'want']; }
function trackEvent(name, params = {}){
  window.AniPickAnalytics?.track?.(name, params);
}
function animePayload(anime){
  return anime ? { anime_id: anime.id, anime_title: anime.title, anime_genre: anime.genre } : {};
}

function renderHero(anime = recommendByProfile()[0]?.anime || pickRandom()){
  $('#heroPick').innerHTML = `${poster(anime)}<div class="mt-5 flex items-start justify-between gap-4"><div><p class="kicker">today's visual pick</p><h2 class="font-kr text-3xl font-black">${anime.title}</h2></div>${addButton(anime.id)}</div><p class="plot-line mt-4"><span>한 줄 줄거리</span>${plotLine(anime)}</p><p class="mt-4 rounded-2xl border border-[var(--line)] bg-black/10 p-4 text-sm leading-6">추천 이유: ${reasonForAnime(anime)}</p>`;
  updateHeroBackdrop(anime);
}
function updateHeroBackdrop(anime){ const backdrop = $('#heroBackdrop'); if(backdrop) backdrop.style.setProperty('--hero-image', `url('${anime.image}')`); }
function initHeroVisuals(){
  const top = animeList.slice(0, 10); const rail = $('#heroPosterRail');
  if(rail) rail.innerHTML = top.map((anime, index)=>`<img class="hero-rail-poster ${index===0?'active':''}" src="${anime.image}" alt="${anime.title} 포스터" loading="lazy" />`).join('');
  let index = 0; updateHeroBackdrop(top[index]); clearInterval(heroBackdropTimer);
  heroBackdropTimer = setInterval(()=>{ index = (index + 1) % top.length; updateHeroBackdrop(top[index]); $$('.hero-rail-poster').forEach((img, i)=>img.classList.toggle('active', i===index)); }, 3000);
}
function dailyMoodPick(){
  const now = new Date(); const day = now.getDay(); const slot = now.getHours() < 12 ? 'morning' : now.getHours() < 18 ? 'day' : 'night';
  const map = {'0-night':'violet','1-night':'frieren','2-night':'steins-gate','3-night':'spy-family','4-night':'kaguya','5-night':'jjk','6-night':'haikyu','0-day':'one-piece','1-day':'bocchi','2-day':'apothecary','3-day':'mob-psycho','4-day':'your-lie','5-day':'demon-slayer','6-day':'cowboy-bebop'};
  const id = map[`${day}-${slot}`] || map[`${day}-day`] || 'frieren'; return findAnime(id) || animeList[day % animeList.length];
}
function renderMoodPickBanner(){
  const anime = dailyMoodPick(); const dayText = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'][new Date().getDay()]; const hour = new Date().getHours(); const timeText = hour < 12 ? '아침' : hour < 18 ? '오후' : '밤';
  $('#moodPickBanner').innerHTML = `<div><p class="kicker">daily mood pick</p><h2 id="moodPickTitle" class="font-kr text-3xl font-black">오늘은 ${dayText} ${timeText}, 이 한 편 어때요?</h2><p class="plot-line mt-3"><span>한 줄 줄거리</span>${plotLine(anime)}</p><p class="mt-3 leading-7 text-[var(--muted)]">${anime.reason}</p><p class="recommend-reason mt-4">${reasonForAnime(anime)} · 지금 시간대와 잘 맞는 분위기 픽</p><div class="mt-5 flex flex-wrap gap-3"><button class="btn-primary" type="button" data-hero="${anime.id}">오늘의 픽 자세히 보기</button>${addButton(anime.id, '＋ 찜')}</div></div><img class="mood-pick-thumb" src="${anime.image}" alt="${anime.title} 포스터" loading="lazy" />`;
}

function renderProfiles(){
  $('#profileGrid').innerHTML = profiles.map(p => `<button class="profile-card ${p.id===activeProfile?'active':''}" data-profile="${p.id}" type="button"><div class="avatar" style="--p1:${p.palette[0]};--p2:${p.palette[1]};">${p.avatar}</div><strong class="mt-4 block font-kr text-xl font-black">${p.name}</strong><small class="mt-1 block text-[var(--muted)]">${profileDescription(p)}</small></button>`).join('');
  const p = profiles.find(item => item.id === activeProfile);
  $('#activeProfileLabel').textContent = `현재 프로필: ${p.name} · 총 ${animeList.length}개 작품`;
}
function profileDescription(p){ return {solo:'몰입도와 반전 중심 추천',family:'편하게 같이 보기 좋은 추천',action:'빠른 전개와 전투 중심 추천',romance:'설렘과 감정선 중심 추천'}[p.id]; }

function scoreAnime(anime, answers){ return scoreAnimeDetailed(anime, answers).score; }
function rankAnimeDetailed(answers = surveyAnswers){
  return animeList.map(anime => ({ anime, details: scoreAnimeDetailed(anime, answers) })).sort((a,b)=>b.details.score-a.details.score || b.anime.score-a.anime.score);
}
function getAnswers(){ return { ...surveyAnswers }; }
function renderSurveyQuestion(){
  const q = surveyQuestions[surveyStep];
  $('#surveyProgressText').textContent = `${surveyStep + 1} / ${surveyQuestions.length}`;
  $('#surveyProgressBar').style.width = `${((surveyStep + 1) / surveyQuestions.length) * 100}%`;
  $('#surveyBackButton').disabled = surveyStep === 0;
  $('#surveyQuestionCard').classList.remove('slide-out');
  $('#surveyQuestionCard').innerHTML = `<p class="kicker">${q.eyebrow}</p><h3 class="font-kr text-3xl font-black">${q.title}</h3><p class="privacy-note mt-4">망설이지 말고 지금 끌리는 쪽을 골라보세요. 마지막에 가장 잘 맞는 애니를 바로 보여드릴게요.</p><div class="survey-option-grid">${q.options.map(option=>`<button class="survey-option" type="button" data-survey-key="${q.key}" data-survey-value="${option.value}">${option.label}<small>${option.detail}</small></button>`).join('')}</div>`;
}
function renderSurveyLoading(){
  $('#surveyResult').innerHTML = `<div class="result-loading"><div><div class="result-orb" aria-hidden="true"></div><p class="kicker">calculating taste signal</p><h3 class="font-kr text-3xl font-black">취향 파장을 계산 중...</h3><p class="mt-3 text-[var(--muted)]">선택한 감정선과 프로필을 매칭하고 있어요.</p></div></div>`;
}
function completeSurvey(){
  renderSurveyLoading();
  $('#surveyResult').scrollIntoView({behavior:'smooth', block:'center'});
  setTimeout(()=>{
    const result = renderSurveyResult(surveyAnswers, true);
    trackEvent('survey_submit', Object.assign({}, surveyAnswers, { match_percent: result.percent }, animePayload(result.top.anime)));
  }, 1500);
}
function selectSurveyAnswer(key, value){ surveyAnswers[key] = value; $('#surveyQuestionCard').classList.add('slide-out'); setTimeout(()=>{ if(surveyStep < surveyQuestions.length - 1){ surveyStep += 1; renderSurveyQuestion(); } else { renderSurveyQuestion(); completeSurvey(); } }, 230); }
function resetSurvey(){ surveyAnswers = { ...defaultSurveyAnswers }; surveyStep = 0; renderSurveyQuestion(); renderSurveyResult(surveyAnswers); }
function recommendByProfile(){
  const profile = profiles.find(p=>p.id===activeProfile);
  const defaults = { mood: profile.prefer.mood || 'comfort', world: profile.prefer.world || 'modern', pace: profile.prefer.pace || 'balanced', length: profile.prefer.length || 'medium' };
  return animeList.map(anime => ({ anime, score: scoreAnime(anime, defaults) })).sort((a,b)=>b.score-a.score);
}
function renderScoreBreakdown(details){
  return `<div class="score-breakdown" aria-label="추천 점수 세부 내역">
    <div class="score-breakdown-head"><strong>점수 세부 내역</strong><span>${details.score}/${details.maxScore}점</span></div>
    ${details.breakdown.map(item=>`<div class="score-row"><span>${item.label}</span><small>${item.actual}${item.expected !== item.actual ? ` · 선택 ${item.expected}` : ''}</small><b>${item.points}/${item.max}</b></div>`).join('')}
  </div>`;
}
function renderSurveyResult(answers = null, animated = false){
  const selected = answers || getAnswers();
  const ranked = rankAnimeDetailed(selected);
  const top = ranked[0];
  const percent = top.details.percent;
  lastSurveyResult = { top, percent, selected, ranked };
  const tasteText = `${genreLabels[selected.genre]} · ${moodLabels[selected.mood]} · ${focusLabels[selected.focus]}`;
  const answerChips = ['genre','mood','world','pace','length','intensity','tone','focus','era'].map(key=>`<span>${labelFor(key, selected[key])}</span>`).join('');
  $('#surveyResult').innerHTML = `<div class="result-reveal"><p class="kicker">your best match</p><div class="result-hero-card grid gap-6 md:grid-cols-[.82fr_1fr] md:items-center">${poster(top.anime)}<div><h3 class="font-kr text-4xl font-black">${top.anime.title}</h3><p class="mt-2 text-sm font-black text-[var(--accent)]">${tasteText}</p><div class="answer-chip-strip mt-3">${answerChips}</div><p class="plot-line mt-3"><span>한 줄 줄거리</span>${plotLine(top.anime)}</p><div class="mt-5"><div class="mb-2 flex justify-between text-sm font-black"><span>세부 취향 매칭률</span><span>${percent}%</span></div><div class="match-meter"><span style="width:${percent}%"></span></div></div><p class="recommend-reason mt-4">${reasonForAnime(top.anime, selected)}</p><p class="mt-3 rounded-2xl border border-[var(--line)] bg-black/10 p-4 text-sm leading-6">${top.anime.reason}</p>${renderScoreBreakdown(top.details)}<div class="mt-4 flex flex-wrap gap-2">${addButton(top.anime.id, '＋ 찜')}<button class="btn-secondary" type="button" data-share-result>내 취향 결과 공유하기</button></div></div></div><div class="share-result-card"><div id="shareCardPreview" class="share-preview"><p class="kicker !mb-2">AniPick result</p><strong>나는 ${tasteText} 🎌</strong><p class="mt-2 text-white/75">추천 1위: ${top.anime.title} · 매칭률 ${percent}%</p></div><div class="share-actions"><button type="button" data-share-result>공유하기</button><button class="secondary" type="button" data-download-result>결과 카드 PNG 저장</button></div></div><div class="mt-6 grid gap-3 sm:grid-cols-2">${ranked.slice(1,5).map(({anime,details},i)=>`<button class="watch-card result-candidate text-left" style="animation-delay:${(i+1)*0.12}s" data-hero="${anime.id}" type="button"><strong>${i+2}위 · ${anime.title}</strong><span class="candidate-plot">${plotLine(anime)}</span><small class="mt-1 block text-[var(--muted)]">${details.score}/${details.maxScore}점 · ${details.percent}% · ${reasonForAnime(anime, selected)}</small></button>`).join('')}</div></div>`;
  return { top, percent, selected };
}

function filteredAnime(){
  return currentFilter === 'all' ? animeList : animeList.filter(anime => anime.genre === currentFilter);
}
function syncRecommendPanel(){
  const panel = $('#recommendPanel');
  const toggle = $('#recommendToggle');
  if(!panel || !toggle) return;
  panel.hidden = !recommendationsOpen;
  toggle.setAttribute('aria-expanded', String(recommendationsOpen));
  toggle.textContent = recommendationsOpen ? '추천작 닫기' : '추천작 열기';
}
function setRecommendOpen(open){
  recommendationsOpen = open;
  syncRecommendPanel();
  if(open) renderGrid();
}
function renderPagination(totalItems){
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  currentPage = Math.min(Math.max(1, currentPage), totalPages);
  const pagination = $('#animePagination');
  if(!pagination) return;
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);
  pagination.innerHTML = `<button type="button" data-page="prev" ${currentPage===1?'disabled':''}>이전</button>${pages.map(page=>`<button type="button" class="${page===currentPage?'active':''}" data-page="${page}" aria-label="${page}페이지">${page}</button>`).join('')}<button type="button" data-page="next" ${currentPage===totalPages?'disabled':''}>다음</button>`;
}
function renderGrid(){
  const items = filteredAnime();
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  currentPage = Math.min(Math.max(1, currentPage), totalPages);
  const start = (currentPage - 1) * itemsPerPage;
  const pagedItems = items.slice(start, start + itemsPerPage);
  const stats = $('#recommendStats');
  if(stats) stats.textContent = `${genreLabels[currentFilter] || '전체'} ${items.length}개 작품 · ${currentPage}/${totalPages}페이지 · 한 페이지 ${itemsPerPage}개씩 보기`;
  $('#animeGrid').innerHTML = pagedItems.map(anime => `<article class="anime-card" tabindex="0">${preview(anime)}${poster(anime)}<div class="p-3"><div class="mt-1 flex items-start justify-between gap-4"><div><p class="text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">${genreLabels[anime.genre]}</p><h3 class="mt-1 font-kr text-xl font-black">${anime.title}</h3></div>${addButton(anime.id)}</div><p class="plot-line mt-3 min-h-[5.25rem]"><span>한 줄 줄거리</span>${plotLine(anime)}</p><p class="recommend-reason mt-3">${reasonForAnime(anime)}</p></div></article>`).join('');
  renderPagination(items.length);
  applyRevealMotion($$('#animeGrid .anime-card'));
}
function renderWatchlistTabs(){
  const counts = watchlist.reduce((acc,id)=>{ const s = watchStatus[id] || 'want'; acc[s] = (acc[s]||0)+1; return acc; }, {});
  const tabs = [{id:'all',label:`전체 ${watchlist.length}`},{id:'want',label:`보고 싶어요 ${counts.want||0}`},{id:'watching',label:`시청 중 ${counts.watching||0}`},{id:'done',label:`완료 ${counts.done||0}`}];
  $('#watchlistStatusTabs').innerHTML = tabs.map(tab=>`<button class="${currentWatchFilter===tab.id?'active':''}" type="button" data-watch-filter="${tab.id}">${tab.label}</button>`).join('');
}
function renderWatchlist(){
  const countBadge = $('#watchlistCountBadge');
  if(countBadge) countBadge.textContent = `당신의 컬렉션 ${watchlist.length}편`;
  renderWatchlistTabs();
  const items = watchlist.map(findAnime).filter(Boolean).filter(anime => currentWatchFilter === 'all' || (watchStatus[anime.id] || 'want') === currentWatchFilter);
  if(!watchlist.length){ $('#watchlistItems').innerHTML = `<div class="watch-card watch-shelf-empty text-[var(--muted)]">아직 찜한 작품이 없습니다. 추천 카드의 + 버튼을 눌러 나만의 애니 서재를 시작해보세요.</div>`; return; }
  if(!items.length){ $('#watchlistItems').innerHTML = `<div class="watch-card watch-shelf-empty text-[var(--muted)]">이 상태의 작품은 아직 없습니다.</div>`; return; }
  $('#watchlistItems').innerHTML = items.map(anime => {
    const status = watchStatus[anime.id] || 'want';
    return `<article class="shelf-card ${status==='done'?'completed':''}"><button class="shelf-remove" data-remove="${anime.id}" type="button" aria-label="${anime.title} 삭제">×</button><div class="shelf-check"><span>✓</span></div><img class="shelf-poster" src="${anime.image}" alt="${anime.title} 포스터" loading="lazy" /><div class="shelf-info"><p class="kicker !mb-1">${statusIcon(status)} ${statusLabel(status)}</p><h3 class="font-kr text-lg font-black">${anime.title}</h3><p class="shelf-plot mt-2">${plotLine(anime)}</p><p class="mt-2 text-xs leading-5 text-[var(--muted)]">${reasonForAnime(anime)}</p><div class="shelf-status">${['want','watching','done'].map(s=>`<button class="${status===s?'active':''}" type="button" data-watch-status="${s}" data-watch-id="${anime.id}">${statusLabel(s)}</button>`).join('')}</div></div></article>`;
  }).join('');
  applyRevealMotion($$('#watchlistItems .shelf-card'));
}
function addToWatchlist(id){ if(!watchlist.includes(id)){ watchlist.push(id); watchStatus[id] = watchStatus[id] || 'want'; saveWatchlist(); renderWatchlist(); trackEvent('watchlist_add', animePayload(findAnime(id))); } }
function removeFromWatchlist(id){ const anime = findAnime(id); watchlist = watchlist.filter(item => item !== id); delete watchStatus[id]; saveWatchlist(); renderWatchlist(); trackEvent('watchlist_remove', animePayload(anime)); }
function setWatchStatus(id, status){ const anime = findAnime(id); watchStatus[id] = status; saveWatchlist(); renderWatchlist(); trackEvent('watchlist_status_change', Object.assign({ status }, animePayload(anime))); }

function setTheme(theme, options = {}){ document.documentElement.dataset.theme = theme; localStorage.setItem('anipick-theme', theme); const label = theme === 'dark' ? '🌙 Dark' : '☀️ Light'; $$('#themeToggle,#themeToggleMobile').forEach(btn=>{ if(btn) btn.textContent = label; }); if(!options.silent) trackEvent('theme_change', { theme }); }
function preferredTheme(){ const stored = localStorage.getItem('anipick-theme'); if(stored) return stored; const night = new Date().getHours() >= 18 || new Date().getHours() < 6; const osDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches; return (osDark || night) ? 'dark' : 'light'; }
function toggleTheme(){ setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); }
function maybeShowThemeNudge(){
  if(localStorage.getItem('anipick-theme-nudge-v1')) return;
  const nudge = $('#themeNudge'); if(!nudge) return;
  nudge.classList.remove('hidden');
  nudge.innerHTML = `<strong>밤 감상엔 다크모드가 더 선명해요</strong><p>OS 설정과 시간대를 참고해 딥네이비 다크모드를 추천합니다. 선택은 이 브라우저에만 저장됩니다.</p><div class="theme-nudge-actions"><button class="accept-dark" type="button" data-theme-choice="dark">다크모드 쓰기</button><button class="keep-light" type="button" data-theme-choice="keep">그냥 볼게요</button></div>`;
}
async function createResultImageBlob(){
  if(!lastSurveyResult) return null;
  const { top, percent, selected } = lastSurveyResult;
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1350;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0,0,1080,1350);
  gradient.addColorStop(0, '#0d1117'); gradient.addColorStop(.52, '#24111b'); gradient.addColorStop(1, '#e11d2e');
  ctx.fillStyle = gradient; ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.beginPath(); ctx.arc(920,170,230,0,Math.PI*2); ctx.fill();
  ctx.fillStyle = '#ffffff'; ctx.font = '900 64px sans-serif'; ctx.fillText('AniPick 취향 결과', 80, 150);
  ctx.font = '900 84px sans-serif'; ctx.fillText(top.anime.title.slice(0, 15), 80, 310);
  ctx.font = '700 42px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,.82)'; ctx.fillText(`나는 ${moodLabels[selected.mood]} + ${paceLabels[selected.pace]}형 🎌`, 80, 400);
  ctx.fillStyle = '#ffccd3'; ctx.font = '900 58px sans-serif'; ctx.fillText(`매칭률 ${percent}%`, 80, 520);
  ctx.fillStyle = 'rgba(255,255,255,.88)'; ctx.font = '700 34px sans-serif'; wrapCanvasText(ctx, reasonForAnime(top.anime, selected), 80, 630, 920, 48);
  ctx.fillStyle = 'rgba(255,255,255,.78)'; ctx.font = '600 30px sans-serif'; wrapCanvasText(ctx, 'https://sungggong.github.io/anime/', 80, 1190, 920, 42);
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}
function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(' '); let line = '';
  for(const word of words){ const test = `${line}${word} `; if(ctx.measureText(test).width > maxWidth && line){ ctx.fillText(line, x, y); line = `${word} `; y += lineHeight; } else line = test; }
  ctx.fillText(line, x, y);
}
async function shareResult(){
  if(!lastSurveyResult) return;
  const { top, percent, selected } = lastSurveyResult;
  const text = `나는 ${moodLabels[selected.mood]} + ${paceLabels[selected.pace]}형 🎌 AniPick 추천 1위는 ${top.anime.title}, 매칭률 ${percent}%!`;
  const url = 'https://sungggong.github.io/anime/';
  try {
    const blob = await createResultImageBlob();
    const file = blob ? new File([blob], 'anipick-result.png', { type:'image/png' }) : null;
    if(file && navigator.canShare?.({ files:[file] })) await navigator.share({ title:'AniPick 취향 결과', text, url, files:[file] });
    else if(navigator.share) await navigator.share({ title:'AniPick 취향 결과', text, url });
    else { await navigator.clipboard.writeText(`${text} ${url}`); alert('공유 문구를 클립보드에 복사했어요.'); }
    trackEvent('result_share', animePayload(top.anime));
  } catch (error) { if(error.name !== 'AbortError') console.warn('share failed', error); }
}
async function downloadResultImage(){
  const blob = await createResultImageBlob(); if(!blob) return;
  const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href = url; a.download = 'anipick-result.png'; a.click(); URL.revokeObjectURL(url);
  trackEvent('result_image_download', animePayload(lastSurveyResult.top.anime));
}
function applyRevealMotion(elements){
  const targets = [...elements].filter(Boolean);
  targets.forEach((el, index)=>{
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Math.min(index * 0.02, .24)}s`);
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 1.15 && rect.bottom > -80;
    if(revealObserver && !alreadyInView) revealObserver.observe(el);
    else el.classList.add('is-visible');
  });
}
function initScrollMotion(){
  const targets = $$('section, .anime-card, .profile-card, .watch-card, .glass-card');
  if(!('IntersectionObserver' in window)){
    targets.forEach(el => el.classList.add('reveal', 'is-visible'));
    return;
  }
  document.body.classList.add('motion-ready');
  revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }), { threshold:.04, rootMargin:'0px 0px 18% 0px' });
  applyRevealMotion(targets);
  requestAnimationFrame(()=>{
    $$('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight * 1.12 && rect.bottom > -80) el.classList.add('is-visible');
    });
  });
  setTimeout(()=>{
    $$('.reveal:not(.is-visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight * 1.35) el.classList.add('is-visible');
    });
  }, 700);
  $$('.hero-backdrop,.shrine-silhouette').forEach(el=>el.classList.add('parallax-soft'));
  window.addEventListener('scroll', () => { const y = Math.min(36, window.scrollY * .035); $$('.parallax-soft').forEach(el=>el.style.setProperty('--parallax-y', `${y}px`)); }, { passive:true });
}
function bindEvents(){
  $('#menuButton')?.addEventListener('click', e => { const menu = $('#mobileMenu'); const open = !menu.classList.contains('hidden'); menu.classList.toggle('hidden'); e.currentTarget.setAttribute('aria-expanded', String(!open)); trackEvent('mobile_menu_toggle', { open: String(!open) }); });
  $$('#themeToggle,#themeToggleMobile').forEach(btn=>btn?.addEventListener('click', toggleTheme));
  $('#profileGrid').addEventListener('click', e => { const card = e.target.closest('[data-profile]'); if(!card) return; activeProfile = card.dataset.profile; localStorage.setItem('anipick-profile', activeProfile); clearScoreCache(); renderProfiles(); renderSurveyResult(); renderHero(); trackEvent('profile_select', { profile: activeProfile }); });
  $$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filter-chip').forEach(c=>c.classList.remove('active')); btn.classList.add('active'); currentFilter=btn.dataset.filter; currentPage=1; setRecommendOpen(true); trackEvent('genre_filter', { filter: currentFilter }); }));
  $('#surveyForm').addEventListener('click', e => { const option = e.target.closest('[data-survey-key]'); if(option) selectSurveyAnswer(option.dataset.surveyKey, option.dataset.surveyValue); });
  $('#surveyBackButton').addEventListener('click',()=>{ if(surveyStep > 0){ surveyStep -= 1; renderSurveyQuestion(); } });
  $('#surveyResetButton').addEventListener('click', resetSurvey);
  $('#randomHeroButton').addEventListener('click',()=>{ const anime = pickRandom(); renderHero(anime); trackEvent('random_pick', animePayload(anime)); });
  $('#clearWatchlist').addEventListener('click',()=>{ const count = watchlist.length; watchlist=[]; watchStatus={}; saveWatchlist(); renderWatchlist(); trackEvent('watchlist_clear', { removed_count: count }); });
  document.body.addEventListener('click', e => {
    const nav = e.target.closest('a[href^="#"]'); const recommendToggle=e.target.closest('#recommendToggle'); const pageButton=e.target.closest('[data-page]'); const add=e.target.closest('[data-add]'); const rem=e.target.closest('[data-remove]'); const hero=e.target.closest('[data-hero]'); const filter=e.target.closest('[data-watch-filter]'); const status=e.target.closest('[data-watch-status]'); const share=e.target.closest('[data-share-result]'); const download=e.target.closest('[data-download-result]'); const themeChoice=e.target.closest('[data-theme-choice]');
    if(nav) trackEvent('nav_click', { target: nav.getAttribute('href'), label: nav.textContent.trim().slice(0, 40) });
    if(recommendToggle){ setRecommendOpen(!recommendationsOpen); trackEvent('recommend_toggle', { open: String(recommendationsOpen) }); }
    if(pageButton){ const totalPages = Math.max(1, Math.ceil(filteredAnime().length / itemsPerPage)); const target = pageButton.dataset.page; currentPage = target === 'prev' ? Math.max(1, currentPage - 1) : target === 'next' ? Math.min(totalPages, currentPage + 1) : Number(target); renderGrid(); $('#recommendPanel')?.scrollIntoView({behavior:'smooth', block:'start'}); trackEvent('recommend_page', { page: currentPage, filter: currentFilter }); }
    if(add){ const original = add.textContent; addToWatchlist(add.dataset.add); add.textContent='✓'; setTimeout(()=>{ add.textContent = original; },800); }
    if(rem) removeFromWatchlist(rem.dataset.remove);
    if(hero) { const anime = findAnime(hero.dataset.hero); renderHero(anime); trackEvent('recommendation_candidate_open', animePayload(anime)); $('#top').scrollIntoView({behavior:'smooth'}); }
    if(filter){ currentWatchFilter = filter.dataset.watchFilter; renderWatchlist(); }
    if(status){ setWatchStatus(status.dataset.watchId, status.dataset.watchStatus); }
    if(share) shareResult();
    if(download) downloadResultImage();
    if(themeChoice){ if(themeChoice.dataset.themeChoice === 'dark') setTheme('dark'); localStorage.setItem('anipick-theme-nudge-v1','seen'); $('#themeNudge')?.classList.add('hidden'); }
  });
}

function init(){
  const themeVersion = 'deep-navy-v2';
  if(localStorage.getItem('anipick-theme-version') !== themeVersion){ localStorage.setItem('anipick-theme-version', themeVersion); }
  setTheme(preferredTheme(), { silent: true });
  renderProfiles(); initHeroVisuals(); renderHero(); renderMoodPickBanner(); renderSurveyQuestion(); renderSurveyResult(); renderGrid(); renderWatchlist(); syncRecommendPanel(); bindEvents(); maybeShowThemeNudge(); initScrollMotion();
}
document.addEventListener('DOMContentLoaded', init);
