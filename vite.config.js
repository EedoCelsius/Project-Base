import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

  return {
    plugins: [vue()],
    base: isGitHubPages && repoName ? `/${repoName}/` : '/',
    server: {
      port: 5173,
      open: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use 'sass:map';"
        }
      }
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  };
});
