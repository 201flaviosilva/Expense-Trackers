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
          value={title}
          on:input={(e) => (title = e.target.value)}
        />
      </FormGroup>

      <FormGroup floating label="Transaction Amount" class="text-black">
        <Input
          type="number"
          color="dark"
          placeholder="Transaction Amount"
          value={amount}
          on:input={(e) => (amount = e.target.value)}
        />
      </FormGroup>

      <FormGroup floating label="Transaction Date" class="text-black">
        <Input
          type="date"
          color="dark"
          placeholder="Transaction Date"
          value={date}
          on:input={(e) => (date = e.target.value)}
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
