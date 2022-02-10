import React, { useEffect } from "react";
import { useState } from "react";

import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Lê Hoài Phong",
      url: "https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/258486130_1362658844152243_5650145590205193805_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iQJVLqrkFYIAX_-GYaW&_nc_ht=scontent.fsgn12-1.fna&oh=00_AT_PHFCrbMqi2ZoH4z7xY7J6vETXRz5-ukk78t5xi9X-RA&oe=62092CA3",
    },
    {
      name: "Huỳnh Vĩnh Đồ(Hong bé ơi)",
      url: "https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/51342211_113073456485322_1081988607884918784_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=a2yc20tO0uIAX_vlIIx&tn=c9AdnKUE24UeXxr-&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT-mkCaG04_9e8c2O_3UxR2w5TqcVS2rMYQe5YTkF8omzg&oe=62281996",
    },
  ]);

  return (
    <div>
      <h1
        className="header__title"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FD297B, #FF5864, #FF655B)",
        }}
      >
        Chọn hàng đi ahihi
      </h1>
      <div className="tinderCards__cardContainer">
        {people.map((person, index) => {
          const { name, url } = person;
          return (
            <TinderCard
              key={index}
              className="swipe"
              preventSwipe={["up", "down"]}
            >
              <div style={{ backgroundImage: `url(${url})` }} className="card">
                <h3>{name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCards;
