import { ThemeProvider } from "styled-components";
import { colors } from "./themes";
import { PropTypes } from "prop-types";
import MuiTheme from "./MUI";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors }}>
      <MuiTheme>{children}</MuiTheme>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
