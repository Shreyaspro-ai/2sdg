import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const legacyScripts = [
  'vendor/gsap.min.js',
  'vendor/SplitText.min.js',
  'vendor/DrawSVGPlugin.min.js',
  'vendor/Draggable.min.js',
  'vendor/InertiaPlugin.min.js',
  'vendor/anime.min.js',
  'motion.js',
  'water-masks.js',
  'motion-anime.js',
  'reference-data.js',
  'reference-chart-data.js',
  'reference-charts.js',
  'reference.js',
  'app.js',
];

function loadScript(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `/dist/${path}`;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Unable to load legacy module: ${path}`));
    document.body.appendChild(script);
  });
}

/**
 * React owns the application shell. The existing, visually audited dashboard
 * is mounted inside its navigation/content landmarks while each view is
 * progressively moved into React components.
 */
function AquaCityApp() {
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        for (const script of legacyScripts) {
          await loadScript(script);
          if (cancelled) return;
        }
      } catch (error) {
        if (!cancelled) setLoadError(error.message);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div id="viewport">
      <div id="canvas">
        <aside id="sidebar" aria-label="Main navigation" />
        <main id="page" aria-live="polite" />
        <div className="sdgs" aria-label="Sustainable development goals">
          <img src="assets/sdg6.png" alt="SDG 6: Clean Water and Sanitation" />
          <img src="assets/sdg11.png" alt="SDG 11: Sustainable Cities and Communities" />
          <img className="avatar" src="assets/avatar.png" alt="Resident profile" />
        </div>
      </div>
      {loadError && (
        <div className="app-error" role="alert">
          <strong>AquaCity could not load a required prototype file.</strong>
          <span>{loadError}</span>
          <span>Run the project from the repository root with <code>npm run dev</code>.</span>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<AquaCityApp />);
