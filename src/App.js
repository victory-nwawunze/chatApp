/** @format */

import "./App.css";
import chatFeed from "./components/chatFeed";
import { ChatEngine, ChatFeed } from "react-chat-engine";
function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="4d62209f-e762-4686-8176-192d1c0e2219"
        userName="victor"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
