import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { LocalizedApp } from ".";
import "./App.css";
import Inbox from "./Inbox";
function App() {
  const { language, handleLanguageChange } = LocalizedApp();
  return (
    <div className="App">
      <I18nProvider i18n={i18n}>
        <Inbox onLanguageChange={handleLanguageChange} language={language} />
      </I18nProvider>
    </div>
  );
}

export default App;
