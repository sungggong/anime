# AniPick - 신사 배경/프로필/설문 기반 애니 추천 사이트

빨간색과 하얀색을 주 색상으로 사용한 선명하고 읽기 쉬운 애니 추천 웹사이트입니다. 신사 실루엣은 배경 장식으로만 은은하게 남기고, 콘텐츠는 밝은 카드와 높은 대비의 텍스트 중심으로 구성했습니다.

## 주요 기능

- 추천 애니 키비주얼을 흐릿하게 깐 시네마틱 히어로와 상위 10개 포스터 레일
- 빨간색/하얀색 중심의 고대비 UI와 은은한 신사/토리이 배경
- OS 설정/야간 시간대 기반 다크모드 우선 적용, 수동 라이트/다크 전환 및 localStorage 저장
- OTT 서비스에서 익숙한 프로필 선택 UX를 자체 디자인으로 구현
- 질문 1개씩 넘기는 카드 스와이프형 개인화 설문 추천
- 설문 완료 후 1.5초 계산 연출, 1위 대형 공개, 2~5위 순차 등장
- 추천 결과 공유: Web Share API 지원 및 Canvas 기반 PNG 결과 카드 저장
- 추천 카드별 개인화 이유, 호버/포커스 미리보기 팝업, MAL식 평점/분량 표시
- 요일/시간대 기반 "오늘의 분위기 픽" 배너
- 장르 필터, 랜덤 추천, 찜 목록 저장
- 추천작 컬렉션은 기본 닫힘 상태로 두고, 열면 페이지네이션으로 작품을 나누어 탐색
- 찜 목록을 포스터 책장형 서재로 표시하고 보고 싶어요/시청 중/완료 상태 localStorage 저장
- 다크모드 기본 제안: OS 설정/야간 시간대 기반 딥네이비 테마 자동 적용 및 선택 안내
- IntersectionObserver 기반 스크롤 페이드인, 순차 등장, 미세 패럴랙스
- 200개 애니 데이터와 한글 제목 기반 소개 카드
- 방문자 행동 분석 준비: 방문, 메뉴 클릭, 장르 필터, 프로필 선택, 테마 변경, 설문 제출, 찜 추가/삭제 이벤트 추적
- 개인정보/보안 우선: GA4 스크립트는 방문자가 허용한 뒤에만 로드하고, 동의 전 행동 이벤트는 저장/대기열 처리하지 않음
- 광고 수익화 준비: Google AdSense 승인 후 `ads-config.js`에 게시자 ID와 광고 슬롯 ID를 넣으면 스폰서 영역이 실제 광고로 전환됨
- 검색 엔진 최적화: title/description/keywords, canonical, Open Graph/Twitter 카드, JSON-LD 구조화 데이터, `robots.txt`, `sitemap.xml`

## 검색 엔진 노출 설정

검색 엔진이 사이트를 더 쉽게 이해하고 색인할 수 있도록 다음 항목을 적용했습니다.

- 대표 주소: `https://sungggong.github.io/anime/`
- Canonical URL 설정
- Googlebot/robots 색인 허용 메타태그
- Open Graph/Twitter 공유 미리보기 태그
- WebSite, WebApplication, ItemList, FAQPage JSON-LD 구조화 데이터
- `robots.txt`에서 크롤링 허용 및 sitemap 위치 안내
- `sitemap.xml` 생성
- 본문에 "애니 추천", "애니메이션 추천", "볼만한 애니", "취향별 애니 추천" 같은 자연스러운 검색 문구 보강

참고: Google 검색 노출은 Search Console 등록, 색인 처리 시간, 콘텐츠 품질 평가, 외부 링크 등에 따라 달라집니다. 이 저장소에는 검색 엔진이 읽기 쉬운 기술적 SEO 기반을 구축했습니다.

## 방문자 행동 분석 설정

GitHub Pages는 정적 사이트라서 자체적으로 방문자 행동 데이터를 저장할 서버가 없습니다. 그래서 Google Analytics 4 같은 외부 분석 서비스를 연결해야 실제 대시보드에서 확인할 수 있습니다.

1. Google Analytics에서 웹 스트림을 만들고 `G-XXXXXXXXXX` 형식의 측정 ID를 받습니다.
2. `analytics-config.js` 파일의 `measurementId` 값을 채웁니다.
3. `index.html`에는 GA4 스크립트를 직접 넣지 않습니다. `analytics.js`가 방문자 동의 후에만 Google tag를 동적으로 로드합니다. 현재 사이트는 `G-ZQ8WZ0SKF4`가 적용되어 있습니다.

```js
window.ANIPICK_ANALYTICS_CONFIG = {
  provider: 'ga4',
  measurementId: 'G-ZQ8WZ0SKF4',
  enabled: true,
  requireConsent: true,
};
```

측정 ID가 설정되어 있어도 방문자가 동의 배너에서 허용을 누른 뒤에만 Google tag를 로드하고 `analytics_storage`를 `granted`로 업데이트한 다음 커스텀 이벤트/페이지뷰를 전송합니다. 거절하거나 아직 선택하지 않은 상태에서는 행동 이벤트를 저장하거나 대기열에 넣지 않습니다.

추적 이벤트 예시:

- `page_view`
- `nav_click`
- `profile_select`
- `survey_submit`
- `theme_change`
- `genre_filter`
- `random_pick`
- `watchlist_add`
- `watchlist_remove`
- `watchlist_clear`
- `recommendation_candidate_open`

주의: 이 사이트는 이름/연락처 같은 개인정보를 수집하지 않고, 방문자가 분석을 허용한 뒤에만 익명 세션 ID와 행동 이벤트를 전송하도록 설계했습니다.

## 광고 수익화 설정

현재 사이트에는 광고가 들어갈 위치와 AdSense 로더가 준비되어 있습니다. 실제 광고를 띄우려면 Google AdSense 승인 후 `ads-config.js`를 수정하세요.

```js
window.ANIPICK_ADS_CONFIG = {
  provider: 'adsense',
  enabled: true,
  requireConsent: true,
  showPlaceholders: false,
  publisherId: 'ca-pub-1234567890123456',
  slots: {
    top: '1234567890',
    inContent: '2345678901',
    bottom: '3456789012',
  },
};
```

AdSense 신청 전에는 `enabled: false`를 유지합니다. `ca-pub-...` 게시자 ID와 광고 슬롯 ID는 웹에 노출되는 공개 식별자이며 비밀번호가 아닙니다. 다만 승인 전 임의의 값을 넣어도 수익이 발생하지 않으므로 실제 승인 정보만 사용하세요. 현재 로더는 방문자가 동의하기 전에는 AdSense 스크립트를 로드하지 않습니다.

## 이미지 출처

애니 소개 카드의 커버 이미지는 Jikan API를 통해 확인한 공개 MyAnimeList CDN 이미지 URL을 사용합니다. 브랜드 로고/OTT 공식 자산은 사용하지 않고, 작품 커버 이미지 중심으로 카드 UI를 구성했습니다.

## 파일 구성

- `index.html` - 페이지 구조와 Tailwind CSS CDN 설정
- `style.css` - 빨간색/하얀색 테마, 신사 배경, 카드 UI 스타일
- `script.js` - 추천 데이터, 설문 점수 계산, 프로필/테마/찜 기능
- `analytics-config.js` - 분석 제공자/측정 ID 설정
- `analytics.js` - 익명 분석 이벤트와 동의 배너 처리
- `ads-config.js` - AdSense 게시자 ID/광고 슬롯 설정
- `ads.js` - 광고 슬롯 렌더링과 AdSense 로더

## 실행

```bash
python -m http.server 4173
```

브라우저에서 `http://localhost:4173` 접속

## 백업

업데이트 전 버전은 GitHub의 백업 브랜치와 태그로 보존됩니다. 이번 빨간색/하얀색 가독성 개선 전 버전은 `backup/pre-red-white-redesign-*` 브랜치와 `pre-red-white-redesign-*` 태그로 보존됩니다.
