<script>
  import moment from "moment";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BsTrash from "svelte-icons-pack/bs/BsTrash";
  import { Button } from "sveltestrap";

  export let removeTransaction;
  export let transaction;

  function getColor() {
    if (transaction.amount < 0) return "danger";
    else if (transaction.amount > 0) return "success";
    else return "dark";
  }
</script>

<tr>
  <th title="title">{transaction.title}</th>
  <th title="amount" class={`table-${getColor()}`}>{transaction.amount}€</th>
  <th title="date">{moment(transaction.date).format("DD/MM/YYYY")}</th>
  <th title="Delete">
    <Button
      color="danger"
      class="w-100"
      on:click={() => removeTransaction(transaction.id)}
    >
      <Icon src={BsTrash} />
    </Button>
  </th>
</tr>
