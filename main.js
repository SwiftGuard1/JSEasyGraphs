import { DOMGraphics } from "./graphics.js";
import { AnimationController, KeyframeFormat } from "./animation.js";
import { LocalManager } from "./storageManager.js";
import { Audio2D } from "./audio.js";
import { ServerStorageRequest } from "./api.js";

const Graphics = new DOMGraphics();
const Animations = new AnimationController();
const SSR = new ServerStorageRequest();

Graphics.generateDebugTool()

Graphics.setDrawColor("red");
Graphics.setDebug(true);

let text = Graphics.createText();

let rectangle = Graphics.createRect("50px", "75px", "100px", "100px");

let circle = Graphics.createCircle("100px", "200px", "200px");

let oval2 = Graphics.createOval("50px", "100px", "400px", "400px");
let oval3 = Graphics.createOval("50px", "100px", "400px", "400px");

Graphics.setDrawColor("green");

let triangle = Graphics.createTriangle("60px", "100px", "300px", "300px");

let oval = Graphics.createOval("100px", "50px", "400px", "400px", 100);

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
  { location: "100%", property: "background-color", value: "red" }
);

circle = Graphics.makeDraggable(circle);
oval = Graphics.makeDraggable(oval);
oval2 = Graphics.makeDraggable(oval2);
oval3 = Graphics.makeDraggable(oval3);
rectangle = Graphics.makeDraggable(rectangle);

//LightSystem.applyLightSource(triangle, { red: 255, green: 239, blue: 0 }, 0.75, 25, "500px", 75);

Graphics.insertGraphic(text);
Graphics.insertGraphic(rectangle);
Graphics.insertGraphic(circle);
Graphics.insertGraphic(triangle);
Graphics.insertGraphic(oval);
Graphics.insertGraphic(oval2);
Graphics.insertGraphic(oval3);