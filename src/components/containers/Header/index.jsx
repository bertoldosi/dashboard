import { ToggleBar } from "./components";

import { Container, MenuBar, MenuContent } from "./style";

function Header() {
  return (
    <Container>
      {/* <divontainerLogo} /> */}

      <MenuBar>
        <ToggleBar />
        <MenuContent />
      </MenuBar>
    </Container>
  );
}

export default Header;
