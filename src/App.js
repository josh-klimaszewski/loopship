import React from "react";
import ToneInjector from "./ToneInjector";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <ToneInjector>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
        );
      }}
    </ToneInjector>
  );
}

export default App;
