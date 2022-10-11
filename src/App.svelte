<script lang="ts">
    import logo from './assets/svelte.png';
    import Counter from './lib/Counter.svelte';
</script>

<main>
    <img src={logo} alt="Svelte Logo" />
    <h1>Hello Typescript!</h1>

    <Counter />

    <p>
        Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
    </p>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for the officially supported framework,
        also powered by Vite!
    </p>
</main>

<style lang="postcss">
    main {
        @apply flex flex-col items-center justify-center font-sans text-center p-4 h-screen mx-auto;
    }

    img {
        @apply h-64 w-64 my-0 mx-auto;
    }

    h1 {
        @apply text-[#ff3e00] uppercase text-6xl font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-none;
    }

    p {
        @apply max-w-xs sm:max-w-none my-4 mx-auto leading-snug;
    }
</style>
