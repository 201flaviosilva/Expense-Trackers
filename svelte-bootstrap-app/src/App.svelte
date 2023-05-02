<script>
  import { Button } from "sveltestrap";
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
</script>

<main>
  <h1>Svelte Bootstrap Expense Tracker App</h1>
  {#each colors as color}
    <div>
      <Button {color}>{color}</Button>
    </div>
  {/each}
</main>

<style lang="scss">
</style>
