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

  let isNavOpen = false;

  function toggleNavbar(event) {
    isNavOpen = event.detail.isOpen;
  }

  let searchTitle = "beep";
  function handleChangeSearchTitle(e) {
    searchTitle = e.target.value;
  }
</script>

<header>
  <Navbar color="dark" dark expand="sm">
    <NavbarBrand href="/">Expense Tracker Svelte Bootstrap App</NavbarBrand>
    <NavbarToggler on:click={() => (isNavOpen = !isNavOpen)} />

    <Collapse isOpen={isNavOpen} navbar expand="sm" on:update={toggleNavbar}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <Form>
            <FormGroup>
              <Input
                color="dark"
                placeholder="Search for a transaction"
                value={searchTitle}
                on:input={handleChangeSearchTitle}
              />
            </FormGroup>
          </Form>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</header>

<style lang="scss">
  li {
    &.nav-item {
      align-items: center;
      justify-content: center;
    }
  }
</style>
