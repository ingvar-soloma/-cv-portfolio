import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    // Target modern evergreen browsers — removes polyfills, shrinks output ~5-8%
    target: 'esnext',

    // Inline assets smaller than 4kb (SVG icons, tiny images) into the bundle
    // to eliminate extra HTTP round-trips
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        // Split vendor runtime into a separate immutable-cacheable chunk.
        // react + react-dom (~144kb gz) changes less often than app code,
        // so users who revisit only re-download the small app chunk on updates.
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
        },
      },
    },

    // Vite sets NODE_ENV=production automatically in build mode, which lets
    // Terser's constant-folding eliminate all development-only code blocks
    // (e.g. React's internal warnings, PropTypes checks in libraries).
    // No explicit configuration needed — documented here for clarity.
  },
})
