import { DOMGraphics } from "./graphics.js";
import { AnimationController, KeyframeFormat } from "./animation.js";

const Graphics = new DOMGraphics();
const Animation = new AnimationController();

Graphics.setDrawColor("blue")

let partyHat = Graphics.createTriangle("75px", "100px", "850px", "175px");

Graphics.setDrawColor("tan");

let oval = Graphics.createOval("250px", "400px", "800px", "250px");

oval = Animation.applyAnimation(
  oval,
  { duration: "1.5s", easingStyle: "ease-in-out", loopTimes: "infinite" },
  { location: "0%", property: "top", value: "250px" },
  { location: "25%", property: "top", value: "350px" },
  { location: "50%", property: "top", value: "250px" },
  { location: "75%", property: "top", value: "150px" },
  { location: "100%", property: "top", value: "250px" }
);

partyHat = Animation.applyAnimation(
    partyHat,
    { duration: "1.5s", easingStyle: "ease-in-out", loopTimes: "infinite" },
    { location: "0%", property: "top", value: "200px" },
    { location: "25%", property: "top", value: "300px" },
    { location: "50%", property: "top", value: "200px" },
    { location: "75%", property: "top", value: "100px" },
    { location: "100%", property: "top", value: "200px" }
  );

Graphics.insertGraphic(oval);
Graphics.insertGraphic(partyHat);