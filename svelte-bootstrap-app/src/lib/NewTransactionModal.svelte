<script>
  import moment from "moment";
  import {
    Button,
    Form,
    FormGroup,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "sveltestrap";

  export let isOpen = false;
  export let toggle;
  export let newTransaction;

  let title = "";
  let amount = 0;
  let date = moment(new Date()).format("YYYY-MM-DD");

  function create() {
    newTransaction(title || "No Title", Number(amount) || 0, date);
    toggle();
  }
</script>

<Modal {isOpen} {toggle}>
  <ModalHeader {toggle}>Create a new Transaction</ModalHeader>

  <ModalBody>
    <Form
      on:submit={(e) => {
        e.preventDefault();
        create();
      }}
    >
      <FormGroup floating label="Transaction Title" class="text-black">
        <Input
          color="dark"
          placeholder="Transaction Title"
          bind:value={title}
        />
      </FormGroup>

      <FormGroup floating label="Transaction Amount" class="text-black">
        <Input
          type="number"
          color="dark"
          placeholder="Transaction Amount"
          bind:value={amount}
        />
      </FormGroup>

      <FormGroup floating label="Transaction Date" class="text-black">
        <Input
          type="date"
          color="dark"
          placeholder="Transaction Date"
          bind:value={date}
        />
      </FormGroup>
    </Form>
  </ModalBody>

  <ModalFooter>
    <Button color="success" on:click={create}>Create</Button>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
  </ModalFooter>
</Modal>

<style lang="scss">
</style>
