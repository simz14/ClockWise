import { styled } from "styled-components";
import { PropTypes } from "prop-types";
import Nav from "./SideBar/Nav";

const LayoutWrapper = styled.div`
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Nav />
      {children}
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
