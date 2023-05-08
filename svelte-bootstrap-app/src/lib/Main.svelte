<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlinePlus from "svelte-icons-pack/ai/AiOutlinePlus";
  import FaSolidBomb from "svelte-icons-pack/fa/FaSolidBomb";
  import { Button } from "sveltestrap";
  import Balance from "./Balance.svelte";
  import History from "./History.svelte";
  import NewTransactionModal from "./NewTransactionModal.svelte";
  import RemoveAllModal from "./RemoveAllModal.svelte";

  export let searchTransaction;

  // Get data from local storage
  const LOCAL_NAME_SPACE = "Svelte-Bootstrap-App-Expense-Tracker";
  const localTransactions =
    JSON.parse(localStorage.getItem(LOCAL_NAME_SPACE)) || [];

  // Type: {id: number, title: string, amount: number, date: Date}
  let transactionsList = localTransactions;

  let isNewTransactionOpen = false;
  let isRemoveAllOpen = false;

  // Update local storage
  $: {
    localStorage.setItem(LOCAL_NAME_SPACE, JSON.stringify(transactionsList));
  }

  // Create new transaction
  function newTransaction(title, amount, date) {
    const newT = {
      id: Math.random(),
      title,
      amount,
      date,
    };
    transactionsList = [...transactionsList, newT];
  }

  // Remove Transaction
  function removeTransaction(id) {
    transactionsList = transactionsList.filter((t) => t.id !== id);
  }

  // Remove all
  function removeAll() {
    transactionsList = [];
  }
</script>

<main>
  <Balance {transactionsList} />

  <!-- List all Transactions -->
  <History {searchTransaction} {transactionsList} {removeTransaction} />

  <!-- Action Buttons -->
  <div class="action-buttons">
    <Button
      color="primary"
      title="Add new Transaction"
      on:click={() => (isNewTransactionOpen = true)}
    >
      <Icon src={AiOutlinePlus} color="white" size="1.5em" />
    </Button>

    {#if transactionsList.length}
      <Button
        color="danger"
        title="Remove All"
        on:click={() => (isRemoveAllOpen = true)}
      >
        <Icon src={FaSolidBomb} color="black" />
      </Button>
    {/if}
  </div>

  <NewTransactionModal
    isOpen={isNewTransactionOpen}
    toggle={() => (isNewTransactionOpen = !isNewTransactionOpen)}
    {newTransaction}
  />
  <RemoveAllModal
    {transactionsList}
    isOpen={isRemoveAllOpen}
    toggle={() => (isRemoveAllOpen = !isRemoveAllOpen)}
    {removeAll}
  />
</main>

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
