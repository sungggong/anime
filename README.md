# AniPick - 계절/프로필/설문 기반 애니 추천 사이트

일본풍 계절 배경, 다크/라이트 모드, OTT 스타일 프로필, 개인화 설문 추천 시스템을 갖춘 단일 페이지 애니 추천 웹사이트입니다.

## 주요 기능

- 일본풍 계절 배경: 봄/여름/가을/겨울 선택
- 다크 모드 / 라이트 모드 전환 및 localStorage 저장
- OTT 서비스에서 익숙한 프로필 선택 UX를 자체 디자인으로 구현
- 개인화 설문 기반 애니 추천 점수 계산
- 장르 필터, 랜덤 추천, 찜 목록 저장
- 28개 애니 데이터와 실제 커버 이미지 기반 소개 카드

## 이미지 출처

애니 소개 카드의 커버 이미지는 Jikan API를 통해 확인한 공개 MyAnimeList CDN 이미지 URL을 사용합니다. 브랜드 로고/OTT 공식 자산은 사용하지 않고, 작품 커버 이미지 중심으로 카드 UI를 구성했습니다.

## 파일 구성

- `index.html` - 페이지 구조와 Tailwind CSS CDN 설정
- `style.css` - 계절별 배경, 테마, 카드 UI 스타일
- `script.js` - 추천 데이터, 설문 점수 계산, 프로필/계절/테마/찜 기능

## 실행

```bash
python -m http.server 4173
```

브라우저에서 `http://localhost:4173` 접속

## 백업

업데이트 전 버전은 GitHub의 `backup/pre-japanese-seasonal-update` 브랜치와 `pre-japanese-seasonal-update-*` 태그로 보존됩니다.
