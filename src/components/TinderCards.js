import React, { useEffect } from "react";
import { useState } from "react";

import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Lê Hoài Phong(Anh là superman, sẽ che chở cho em suốt đời)",
      url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/258648995_1266673327141464_8057637662861967829_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Au9sf2UqLToAX8RxD2A&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLtIiblfUdGPVf_9WYdi7LZYchI2S-OirxfZBprXKppQA&oe=6228C898",
    },
    {
      name: "Huỳnh Vĩnh Đồ(Hong bé ơi)",
      url: "https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/51342211_113073456485322_1081988607884918784_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=a2yc20tO0uIAX_vlIIx&tn=c9AdnKUE24UeXxr-&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT-mkCaG04_9e8c2O_3UxR2w5TqcVS2rMYQe5YTkF8omzg&oe=62281996",
    },
    {
      name: "Quý Hòa(Anh có võ hk, anh có lông đại bàng nhưng chưa có nàng công chúa",
      url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/273066191_350078733604280_7058811148237464472_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=hOGCUAfEbKEAX8mOoBN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKV2VUZdK3vb9YAapCnPOyewCmzVsxMuRwjT7KzjTavpg&oe=622C7E07",
    },
    {
      name: "Lê Vạn An(Những thằng khác ngại tán em, tại ngán anh)",
      url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/273460072_638122180725222_383164442742730003_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=H3odMM6mY_oAX-lGsn6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJWzHiWPiiElZj44oFwmUBGLfoS0KtVUy0nI9lGerxt2w&oe=622BAF41",
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
