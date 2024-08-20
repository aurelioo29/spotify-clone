// import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import CardItem from "./CardItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <CardItem
              key={index}
              name={items.name}
              desc={items.desc}
              id={items.id}
              image={items.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today`s biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((items, index) => (
            <SongItem
              key={index}
              name={items.name}
              desc={items.desc}
              id={items.id}
              image={items.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
