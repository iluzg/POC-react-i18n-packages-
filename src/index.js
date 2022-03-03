import { i18n } from "@lingui/core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

export async function loadMessages(locale) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export function LocalizedApp() {
  const [catalogs, setCatalogs] = useState({});
  const [language, setLanguage] = useState("cs");

  useEffect(() => {
    loadMessages(language);
  }, []);

  useEffect(() => {
    loadMessages(language);
  }, [language]);

  async function handleLanguageChange(language) {
    const newCatalog = await loadMessages(language);

    const newCatalogs = { ...catalogs, [language]: newCatalog };

    setCatalogs(newCatalogs);
    setLanguage(language);
  }
  return { language, handleLanguageChange };
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
