<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="py-4 px-8 text-[#ff3e00] bg-[#ff3e001a] active:bg-[#ff3e0033] rounded-full border-2 border-solid border-[#ff3e0000] focus:border-[#ff3e00] outline-none w-52 tabular-nums cursor-pointer" on:click={increment}>
  Clicks: {count}
</button>
