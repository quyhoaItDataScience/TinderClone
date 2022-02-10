import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const Header = ({ backButton }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <Link>
          <IconButton>
            <ArrowBackIosNewRounded className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      ) : (
        <Link to="/">
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      )}
      <Link to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
          alt="tinder logo"
          className="header__logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
