<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlinePlus from "svelte-icons-pack/ai/AiOutlinePlus";
  import FaSolidBomb from "svelte-icons-pack/fa/FaSolidBomb";
  import { Button } from "sveltestrap";
  import History from "./History.svelte";
  import NewTransactionModal from "./NewTransactionModal.svelte";

  export let searchTransaction;

  // Get data from local storage
  const LOCAL_NAME_SPACE = "Svelte-Bootstrap-App-Expense-Tracker";
  const localTransactions =
    JSON.parse(localStorage.getItem(LOCAL_NAME_SPACE)) || [];

  // Type: {id: number, title: string, amount: number, date: Date}
  let transactionsList = localTransactions;

  // Update local storage
  $: {
    localStorage.setItem(LOCAL_NAME_SPACE, JSON.stringify(transactionsList));
  }

  // New Transaction Modal
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
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
</script>

<main>
  <!-- List all Transactions -->
  <History {searchTransaction} {transactionsList} {removeTransaction} />

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

<NewTransactionModal {isOpen} {toggle} {newTransaction} />

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
