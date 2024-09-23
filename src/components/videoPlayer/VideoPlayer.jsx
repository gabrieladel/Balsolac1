import React from 'react';
import Video from "../../assets/images/Balsolac.mp4"
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video width="100%" height="auto" controls>
       
        <source src= {Video} type="video/mp4" />
     
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
