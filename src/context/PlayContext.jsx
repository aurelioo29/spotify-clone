import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayContext = createContext();

const PlayContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const plaWithID = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    // console.log(e);
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
        const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
        const totalSeconds = Math.floor(audioRef.current.duration % 60);
        const totalMinutes = Math.floor(audioRef.current.duration / 60);

        setTime({
          currentTime: {
            second: currentSeconds.toString().padStart(2, "0"),
            minute: currentMinutes.toString().padStart(2, "0"),
          },
          totalTime: {
            second: totalSeconds.toString().padStart(2, "0"),
            minute: totalMinutes.toString().padStart(2, "0"),
          },
        });
      };
    }, 1000);
  });

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    plaWithID,
    next,
    previous,
    seekSong,
  };

  return (
    <PlayContext.Provider value={contextValue}>
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayContextProvider;
