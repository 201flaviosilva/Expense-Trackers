<script>
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  let searchTransaction = "";
</script>

<Header bind:searchTransaction />
<Main />
<Footer />

<style lang="scss">
</style>
