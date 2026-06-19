import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

function githubPagesBase() {
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];

  if (!process.env.GITHUB_ACTIONS || !repository) {
    return '/';
  }

  return repository.endsWith('.github.io') ? '/' : `/${repository}/`;
}

export default defineConfig({
  base: githubPagesBase(),
  plugins: [svelte()]
});
