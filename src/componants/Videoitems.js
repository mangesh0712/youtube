import React from "react";
import "./css/VideoItems.css";
import { Image } from "semantic-ui-react";

const Videoitems = ({ video, onvideoselect }) => {
  return (
    <div onClick={() => onvideoselect(video)} className="item video-item">
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        size="small"
      />
      <div className="content">
        <div id="header">{video.snippet.title.slice(0, 30)}</div>
      </div>
    </div>
  );
};
export default Videoitems;
