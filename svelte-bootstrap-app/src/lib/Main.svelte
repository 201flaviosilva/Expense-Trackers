<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlinePlus from "svelte-icons-pack/ai/AiOutlinePlus";
  import FaSolidBomb from "svelte-icons-pack/fa/FaSolidBomb";
  import { Button, Table } from "sveltestrap";
  import NewTransactionModal from "./NewTransactionModal.svelte";
  import Transaction from "./Transaction.svelte";

  // Get data from local storage
  const LOCAL_NAME_SPACE = "Svelte-Bootstrap-App-Expense-Tracker";
  const localTransactions =
    JSON.parse(localStorage.getItem(LOCAL_NAME_SPACE)) || [];

  // Type: {id: string, title: string, amount: number, date: Date}
  const transactionsList = localTransactions;

  // Update local storage
  $: {
    localStorage.setItem(LOCAL_NAME_SPACE, JSON.stringify(transactionsList));
  }

  // New Task Modal
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<main>
  <!-- List all Transactions -->
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

  <!-- Action Buttons -->
  <div class="action-buttons">
    <Button
      color="primary"
      title="Add new Transaction"
      on:click={() => (isOpen = true)}
    >
      <Icon src={AiOutlinePlus} color="white" size="1.5em" />
    </Button>
    <Button color="danger" title="Remove All">
      <Icon src={FaSolidBomb} color="black" />
    </Button>
  </div>
</main>

<NewTransactionModal {isOpen} {toggle} />

<style lang="scss">
  main {
    flex: 1;

    .action-buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 4px;
    }
  }
</style>
