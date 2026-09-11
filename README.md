# github-page-webpush

Placeholder site for testing OneSignal Web Push (Web SDK v16), hosted on GitHub Pages.

Live: https://mwkling.github.io/github-page-webpush/

## Setup

1. In the OneSignal dashboard (staging or production), create a Web app with **Site URL**
   `https://mwkling.github.io` (Typical Site integration). Copy the App ID from Settings > Keys & IDs.
2. Set `ONESIGNAL_ENV` and `ONESIGNAL_APP_ID` in `config.js`, or pass them per-visit with
   `?env=staging&appId=<uuid>`.
3. Commit and push; GitHub Pages redeploys from `main`.

## Environments

The production SDK on `cdn.onesignal.com` hardcodes `api.onesignal.com`, so it cannot be pointed at
staging. The SDK repo's `build:staging` target produces a separate bundle, prefixed `Staging-`, with
`staging.onesignal.com` baked in as both the asset origin and the API origin. It is hosted at
`https://staging.onesignal.com/sdks/web/v16/Staging-OneSignalSDK.page.js` (also reachable via
`cdn.staging.onesignal.com`).

| env        | page SDK                                                          | service worker file             | API                                 |
|------------|-------------------------------------------------------------------|---------------------------------|-------------------------------------|
| staging    | `staging.onesignal.com/sdks/web/v16/Staging-OneSignalSDK.page.js` | `OneSignalSDKWorker.staging.js` | `https://staging.onesignal.com/api/v1` |
| production | `cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js`             | `OneSignalSDKWorker.js`         | `https://api.onesignal.com`         |

The dashboard app is a Typical Site integration, whose server config pins the worker to the site
root. `init()` therefore passes `serviceWorkerOverrideForTypical: true` along with `path`,
`serviceWorkerPath`, and `serviceWorkerParam.scope`; without the override flag the SDK ignores those
and tries to register `https://mwkling.github.io/OneSignalSDKWorker.js`, which 404s.

Each environment has its own worker file because the SDK appends `?appId=…&sdkVersion=…` to the
worker URL itself, so the environment cannot be passed as a query parameter. Switching environments
on the same origin re-registers the worker with the other script. Clear site data in DevTools if
you switch and want a clean slate.

## Files

- `index.html` – test page with buttons for prompting, opt in/out, login/logout, tags, and an event log.
- `OneSignalSDKWorker.js` / `OneSignalSDKWorker.staging.js` – service workers importing the production
  and staging OneSignal SW builds. Served from the repo subpath, so `init()` sets
  `serviceWorkerParam.scope` to `/github-page-webpush/`.
- `config.js` – environment, App ID, service worker scope, and per-environment SDK URLs.
- `.nojekyll` – disables Jekyll so files are served as-is.
