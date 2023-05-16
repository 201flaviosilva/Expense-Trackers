<script>
  import { Table } from "sveltestrap";
  import Transaction from "./Transaction.svelte";

  export let searchTransaction;
  export let transactionsList;
  export let removeTransaction;

  let filterByName = [];

  $: {
    filterByName = searchTransaction
      ? transactionsList.filter(({ title }) =>
          title.toUpperCase().includes(searchTransaction.toUpperCase())
        )
      : transactionsList;
  }
</script>

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
    {#each filterByName as transaction (transaction.id)}
      <Transaction {transaction} {removeTransaction} />
    {/each}
  </tbody>
</Table>
