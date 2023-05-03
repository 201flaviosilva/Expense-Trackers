<script>
  import moment from "moment";
  import { ListGroupItem } from "sveltestrap";

  export let title = "";
  export let amount = 0;
  export let date = new Date();

  function getColor() {
    if (amount < 0) return "danger";
    else if (amount > 0) return "success";
    else return "dark";
  }
</script>

<ListGroupItem color={getColor()}>
  {title} - {amount}€ - {moment(date).format("DD/MM/YYYY")}
</ListGroupItem>
