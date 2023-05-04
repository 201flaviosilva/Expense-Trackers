<script>
  import {
    Collapse,
    Form,
    FormGroup,
    Input,
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarToggler,
  } from "sveltestrap";

  export let searchTransaction;
  function handleChangeSearch(event) {
    searchTransaction = event.target.value;
  }

  let isNavOpen = false;
  function toggleNavbar(event) {
    isNavOpen = event.detail.isOpen;
  }
</script>

<header>
  <Navbar color="dark" dark expand="sm">
    <NavbarBrand href="/" class="text-wrap text-center"
      >Svelte Bootstrap - Expense Tracker App</NavbarBrand
    >
    <NavbarToggler on:click={() => (isNavOpen = !isNavOpen)} />

    <Collapse isOpen={isNavOpen} navbar expand="sm" on:update={toggleNavbar}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <Form on:submit={(e) => e.preventDefault()}>
            <FormGroup
              floating
              label="Search for a transaction"
              class="text-black"
            >
              <Input
                color="dark"
                placeholder="Search for a transaction"
                value={searchTransaction}
                on:input={handleChangeSearch}
              />
            </FormGroup>
          </Form>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</header>

<style lang="scss">
  header {
    width: 100vw;
  }
</style>
