import { createTheme } from "@mui/material/styles";
import { PropTypes } from "prop-types";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "0,5rem",

          p: {
            margin: 0,
            padding: "10px",
            borderTop: "1px solid #f1f0f2",
            cursor: "pointer",
            transition: "0.2s ease",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
  },
});

const MuiTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MuiTheme.propTypes = {
  children: PropTypes.node,
};

export default MuiTheme;
