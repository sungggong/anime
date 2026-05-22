# AniPick - 신사 배경/프로필/설문 기반 애니 추천 사이트

빨간색과 하얀색을 주 색상으로 사용한 선명하고 읽기 쉬운 애니 추천 웹사이트입니다. 신사 실루엣은 배경 장식으로만 은은하게 남기고, 콘텐츠는 밝은 카드와 높은 대비의 텍스트 중심으로 구성했습니다.

## 주요 기능

- 빨간색/하얀색 중심의 고대비 UI와 은은한 신사/토리이 배경
- 라이트 모드 기본값, 다크 모드 전환 및 localStorage 저장
- OTT 서비스에서 익숙한 프로필 선택 UX를 자체 디자인으로 구현
- 개인화 설문 기반 애니 추천 점수 계산
- 장르 필터, 랜덤 추천, 찜 목록 저장
- 28개 애니 데이터와 실제 커버 이미지 기반 소개 카드
- 방문자 행동 분석 준비: 방문, 메뉴 클릭, 장르 필터, 프로필 선택, 테마 변경, 설문 제출, 찜 추가/삭제 이벤트 추적
- 분석 동의 배너 포함: 방문자가 허용한 뒤 익명 이벤트만 전송

## 방문자 행동 분석 설정

GitHub Pages는 정적 사이트라서 자체적으로 방문자 행동 데이터를 저장할 서버가 없습니다. 그래서 Google Analytics 4 같은 외부 분석 서비스를 연결해야 실제 대시보드에서 확인할 수 있습니다.

1. Google Analytics에서 웹 스트림을 만들고 `G-XXXXXXXXXX` 형식의 측정 ID를 받습니다.
2. `analytics-config.js` 파일의 `measurementId` 값을 채웁니다.

```js
window.ANIPICK_ANALYTICS_CONFIG = {
  provider: 'ga4',
  measurementId: 'G-XXXXXXXXXX',
  enabled: true,
  requireConsent: true,
};
```

측정 ID가 비어 있으면 실제 전송은 하지 않고, 로컬 테스트에서는 콘솔 로그로만 확인됩니다.

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

주의: 이 사이트는 이름/연락처 같은 개인정보를 수집하지 않고, 익명 세션 ID와 행동 이벤트만 추적하도록 설계했습니다.

## 이미지 출처

애니 소개 카드의 커버 이미지는 Jikan API를 통해 확인한 공개 MyAnimeList CDN 이미지 URL을 사용합니다. 브랜드 로고/OTT 공식 자산은 사용하지 않고, 작품 커버 이미지 중심으로 카드 UI를 구성했습니다.

## 파일 구성

- `index.html` - 페이지 구조와 Tailwind CSS CDN 설정
- `style.css` - 빨간색/하얀색 테마, 신사 배경, 카드 UI 스타일
- `script.js` - 추천 데이터, 설문 점수 계산, 프로필/테마/찜 기능
- `analytics-config.js` - 분석 제공자/측정 ID 설정
- `analytics.js` - 익명 분석 이벤트와 동의 배너 처리

## 실행

```bash
python -m http.server 4173
```

브라우저에서 `http://localhost:4173` 접속

## 백업

업데이트 전 버전은 GitHub의 백업 브랜치와 태그로 보존됩니다. 이번 빨간색/하얀색 가독성 개선 전 버전은 `backup/pre-red-white-redesign-*` 브랜치와 `pre-red-white-redesign-*` 태그로 보존됩니다.
