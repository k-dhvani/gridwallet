import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://localhost:3000',
=======
        target: 'http://localhost:3030/api/v1',
>>>>>>> origin/fix/wallet
        secure: false,
      },
    },
  },

  plugins: [react()],
});
