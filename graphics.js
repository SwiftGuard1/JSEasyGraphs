var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

function generate() {
  // The function doesn't need to "return" anything. It just needs
  // to set the value of the text field to the random name.
  let result = nameList[Math.floor(Math.random() * nameList.length)];
  let result2 = nameList[Math.floor(Math.random() * nameList.length)];
  return result + result2;
}

function dragElement(elmnt) {
  var newElem = elmnt
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  newElem.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    newElem.style.top = (newElem.offsetTop - pos2) + "px";
    newElem.style.left = (newElem.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return newElem
}

export class DOMGraphics {
  #color = "black";

  setDrawColor(color) {
    this.#color = color;
  }

  createText(text = "Hello World!", x, y, layer) {
    let elem = document.createElement("label");
    elem.innerHTML = text;
    elem.style.color = this.#color;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    elem.style.zIndex = layer;
    elem.id = generate();
    return elem;
  }

  createRect(width, height, x, y, layer) {
    let elem = document.createElement("div");
    elem.style.backgroundColor = this.#color;
    elem.style.width = width;
    elem.style.height = height;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    elem.style.zIndex = layer;
    elem.id = generate();
    return elem;
  }

  createSquare(length, x, y, layer) {
    let elem = document.createElement("div");
    elem.style.backgroundColor = this.#color;
    elem.style.width = length;
    elem.style.height = length;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    elem.style.zIndex = layer;
    elem.id = generate();
    return elem;
  }

  createCircle(diameter, x, y, layer) {
    let elem = document.createElement("div");
    elem.style.backgroundColor = this.#color;
    elem.style.width = diameter;
    elem.style.height = diameter;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    elem.style.borderRadius = `calc(${diameter}/2)`;
    elem.style.zIndex = layer;
    elem.id = generate();
    return elem;
  }

  createTriangle(width, height, x, y, layer) {
    let elem = document.createElement("div");
    elem.style.width = 0;
    elem.style.height = 0;
    elem.style.borderLeft = `${width} solid transparent`;
    elem.style.borderRight = `${width} solid transparent`;
    elem.style.borderBottom = `${height} solid ${this.#color}`;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    elem.style.zIndex = layer;
    elem.id = generate();
    return elem;
  }

  createOval(width, height, x, y, layer) {
    let elem = document.createElement("div");
    elem.style.width = width;
    elem.style.height = height;
    elem.style.backgroundColor = this.#color;
    elem.style.borderRadius = "50%";
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    elem.style.zIndex = layer;
    elem.id = generate();
    return elem;
  }

  makeDraggable(element) {
    return dragElement(element);
  }

  insertGraphic(element) {
    document.body.appendChild(element);
  }
}
