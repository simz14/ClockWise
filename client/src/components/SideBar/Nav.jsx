import { styled } from "styled-components";
import Panel from "./Panel";
import SideBar from "./SideBar";

const StyledNav = styled.nav`
  display: flex;
`;

const Nav = () => {
  return (
    <StyledNav>
      <Panel />
      <SideBar />
    </StyledNav>
  );
};

export default Nav;
