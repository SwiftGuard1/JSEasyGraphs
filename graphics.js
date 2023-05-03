export class DOMGraphics {
  #color = "black";

  setDrawColor(color) {
    this.#color = color;
  }

  createText(text = "Hello World!") {
    let elem = document.createElement("label");
    elem.innerHTML = text;
    elem.style.color = this.#color;
    return elem;
  }

  createRect(width, height, x, y) {
    let elem = document.createElement("div");
    elem.style.backgroundColor = this.#color;
    elem.style.width = width;
    elem.style.height = height;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    return elem;
  }

  createSquare(length, x, y) {
    let elem = document.createElement("div");
    elem.style.backgroundColor = this.#color;
    elem.style.width = length;
    elem.style.height = length;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    return elem;
  }

  createCircle(diameter, x, y) {
    let elem = document.createElement("div");
    elem.style.backgroundColor = this.#color;
    elem.style.width = diameter;
    elem.style.height = diameter;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    elem.style.borderRadius = `calc(${diameter}/2)`;
    return elem;
  }

  createTriangle(width, height, x, y) {
    let elem = document.createElement("div");
    elem.style.width = 0;
    elem.style.height = 0;
    elem.style.borderLeft = `${width} solid transparent`;
    elem.style.borderRight = `${width} solid transparent`;
    elem.style.borderBottom = `${height} solid ${this.#color}`;
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    return elem;
  }

  createOval(width, height, x, y) {
    let elem = document.createElement("div");
    elem.style.width = width;
    elem.style.height = height;
    elem.style.backgroundColor = this.#color;
    elem.style.borderRadius = "50%";
    elem.style.position = "absolute";
    elem.style.left = x;
    elem.style.top = y;
    return elem;
  }
  
  makeDraggable(element) {
    let newElem = element
    newElem.draggable = true;
    return newElem
  }

  insertGraphic(element) {
    document.body.appendChild(element);
  }
}
