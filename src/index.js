import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { IntlProvider } from "react-intl"
import { enUS } from "./assets/i18nMessages/en-US"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({
  typography: {
    fontFamily: "QS-Regular",
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: "#707070",
        fontSize: 14,
      },
    },
    MuiInput: {
      root: {
        color: "#000000",
        fontWeight: "bold",
        padding: "8px 0 8px 20px",
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: "translate(0, 1.5px) scale(0.95)",
      },
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <IntlProvider locale="en-US" defaultLocale={"en-US"} messages={enUS}>
        <App />
      </IntlProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
