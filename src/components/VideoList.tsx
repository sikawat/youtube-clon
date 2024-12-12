import React from "react";
import VideoCard from "./VideoCard";
import "./VideoList.css";

const VideoList: React.FC = () => {
  const videos = [
    {
      title: "มึงเอ๋ย - Room39",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "1.4M views",
      time: "3 days ago",
    },
    {
      title: "Vector 9: New Update!",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "2.7M views",
      time: "5 hours ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
    {
      title: "React Tutorial for Beginners",
      thumbnail: "https://shorturl.asia/Ydbz8",
      views: "500K views",
      time: "1 week ago",
    },
  ];

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          thumbnail={video.thumbnail}
          views={video.views}
          time={video.time}
        />
      ))}
    </div>
  );
};

export default VideoList;
