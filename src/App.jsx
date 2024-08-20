import Sidebar from "./components/Sidebar";
import Play from "./components/Play";
import Display from "./components/Display";
import { useContext } from "react";
import { PlayContext } from "./context/PlayContext";

const App = () => {
  const { audioRef, track } = useContext(PlayContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <div>
        <Play />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  );
};

export default App;
