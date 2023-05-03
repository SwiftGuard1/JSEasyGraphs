import { DOMGraphics } from "./graphics.js";
import { AnimationController, KeyframeFormat } from "./animation.js";
import { LocalManager } from "./storageManager.js";

const Graphics = new DOMGraphics();
const Animations = new AnimationController();

Graphics.setDrawColor("red");

let text = Graphics.createText();

let rectangle = Graphics.createRect("100px", "100px", "100px", "100px");

let circle = Graphics.createCircle("100px", "200px", "200px");

Graphics.setDrawColor("green");

let triangle = Graphics.createTriangle("60px", "100px", "300px", "300px");

let oval = Graphics.createOval("100px", "50px", "400px", "400px");

oval = Animations.applyAnimation(
  oval,
  {
    duration: "2s",
    easingStyle: "ease-in-out",
    loopTimes: "infinite",
  },
  { location: "0%", property: "background-color", value: "red" },
  { location: "16.6666666667%", property: "background-color", value: "orange" },
  { location: "33.3333333334%", property: "background-color", value: "yellow" },
  { location: "50.0000000001%", property: "background-color", value: "green" },
  { location: "66.6666666668%", property: "background-color", value: "blue" },
  { location: "83.3333333335%", property: "background-color", value: "purple" },
  { location: "100%", property: "background-color", value: "red" },
);

circle = Graphics.makeDraggable(circle);
oval = Graphics.makeDraggable(oval);

Graphics.insertGraphic(text);
Graphics.insertGraphic(rectangle);
Graphics.insertGraphic(circle);
Graphics.insertGraphic(triangle);
Graphics.insertGraphic(oval);