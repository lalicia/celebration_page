import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [exploded, setExploded] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <div className={!exploded ? "container-dark" : "container-light"}>
      {!exploded ? (
        <button className="button" onClick={() => setExploded(true)}>
          Click me if you've run your last Saturday server patching...
        </button>
      ) : (
        <>
          <Confetti
            width={width}
            height={height}
            numberOfPieces={300}
            gravity={0.03}
            wind={0.005}
            opacity={0.7}
            initialVelocityX={-4}
          />
          <h1 className="message">
            <p>🥳</p>
            Woo hoo!
            <br />
            Congratulations, muppet!
          </h1>
        </>
      )}
    </div>
  );
}

export default App;

// THIS IS A PALE VERSION THAT SPRINGS FROM CENTRE OF SCREEN

// <Confetti
//       width={width}
//       height={height}
//       numberOfPieces={300}
//       confettiSource={{
//         w: 10,
//         h: 10,
//         x: width / 2,
//         y: height / 2,
//       }}
//       opacity={0.5}
//       initialVelocityX={8}
//       gravity={0.015}
//     />
