import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default ({ mode }) => {
    // // Load app-level env vars to node-level env vars.
    // process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
      // To access env vars here use process.env.TEST_VAR
      VITE_SHAZAM_CORE_RAPID_API_KEY: process.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
      VITE_GEO_API_KEY: process.env.VITE_GEO_API_KEY,
      plugins: [react()],
    });
}