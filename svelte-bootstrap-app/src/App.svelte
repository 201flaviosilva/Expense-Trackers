<script>
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  let searchTransaction = "";
</script>

<div class="wrapper bg-black text-white">
  <Header bind:searchTransaction />
  <Main />
  <Footer />
</div>

<style lang="scss">
  div {
    &.wrapper {
      width: 100vw;
      height: 100vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-bottom: 16px;
    }
  }
</style>
