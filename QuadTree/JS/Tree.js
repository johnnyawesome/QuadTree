//Recursive function to build the quad-tree
function buildQuadTree(rectX = 0, rectY = 0, rectSize = width) {

  //Base-Case
  if (rectSize < 3) return;

  const dotsInsideRect = dots.filter(d => d.x > rectX && d.x < rectX + rectSize && d.y > rectY && d.y < rectY + rectSize);

  if (dotsInsideRect.length) {

    //Rectangles
    //Color rectangles green
    stroke(0, 255, 0);
    //Upper left
    rect(rectX, rectY, rectSize / 2);
    //Upper right
    rect(rectX + rectSize / 2, rectY, rectSize / 2);
    //Bottom left
    rect(rectX, rectY + rectSize / 2, rectSize / 2);
    //Bottom right
    rect(rectX + rectSize / 2, rectY + rectSize / 2, rectSize / 2);

    //Repetition is human, recursion is divine...
    //Upper left
    buildQuadTree(rectX, rectY, rectSize / 2);
    //Upper right
    buildQuadTree(rectX + rectSize / 2, rectY, rectSize / 2);
    //Bottom left
    buildQuadTree(rectX, rectY + rectSize / 2, rectSize / 2);
    //Bottom right
    buildQuadTree(rectX + rectSize / 2, rectY + rectSize / 2, rectSize / 2);

  }
}