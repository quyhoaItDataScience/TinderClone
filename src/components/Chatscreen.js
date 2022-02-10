import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chatscreen.css";

const Chatscreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Đồ",
      image:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/51342211_113073456485322_1081988607884918784_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=a2yc20tO0uIAX_vlIIx&tn=c9AdnKUE24UeXxr-&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT-mkCaG04_9e8c2O_3UxR2w5TqcVS2rMYQe5YTkF8omzg&oe=62281996",
      message: "hello",
    },
    {
      name: "Đồ",
      image:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/51342211_113073456485322_1081988607884918784_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=a2yc20tO0uIAX_vlIIx&tn=c9AdnKUE24UeXxr-&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT-mkCaG04_9e8c2O_3UxR2w5TqcVS2rMYQe5YTkF8omzg&oe=62281996",
      message: "Haha",
    },
    {
      message: "Quý Hòa đẹp trai nhưng ko bede, Ok chưa ? ",
    },
    {
      name: "Đồ",
      image:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/51342211_113073456485322_1081988607884918784_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=a2yc20tO0uIAX_vlIIx&tn=c9AdnKUE24UeXxr-&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT-mkCaG04_9e8c2O_3UxR2w5TqcVS2rMYQe5YTkF8omzg&oe=62281996",
      message: "Hic",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { message: input }]);
    }
    setInput("");
  };

  return (
    <div className="chatScreen">
      <h2 style={{ marginTop: "5px" }}>Nhắn tin làm quen thôi</h2>
      <p className="chatScreen__match">You matched with Đồ on 10/02/2022</p>
      {messages.map((message) => {
        return message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen__avatar"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__matcher">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen__messageUser">{message.message}</p>
          </div>
        );
      })}
      <div className="chatScreen__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type a message..."
          />
          <button onClick={handleSend} type="submit">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatscreen;
