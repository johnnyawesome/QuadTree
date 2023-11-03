//The class of the dots
class Dot {

  constructor(_dotX = random(10, width - 10), _dotY = random(10, height - 10)) {
    this.x = _dotX;
    this.y = _dotY;
  }

  display() {
    push();
    stroke(255, 0, 0);
    strokeWeight(dotSize);
    point(this.x, this.y);
    pop();
  }
}

//Displays all Dots
function displayDots() {
  for (const dot of dots) dot.display();
}