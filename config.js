// OneSignal configuration for this test site.

// "staging" or "production". Override per-visit with ?env=production.
window.ONESIGNAL_ENV = "staging";

// App ID from the OneSignal dashboard for the chosen environment
// (Settings > Keys & IDs). Override per-visit with ?appId=<uuid>.
window.ONESIGNAL_APP_ID = "REPLACE_WITH_YOUR_ONESIGNAL_APP_ID";

// GitHub project pages are served from a subpath, so the service worker
// must be scoped to it. Change this if you rename the repo or use a custom domain.
window.ONESIGNAL_SW_SCOPE = "/github-page-webpush/";

// Per-environment SDK locations. The staging build is a separate bundle
// (prefixed "Staging-") whose API and asset origins are baked in as
// staging.onesignal.com; the production build hardcodes api.onesignal.com.
window.ONESIGNAL_ENVS = {
  production: {
    pageSdk: "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js",
    serviceWorkerPath: "OneSignalSDKWorker.js",
    apiOrigin: "https://api.onesignal.com",
  },
  staging: {
    pageSdk: "https://staging.onesignal.com/sdks/web/v16/Staging-OneSignalSDK.page.js",
    serviceWorkerPath: "OneSignalSDKWorker.staging.js",
    apiOrigin: "https://staging.onesignal.com/api/v1",
  },
};
