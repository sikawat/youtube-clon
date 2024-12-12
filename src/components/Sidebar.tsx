import React from "react";
import "./Sidebar.css";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import MovieIcon from "@mui/icons-material/Movie";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <a href="#">
        <HomeIcon className="icon"/> หน้าหลัก
      </a>
      <a href="#">
        <ExploreIcon className="icon"/> Shorts
      </a>
      <a href="#">
        <SubscriptionsIcon className="icon"/> การติดตาม
      </a>
      <a href="#">
        <VideoLibraryIcon className="icon"/> คลังวิดีโอ
      </a>
      <hr />
      <a href="#">
        <HistoryIcon className="icon"/> ประวัติการเข้าชม
      </a>
      <a href="#">
        <PlaylistPlayIcon className="icon"/> เพลย์ลิสต์
      </a>
      <a href="#">
        <WatchLaterIcon className="icon"/> ดูภายหลัง
      </a>
      <a href="#">
        <ThumbUpIcon className="icon"/> วิดีโอที่ชอบ
      </a>
      <hr />
      <a href="#">
        <MovieIcon className="icon"/> ภาพยนตร์
      </a>
      <hr />
      <div className="sidebar-footer">
        <p>เพิ่มใน YouTube</p>
        <p>YouTube Premium</p>
        <p>YouTube Music</p>
        <p>YouTube Kids</p>
      </div>
    </div>
  );
};

export default Sidebar;