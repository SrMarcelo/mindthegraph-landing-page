import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import Lato from "./assets/Lato.ttf";

import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  // default font lato
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          src: local('Lato'), url(${Lato}) format('truetype');
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
