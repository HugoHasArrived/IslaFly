# IslaFly — Cesium-powered Philippine Flight Simulator foundation

This rebuild replaces the previous procedural Three.js island scene with CesiumJS, Cesium ion terrain/imagery, real Philippine airport reference coordinates, a route planner, a procedural 3D aircraft made from Cesium entities, flight controls, camera presets and flight readouts.

## Deploy
1. Keep the GitHub repository connected to Vercel.
2. In Vercel → Project → Settings → Environment Variables, set `CESIUM_ION_TOKEN` to your Cesium ion token.
3. Redeploy after changing the variable.
4. Upload/commit `index.html`, `vercel.json`, and the `api/cesium-token.js` file, preserving the `api` folder at repository root.
5. Open the deployed site and allow time for terrain and imagery tiles to load.

## Token security
CesiumJS needs a token for browser requests. This Vercel endpoint keeps it out of Git history, but the token is still delivered to the browser and is not secret from visitors. Use only public read-only scopes such as `assets:read`, no private scopes, and restrict allowed URLs to your production Vercel domain (plus preview domains only if needed) in Cesium ion.

## Controls
W/Up pitch up; S/Down pitch down; A/Left bank left; D/Right bank right; Shift/Ctrl increase/decrease throttle; E start/shut down engine. UI controls change aircraft, route, throttle, pitch, bank, gear, flaps, heading hold, weather preset and camera.

## Honest limits
This is an early geographic and flight-state foundation, not a finished GeoFS/MSFS competitor. The world terrain and imagery are streamed from Cesium ion and depend on network, token permissions and asset availability. The aircraft is procedural geometry, not a licensed high-detail model. Flight dynamics are simplified and not validated for real-world aviation. Airport points are reference locations, not surveyed runways/taxiways. Live ATC, live traffic, multiplayer, detailed airports, validated aircraft systems and realistic weather are not implemented yet.

CesiumJS quickstart: https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/
