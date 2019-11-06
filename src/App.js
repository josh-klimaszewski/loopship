import React from "react";
import ToneInjector from "./ToneInjector";
import Sequencer from "./Sequencer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <ToneInjector>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return <Sequencer player={player} />;
      }}
    </ToneInjector>
  );
}

export default App;
