import logo from "./logo.svg";
import "./App.css";
import "./normal.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    console.log("submit");
    setInput("");
  }
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <ChatMessage message={message} />
          <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt"></div>
              <div className="message">I am an AI</div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="chat-message-center">
        <div className="avatar"></div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};
export default App;
