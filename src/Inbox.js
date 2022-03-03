import { defineMessage, Plural, t } from "@lingui/macro";
import { Trans } from "@lingui/react";
import React from "react";

const someConst = defineMessage({ id: "const", message: "some const" });

export default function Inbox({ onLanguageChange, language }) {
  const [count, setCount] = React.useState(0);
  const handleChange = (e) => {
    e.preventDefault();
    onLanguageChange(e.target.value);
  };
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          alert(t({ id: someConst.id }));
        }}
      >
        count
      </button>
      <div className="select">
        <select onChange={handleChange} value={language}>
          <option value="en">En</option>
          <option value="cs">Cs</option>
        </select>
      </div>
      <div>
        <Trans id="test">Just and id</Trans>
        <div>
          <Trans id={someConst.id} />
        </div>
      </div>
      <div></div>
      num of clicks:{" "}
      <Plural
        value={count}
        _0="There are no click"
        one="There's # of click"
        other="There are # clicks"
      />
    </div>
  );
}
