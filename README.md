# github-page-webpush

Placeholder site for testing OneSignal Web Push (Web SDK v16), hosted on GitHub Pages.

Live: https://mwkling.github.io/github-page-webpush/

## Setup

1. In the OneSignal dashboard, create a Web app with **Site URL** `https://mwkling.github.io`
   (Typical Site integration). Copy the App ID from Settings > Keys & IDs.
2. Put the App ID in `config.js`, or pass it per-visit with `?appId=<uuid>`.
3. Commit and push; GitHub Pages redeploys from `main`.

## Files

- `index.html` – test page with buttons for prompting, opt in/out, login/logout, tags, and an event log.
- `OneSignalSDKWorker.js` – service worker that imports the OneSignal SW. Served from the repo
  subpath, so `init()` sets `serviceWorkerParam.scope` to `/github-page-webpush/`.
- `config.js` – App ID and service worker scope.
- `.nojekyll` – disables Jekyll so files are served as-is.
