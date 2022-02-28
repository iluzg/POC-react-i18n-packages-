import { Plural, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import React from "react";

export default function Inbox() {
  const messages = [{}, {}];
  const { i18n } = useLingui();

  const messagesCount = messages.length;
  const lastLogin = new Date();
  const markAsRead = () => {
    alert("Marked as read.");
  };

  return (
    <div>
      <div>
        <button onClick={() => i18n.activate("en")}>Eg</button>
        <button onClick={() => i18n.activate("cs")}>cs</button>
      </div>

      <h1>
        <Trans>Message Inbox </Trans>
      </h1>

      <p>
        <Trans id="inbox.title">
          See all <a href="/unread">unread messages</a>
          <span> or </span>
          123<a onClick={markAsRead}>mark them</a> as read.
        </Trans>
      </p>

      <p>
        <Plural
          id="inbox.messagesCount"
          value={messagesCount}
          _0="There are no messages"
          one="There's # message in your inbox"
          other="There are # messages in your inbox"
        ></Plural>
      </p>

      <footer>
        Last <Trans id={"entity.name"} /> on {i18n.date(lastLogin)} .
      </footer>
    </div>
  );
}
