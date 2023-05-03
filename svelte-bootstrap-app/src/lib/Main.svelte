<script>
  import { ListGroup } from "sveltestrap";
  import Transaction from "./Transaction.svelte";

  const transactionsList = [
    { title: "Beep", amount: 0, date: new Date() },
    { title: "Boop", amount: -10, date: new Date() },
    { title: "Beop", amount: 10, date: new Date() },
  ];
</script>

<main>
  <ListGroup>
    {#each transactionsList as transaction}
      <Transaction
        title={transaction.title}
        amount={transaction.amount}
        date={transaction.date}
      />
    {/each}
  </ListGroup>
</main>

<style lang="scss">
  main {
    flex: 1;
  }
</style>
