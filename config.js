// OneSignal configuration for this test site.
// Replace ONESIGNAL_APP_ID with the App ID from your OneSignal dashboard
// (Settings > Keys & IDs). You can also override it per-visit with ?appId=<uuid>.
window.ONESIGNAL_APP_ID = "REPLACE_WITH_YOUR_ONESIGNAL_APP_ID";

// GitHub project pages are served from a subpath, so the service worker
// must be scoped to it. Change this if you rename the repo or use a custom domain.
window.ONESIGNAL_SW_SCOPE = "/github-page-webpush/";
