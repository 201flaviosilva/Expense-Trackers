<script>
  import moment from "moment";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BsTrash from "svelte-icons-pack/bs/BsTrash";
  import { Button } from "sveltestrap";
  import { getColorByAmount } from "../utils";

  export let removeTransaction;
  export let transaction;
</script>

<tr>
  <th title="title">{transaction.title}</th>
  <th title="amount" class={`table-${getColorByAmount(transaction.amount)}`}
    >{transaction.amount}€</th
  >
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
