// import React from "react";

import { useContext } from "react";
import { PlayContext } from "../context/PlayContext";

const SongItem = ({ name, image, desc, id }) => {
  const { plaWithID } = useContext(PlayContext);

  return (
    <div
      onClick={() => plaWithID(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
