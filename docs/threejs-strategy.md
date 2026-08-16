# THREE.JS & REACT THREE FIBER ARCHITECTURE STRATEGY
## 3D Component Integration Blueprint

### 1. Architectural Principles
- **Storytelling Augmentation**: 3D elements are integrated to elevate wildlife discovery and habitat exploration; they do **not** replace core photographic or factual content.
- **Lazy Load Execution**: WebGL canvases and heavy GLTF/GLB models are dynamically imported using `next/dynamic` with `ssr: false` to ensure fast initial page renders.
- **Non-WebGL Fallback**: Every 3D component is wrapped in a capability inspector (`WebGLDetector`). If WebGL is unavailable or user enables `prefers-reduced-motion`, a high-resolution 2D photographic fallback is displayed seamlessly.

---

### 2. Component Pipeline (`src/components/3d/`)

```
Scene.tsx (Canvas setup, Lighting, Environment HDRI, Shadows)
    └── ModelViewer.tsx (OrbitControls, Loading Spinner, Canvas Fallback boundary)
            └── WildlifeModel.tsx (useGLTF loader, AnimationMixer, Pointer interaction)
```

#### Key Technical Specifications
- **Loader**: `@react-three/drei` `useGLTF` with Draco compression support.
- **Lighting**: Soft ambient light + directional sun light casting soft shadows + subtle environmental reflection (`Environment` preset).
- **Controls**: `OrbitControls` with strict pitch/azimuth boundaries (`minPolarAngle={Math.PI / 4}`, `maxPolarAngle={Math.PI / 2}`) to prevent camera flipping.
- **Performance**: Frame loop throttled (`frameloop="demand"`) during static viewing to conserve CPU/GPU energy.
