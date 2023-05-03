<script>
  import moment from "moment";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BsTrash from "svelte-icons-pack/bs/BsTrash";
  import { Button } from "sveltestrap";

  export let title = "";
  export let amount = 0;
  export let date = new Date();

  function getColor() {
    if (amount < 0) return "danger";
    else if (amount > 0) return "success";
    else return "dark";
  }
</script>

<tr>
  <th title="title">{title}</th>
  <th title="amount" class={`table-${getColor()}`}>{amount}€</th>
  <th title="date">{moment(date).format("DD/MM/YYYY")}</th>
  <th title="Delete">
    <Button color="danger" class="w-100">
      <Icon src={BsTrash} />
    </Button>
  </th>
</tr>
