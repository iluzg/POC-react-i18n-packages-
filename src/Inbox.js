import { Plural, Trans } from "@lingui/macro";
import React from "react";

export default function Inbox() {
  const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();
  const markAsRead = () => {
    alert("Marked as read.");
  };

  return (
    <div>
      <h1>
        <Trans>Message Inbox </Trans>
      </h1>

      <p>
        <Trans id="inbox.title">
          See all <a href="/unread">unread messages</a>
          {" or "}
          <a onClick={markAsRead}>mark them</a> as read.
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

      <footer>Last login on {lastLogin.toLocaleDateString()}.</footer>
    </div>
  );
}
