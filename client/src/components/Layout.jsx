import { styled } from "styled-components";
import SideBar from "./SideBar/SideBar";
import { PropTypes } from "prop-types";

const LayoutWrapper = styled.div`
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <SideBar />
      {children}
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
