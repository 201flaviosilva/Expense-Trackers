<script>
  import { Table } from "sveltestrap";
  import Transaction from "./Transaction.svelte";

  const transactionsList = [
    { title: "Beep", amount: 0, date: new Date() },
    { title: "Boop", amount: -10, date: new Date() },
    { title: "Beop", amount: 10, date: new Date() },
    { title: "asdsfsafasdasdasdasda", amount: -100, date: new Date() },
  ];
</script>

<main>
  <Table responsive bordered dark hover striped>
    <thead>
      <tr>
        <th>Title</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {#each transactionsList as transaction}
        <Transaction
          title={transaction.title}
          amount={transaction.amount}
          date={transaction.date}
        />
      {/each}
    </tbody>
  </Table>
</main>

<style lang="scss">
  main {
    flex: 1;
  }
</style>
