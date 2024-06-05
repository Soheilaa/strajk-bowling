// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: 'happy-dom'
//   }
// });
// vitest.config.js
// vite.config.js


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'happy-dom',
//     setupFiles: './setupVitest.js',
//     include: ['src/views/_tests_/Booking.test.jsx'],
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './setupVitest.js',
    include: ['./src/**/*.test.jsx'], // This pattern includes all .test.jsx files in the src directory and its subdirectories
  },
});
