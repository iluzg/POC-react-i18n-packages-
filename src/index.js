import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { cs, en } from "make-plural/plurals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { messages as csMessages } from "./locales/cs/messages";
import { messages as enMessages } from "./locales/en/messages";
import reportWebVitals from "./reportWebVitals";

i18n.load({
  en: enMessages,
  cs: csMessages,
});
i18n.activate("cs");

i18n.loadLocaleData({
  en: { plurals: en },
  cs: { plurals: cs },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
