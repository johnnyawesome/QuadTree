/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

//All dots
let dots = [];
//How many total dots are created
const totalNumberOfDots = 100;
//The size of one dot
const dotSize = 4;

function setup() {
  angleMode(DEGREES);
  createCanvas(650, 650, P2D);
  noFill();
  background(0);

  // ### Initial Quad-Tree ###
  //Generate all dots
  for (let i = 0; i < totalNumberOfDots; i++) dots.push(new Dot());
  //Display all Dots
  displayDots();
  //Builds the Quad-Tree
  buildQuadTree();
  // ### End Initial Quad-Tree ###
}

// ### Interactive Quad-Tree ###  
function mousePressed() {

  background(0);

  //Reset the dots
  if (dots.length >= totalNumberOfDots) dots = [];

  //Generate new Dots
  dots.push(new Dot(mouseX, mouseY));

  //Builds the Quad-Tree
  buildQuadTree();

  //Display all Dots
  displayDots();
}

function draw() {
}

