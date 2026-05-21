// AniPick analytics configuration
// 1) Google Analytics 4를 쓰려면 measurementId에 G-XXXXXXXXXX 값을 넣으세요.
// 2) Umami/Plausible 같은 서비스를 쓰려면 provider와 endpoint 설정을 바꾸면 됩니다.
// 3) 값이 비어 있으면 실제 전송은 하지 않고 브라우저 콘솔에만 기록됩니다.
window.ANIPICK_ANALYTICS_CONFIG = {
  provider: 'ga4',
  measurementId: '',
  enabled: true,
  requireConsent: true,
  anonymizeIp: true,
  debug: false,
  siteName: 'AniPick',
};
