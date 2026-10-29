# IslaFly 3D — Philippine Flight Simulator Prototype

This rebuild uses Three.js for a real-time 3D scene, aircraft geometry, islands, runways, clouds, chase/cockpit/wing/orbit/tower camera presets, and a glass cockpit-style HUD.

## Deploy to Vercel
1. Extract the ZIP.
2. Upload `index.html`, `vercel.json`, and `README.md` to a GitHub repository.
3. Import the repository into Vercel as a static site. No build command is required.
4. Open the deployed site in a modern browser with internet access.

## Controls
- W / Up Arrow: pitch up
- S / Down Arrow: pitch down
- A / Left Arrow: bank left
- D / Right Arrow: bank right
- Shift / Ctrl: increase / decrease throttle
- E: engine start / stop
- Use the sliders and buttons for throttle, pitch, bank, gear, flaps, heading hold, weather, and camera.

## Important limits
This is an early 3D browser prototype, not Microsoft Flight Simulator. Terrain and airport placement are illustrative, the aircraft are procedural low-poly models, and flight dynamics are simplified. It does not yet include surveyed Philippine terrain, licensed aircraft models, real airport layouts, validated aerodynamics, live weather/ATC, or multiplayer. Three.js is loaded from a CDN, so the first load requires internet access.
