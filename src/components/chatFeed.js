/** @format */
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
const chatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const renderMessage = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage /> : <TheirMessage />}
          </div>
        </div>
      );
    });
  };
  return <div>chatFeed</div>;
};
export default chatFeed;
