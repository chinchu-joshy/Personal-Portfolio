import { Typography } from "@mui/material";
import React from "react";
import "./YoutubeCard.css";
function YoutubeCard({
  url = "https://youtube.com/6packprogrammer",
  title = "sample",
  image,
}) {
  return (
    <div className="youtubecard">
      <a href={url} target="blank">
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
    </div>
  );
}

export default YoutubeCard;
