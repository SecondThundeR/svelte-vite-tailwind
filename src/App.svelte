<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div class="flex gap-4 justify-center">
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style lang="postcss">
  .logo {
    @apply h-36 p-[1.5em] will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa];
  }
  .logo.svelte:hover {
    @apply drop-shadow-[0_0_2em_#ff3e00aa];
  }
  .read-the-docs {
    @apply text-[#888];
  }
</style>
