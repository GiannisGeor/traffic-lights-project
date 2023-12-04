import { useEffect, useState } from "react";
import "./App.css";

function StopLight({ initialState }) {
  const [state, setState] = useState(initialState ?? "stop");

  function getStopLightClass(light) {
    return `light ${light}` + (state === light ? " on" : "");
  }

  useEffect(() => {
    if (state === "stop") {
      setTimeout(() => setState("go"), 3000);
    } else if (state === "slow") {
      setTimeout(() => setState("stop"), 2000);
    } else {
      setTimeout(() => setState("slow"), 5000);
    }
  }, [state]);

  return (
    <div className="stop-light">
      <div className={getStopLightClass("stop")}></div>
      <div className={getStopLightClass("slow")}></div>
      <div className={getStopLightClass("go")}></div>
    </div>
  );
}

export default StopLight;
