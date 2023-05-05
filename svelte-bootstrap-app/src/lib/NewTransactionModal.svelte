<script>
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "sveltestrap";

  export let isOpen = false;
  export let toggle;

  function create() {
    toggle();
  }
</script>

<Modal {isOpen} {toggle}>
  <ModalHeader {toggle}>Create a new Transaction</ModalHeader>

  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </ModalBody>

  <ModalFooter>
    <Button color="success" on:click={create}>Create</Button>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
  </ModalFooter>
</Modal>

<style lang="scss">
</style>
