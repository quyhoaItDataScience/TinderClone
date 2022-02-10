import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = ({ name, message, timestamp, profilePic }) => {
  return (
    <Link to="/chat/olla" style={{ textDecoration: "none" }}>
      <div className="chat">
        <div className="chat__avatar">
          <Avatar className="chat__image" alt={name} src={profilePic} />
          <div className="chat__info">
            <h2 className="chat__name">{name}</h2>
            <p className="chat__text">{message}</p>
          </div>
        </div>
        <div className="chat__time">
          <p className="chat__time__text">{timestamp}</p>
        </div>
      </div>
    </Link>
  );
};

export default Chat;
