<script>
  import BiLineChart from "svelte-icons-pack/bi/BiLineChart";
  import BiLineChartDown from "svelte-icons-pack/bi/BiLineChartDown";
  import FaSolidBalanceScale from "svelte-icons-pack/fa/FaSolidBalanceScale";
  import { Container, Row } from "sveltestrap";
  import { getColorByAmount } from "../utils";
  import BalanceCard from "./BalanceCard.svelte";

  export let transactionsList;
  let income = 0;
  let expense = 0;

  $: {
    income = transactionsList.reduce(
      (acc, cur) => (cur.amount > 0 ? acc + Number(cur.amount) : acc),
      0
    );
    expense = transactionsList.reduce(
      (acc, cur) => (cur.amount < 0 ? acc + Number(cur.amount) : acc),
      0
    );
  }
</script>

<Container class="mb-3">
  <Row>
    <BalanceCard
      color="success"
      title="Total Incomes"
      iconSrc={BiLineChart}
      amount={income}
    />

    <BalanceCard
      color={getColorByAmount(income + expense)}
      title="Total Balance"
      iconSrc={FaSolidBalanceScale}
      amount={income + expense}
    />

    <BalanceCard
      color="danger"
      title="Total Expenses"
      iconSrc={BiLineChartDown}
      amount={expense}
    />
  </Row>
</Container>

<style lang="scss">
  div {
    &.wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 8px;
    }
  }
</style>
