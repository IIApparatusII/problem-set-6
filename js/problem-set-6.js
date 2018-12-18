/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
ctx.font = '48px sans-serif';
ctx.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let canvas = document.getElementById('canvas2');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let height = prompt("Height:");
  let width = prompt("Width:");
  let x = prompt("X:");
  let y = prompt("Y:");
  let rect = 0;
  if (height < 1) {
    alert('Your height is too small.');
  }
  if (width < 1) {
    alert('Your width is too small.');
  }
  if (x < 5) {
    alert('Your x-coordinate is too small.');
  }
  if (y < 5) {
    alert('Your y-coordinate is too small.');
  }
  if (width > (1024-y) || height > (512-x)) {
    alert('The rectangle will not fit on the canvas.');

  }
  else {
  ctx.strokeRect(x, y, width, height);
}
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let canvas = document.getElementById('canvas3');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let color = prompt('Select a Color.');
  //color = String(color);
  if (color !== "black" && color !== "blue" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow"){
    alert(`${color} is not a supported color.`);
  }
  ctx.fillStyle = color;
  ctx.fillRect(10, 10, 100, 50);
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let canvas = document.getElementById('canvas4');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let sideOne = prompt('Side 1:');
  let sideTwo = prompt('Side 2:');
  let sideThree = prompt('Side 3:');
  if ((sideOne ** 2) + (sideTwo ** 2) !== (sideThree ** 2) && (sideOne ** 2) + (sideThree ** 2) !== (sideTwo ** 2) && (sideTwo ** 2) + (sideThree ** 2) !== (sideOne ** 2)){
    alert('That is not a valid right triangle.');
  }
 else {
   sideOne = Number(sideOne);
   sideTwo = Number(sideTwo);
   sideThree = Number(sideThree);

  let sideLeft = Math.min(sideOne, sideTwo, sideThree);
  let hypotenuse = Math.max(sideOne, sideTwo, sideThree);
  let sideBottom = sideOne + sideTwo + sideThree - sideLeft - hypotenuse;
  sideLeft = sideLeft + 10, sideBottom = sideBottom + 10;

//let p = document.getElementById('output4');
//p.innerHTML = (`Short Left side: ${sideLeft}, Bottom side: ${sideBottom}, hypotenuse: ${hypotenuse}`)

  ctx.beginPath();
     ctx.moveTo(10, 10);
     ctx.lineTo(10, sideLeft);
     ctx.lineTo(sideBottom, sideLeft);
//  ctx.lineTo(10, 10);
  ctx.closePath();
  ctx.stroke();
/*  ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.stroke();*/
 }
}
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let canvas = document.getElementById('canvas5');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let radius = prompt('Radius:');
  radius = Number(radius);
  if (radius > 256){
    alert('The smiley face will not fit on the canvas.')
  }
  if (radius <= 1){
    alert('Your radius is too small.')
  }
  if (radius % radius != 0){
    alert('Your input is not a number.')
}

let coordinate = 10 + radius;

  ctx.beginPath();
    ctx.arc(coordinate, coordinate, radius, 0, Math.PI * 2, true);
    ctx.moveTo((coordinate + (radius * 0.75)), coordinate);
    ctx.arc(coordinate, coordinate, (radius - (radius * 0.25)), 0, Math.PI, false);
    //ctx.moveTo((coordinate - (radius * 0.5)), (coordinate - (radius * 0.5)));
    //ctx.arc(radius, radius, (radius - (radius * 0.75)), 0, Math.PI * 2, true);
  ctx.stroke();



  ctx.beginPath();
    ctx.arc(coordinate - (radius * 0.35), coordinate - (radius * 0.5), (radius * 0.1), 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
    ctx.arc(coordinate + (radius * 0.35), coordinate - (radius * 0.5), (radius * 0.1), 0, Math.PI * 2);
  ctx.stroke();

/*Forgot to make moveTo and ctx.arc different lines. Change it.*/
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let canvas = document.getElementById('canvas6');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

 let oR = prompt("Enter the Outer Radius");
 let iR = prompt("Enter the Inner Radius");

 oR = Number(oR);
 iR = Number(iR);

if (isNaN(oR) == true || isNaN(iR) == true) {
  alert("One of your inputs is not a number.");
} else if (oR < 2) {
  alert("Your outer radius is too small.");
} else if (iR < 1) {
  alert("Your inner radius is too small.");
} else if (oR <= iR) {
  alert("Your outer radius must be larger than your inner radius.")
} else {
  ctx.beginPath();
  ctx.moveTo(125, 125 - oR);

  let x = 0;
  let angle = 0 * Math.PI;

  while (x < 5) {
    ctx.lineTo(Math.cos(1.3 * Math.PI - angle) * iR + 125, Math.sin(1.3 * Math.PI - angle) * iR + 125);
    ctx.lineTo(Math.cos(1.1 * Math.PI - angle) * oR + 125, Math.sin(1.1 * Math.PI - angle) * oR + 125);
    angle = angle + 0.4 * Math.PI;
    x = x + 1;
  }
  ctx.closePath();
  ctx.stroke();
  lineWidth = 1;
}
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById('canvas7');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  ctx.beginPath();
   ctx.moveTo(67, 10);
   ctx.lineTo(147, 10);
   ctx.lineTo(204, 67);
   ctx.lineTo(204, 147);
   ctx.lineTo(147, 204);
   ctx.lineTo(67, 204);
   ctx.lineTo(10, 147);
   ctx.lineTo(10, 67);
   ctx.lineTo(67, 10);
   ctx.fillStyle = `red`
  ctx.fill()
  ctx.stroke();

  ctx.font = "65px sans-serif";
  ctx.fillStyle = `white`;
  ctx.fillText(`STOP`, 20, 133);

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let length = Number(prompt("Please enter a side length."));
  let coordX = 10;
  let coordY = canvas.height-10;
  let i = 0;
  lineNumber = 1;
  while(i < 5){
    for(let j = 0 + lineNumber; j <= 5; j++){
      ctx.strokeRect(coordX, coordY - length, length, length);
      coordX += length;
    }
    coordX = 10 + (length/2) * lineNumber;
    coordY -= length;
    lineNumber++;
    i++;
  }

}
/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById('canvas9');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

   let hcolor = prompt("Please enter a House color.");
   while(hcolor != "brown" && hcolor !="blue" && hcolor !="green" && hcolor !="orange" && hcolor !="purple" && hcolor !="red" && hcolor !="yellow"){
     hcolor = prompt(`${hcolor} is not supported please enter another one.`);
   }

   let dcolor = prompt("Please enter a Front Door color.");
   while(dcolor != "brown" && dcolor !="blue" && dcolor !="green" && dcolor !="orange" && dcolor !="purple" && dcolor !="red" && dcolor !="yellow"){
     dcolor = prompt(`${dcolor} is not supported or it is the same as the previous please enter another one.`);
   }

 ctx.rect(150, 250, 724, 495);
 ctx.fillStyle = hcolor;
 ctx.fillRect(150, 250, 724, 495);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(150, 250);
 ctx.lineTo(512, 10);
 ctx.lineTo(874, 250);
 ctx.lineTo(150, 250);
 ctx.fillStyle = `gray`;
 ctx.closePath();
 ctx.fill();

 ctx.rect(462, 545, 100, 200);
 ctx.fillStyle = dcolor;
 ctx.fillRect(462, 545, 100, 200);
 ctx.stroke();

 let window = "#8ED6FF";

 ctx.rect(250, 550, 100, 100);
 ctx.fillStyle = window;
 ctx.fillRect(250, 550, 100, 100);
 ctx.stroke();

 ctx.rect(250, 350, 100, 100);
 ctx.fillStyle = window;
 ctx.fillRect(250, 350, 100, 100);
 ctx.stroke();

 ctx.rect(674, 550, 100, 100);
 ctx.fillStyle = window;
 ctx.fillRect(674, 550, 100, 100);
 ctx.stroke();

 ctx.rect(674, 350, 100, 100);
 ctx.fillStyle = window;
 ctx.fillRect(674, 350, 100, 100);
 ctx.stroke();

 ctx.beginPath();
 ctx.arc(540, 650, 10, 0, 2*Math.PI);
 ctx.fillStyle = `yellow`;
 ctx.fill();
 ctx.stroke();
}
