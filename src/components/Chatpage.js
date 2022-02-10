import React from "react";
import Chat from "./Chat";

const messages = [
  {
    name: "Phong",
    message: "hello",
    timestamp: "30 phút trước",
    profilePic:
      "https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/258486130_1362658844152243_5650145590205193805_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iQJVLqrkFYIAX_-GYaW&_nc_ht=scontent.fsgn12-1.fna&oh=00_AT_PHFCrbMqi2ZoH4z7xY7J6vETXRz5-ukk78t5xi9X-RA&oe=62092CA3",
  },
  {
    name: "Đồ",
    message: "hula",
    timestamp: "10 phút trước",
    profilePic:
      "https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/51342211_113073456485322_1081988607884918784_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=a2yc20tO0uIAX_vlIIx&tn=c9AdnKUE24UeXxr-&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT-mkCaG04_9e8c2O_3UxR2w5TqcVS2rMYQe5YTkF8omzg&oe=62281996",
  },
];

const Chatpage = () => {
  return (
    <div className="chats">
      {/* <Chat
        name="Phong"
        message="hello"
        timestamp="30 phút trước"
        profilePic="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/258486130_1362658844152243_5650145590205193805_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iQJVLqrkFYIAX_-GYaW&_nc_ht=scontent.fsgn12-1.fna&oh=00_AT_PHFCrbMqi2ZoH4z7xY7J6vETXRz5-ukk78t5xi9X-RA&oe=62092CA3"
      /> */}
      {messages.map((item) => {
        const { name, message, timestamp, profilePic } = item;
        return (
          <Chat
            key={name}
            name={name}
            message={message}
            timestamp={timestamp}
            profilePic={profilePic}
          />
        );
      })}
    </div>
  );
};

export default Chatpage;
