import React from "react";
import "./VideoCard.css";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  views: string;
  time: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, views, time }) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="thumbnail" />
      <div className="card-info">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
          alt="Channel Avatar"
          className="channel-avatar"
        />
        <div className="text-info">
          <h4>{title}</h4>
          <p>{views} • {time}</p>
          <p className="channel-name">Channel Name</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
