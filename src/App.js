/** @format */

import "./App.css";
import { ChatEngine } from "react-chat-engine";
function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="4d62209f-e762-4686-8176-192d1c0e2219"
        userName="john"
        userSecret="qwerty"
      />
    </div>
  );
}

export default App;
