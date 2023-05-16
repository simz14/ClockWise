import SideBar from "./SideBar/SideBar";
import { PropTypes } from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
