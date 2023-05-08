<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import {
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardTitle,
    Col,
  } from "sveltestrap";

  export let color = "";
  export let title = "";
  export let iconSrc = "";
  export let amount = 0;
</script>

<Col>
  <Card {color}>
    <CardHeader>
      <CardTitle>
        <span>{title}</span>
        <Icon color="white" src={iconSrc} />
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CardSubtitle class="text-center">{amount}€</CardSubtitle>
    </CardBody>
  </Card>
</Col>
