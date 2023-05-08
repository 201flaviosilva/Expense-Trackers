<script>
  import {
    Button,
    ListGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "sveltestrap";
  import TransactionModalListItem from "./TransactionModalListItem.svelte";

  export let transactionsList;
  export let toggle;
  export let isOpen;
  export let removeAll;

  function confirmRemove() {
    removeAll();
    toggle();
  }
</script>

<Modal {isOpen} {toggle}>
  <ModalHeader {toggle}>Remove All Transactions?</ModalHeader>
  <ModalBody>
    <p>All {transactionsList.length} transactions will be removed!</p>

    <ListGroup numbered>
      {#each transactionsList as transaction}
        <TransactionModalListItem {transaction} />
      {/each}
    </ListGroup>
  </ModalBody>
  <ModalFooter>
    <Button color="danger" on:click={confirmRemove}>Remove</Button>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
  </ModalFooter>
</Modal>

<style lang="scss">
</style>
