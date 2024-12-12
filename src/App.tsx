import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoList from "./components/VideoList";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <div className="tab-menu">
            <a href="#" className="active">ทั้งหมด</a>
            <a href="#">เกม</a>
            <a href="#">เพลง</a>
            <a href="#">ข่าวสาร</a>
            <a href="#">พอดแคสต์</a>
            <a href="#">ไลฟ์สด</a>
            <a href="#">สตรีมสด</a>
            <a href="#">ภาพยนตร์</a>
          </div>
          <div className="video-list-container">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
