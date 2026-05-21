# AniPick - 계절/프로필/설문 기반 애니 추천 사이트

일본풍 계절 배경, 다크/라이트 모드, OTT 스타일 프로필, 개인화 설문 추천 시스템을 갖춘 단일 페이지 애니 추천 웹사이트입니다.

## 주요 기능

- 일본풍 계절 배경: 봄/여름/가을/겨울 선택
- 다크 모드 / 라이트 모드 전환 및 localStorage 저장
- OTT 서비스에서 익숙한 프로필 선택 UX를 자체 디자인으로 구현
- 개인화 설문 기반 애니 추천 점수 계산
- 장르 필터, 랜덤 추천, 찜 목록 저장

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
