// AniPick analytics configuration
// Google Analytics 4 측정 ID(G-XXXXXXXXXX)를 넣으면 즉시 실제 GA4로 전송됩니다.
// 아직 측정 ID가 없으면 빈 문자열로 두세요. 로컬 테스트에서는 콘솔 로그만 출력됩니다.
// 방문자에게 동의 배너를 먼저 보여준 뒤, 허용한 경우에만 익명 이벤트를 전송합니다.
window.ANIPICK_ANALYTICS_CONFIG = {
  provider: 'ga4',
  measurementId: 'G-ZQ8WZ0SKF4', // 예: 'G-XXXXXXXXXX'
  enabled: true,
  requireConsent: true,
  anonymizeIp: true,
  debug: false,
  siteName: 'AniPick',
};
