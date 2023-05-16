import { ThemeProvider } from "styled-components";
import { colors } from "./themes";
import { PropTypes } from "prop-types";

const Theme = ({ children }) => {
  return <ThemeProvider theme={{ colors }}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
