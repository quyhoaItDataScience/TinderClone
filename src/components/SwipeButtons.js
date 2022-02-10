import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton swipeButton__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton swipeButton__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton swipeButton__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon
          fontSize="large"
          className="swipeButton swipeButton__favorite"
        />
      </IconButton>
      <IconButton>
        <FlashOnIcon
          fontSize="large"
          className="swipeButton swipeButton__flash"
        />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
