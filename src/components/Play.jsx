// import React from 'react'

import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayContext } from "../context/PlayContext";

const Play = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 mt-5">
      <div className="hidden lg:flex items-center gap-4 ml-5">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.author}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-500 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-gray-100 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img
          className="w-4 cursor-pointer mr-3"
          src={assets.play_icon}
          alt=""
        />
        <img className="w-4 mr-3 cursor-pointer" src={assets.mic_icon} alt="" />
        <img
          className="w-4 mr-3 cursor-pointer"
          src={assets.queue_icon}
          alt=""
        />
        <img
          className="w-4 mr-3 cursor-pointer"
          src={assets.speaker_icon}
          alt=""
        />
        <img
          className="w-4 mr-3 cursor-pointer"
          src={assets.volume_icon}
          alt=""
        />
        <div className="w-20 bg-slate-50 h-1 rounded mr-3 cursor-pointer"></div>
        <img
          className="w-4 mr-3 cursor-pointer"
          src={assets.mini_player_icon}
          alt=""
        />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Play;
