import { useState, useEffect } from "react";
import Tone from "tone";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const player = new Tone.Players(
      {
        BD: "/sounds/Kick/Kick 001 Basic.wav",
        CP: "/sounds/Snares & Claps/Clap 001.wav",
        OH: "/sounds/Hats & Cymbals/HiHat Open 001.wav",
        CH: "/sounds/Hats & Cymbals/HiHat Closed 001 Widened.wav"
      },
      () => {
        console.log("buffers loaded", {player});
        setPlayer(player);
      }
    ).toMaster();
  }, []);

  return children({ player });
};

export default PlayerProvider;
