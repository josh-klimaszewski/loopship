import React from "react";
import "./styles/App.css";

import { ToneInjector, Sequencer } from "./components";

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
