<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
</script>

<main class="font-sans text-center p-4 my-0 mx-auto">
  <img class="h-64 w-64 my-0 mx-auto" src={logo} alt="Svelte Logo" />
  <h1 class="text-[#ff3e00] uppercase text-6xl font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-none">Hello Typescript!</h1>

  <Counter />

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-snug">
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-snug">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>
