<script>
  import { ListGroupItem, Tooltip } from "sveltestrap";
  import { getColorByAmount } from "../utils";

  export let transaction;
  let HtmlElementRef;
</script>

<div bind:this={HtmlElementRef}>
  <ListGroupItem color={getColorByAmount(transaction.amount)}>
    {transaction.title}
  </ListGroupItem>
</div>

<Tooltip target={HtmlElementRef} placement="top">
  <span>Title: {transaction.title}</span>
  <br />
  <span>Amount: {transaction.amount}</span>
  <br />
  <span>
    Date: <time datetime={transaction.date}>{transaction.date}</time>
  </span>
</Tooltip>
