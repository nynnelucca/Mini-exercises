var a = 0; //Rotation of sketch

var sponge = []; //Array of box objectscf. 'box.js' line 6

var button; //Play/pause button 

var song; 

var clicks = true; //Cf. line 49 

var x = 0; 

var amplitude; 

function preload() {
  song = loadSound('assets/nocloud.mp3'); 
}

function setup() {
  //WEBGL = objects in 3D   
  createCanvas(windowWidth, windowHeight, WEBGL); 
  
  //New amplitude
  amplitude = new p5.Amplitude(); 
  amplitude.setInput(song); 
    
  //Light functions is something you can use when using WEBGL, ambient(*omgivende) light provides evenly distributed light on the object and it takes three arguments (r, g, b), link: https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5    
  ambientLight(255,0,100); 
  ambientMaterial(250, 0, 150);
  var dirY = (mouseY / height - 0.5) *2;
  var dirX = (mouseX / width - 0.5) *2;
  //Rays shine in a given direction, here it is controlled by the mouse 
  directionalLight(250, 250, 250, dirX, -dirY, 0.25); 
  //This is used so that color is affected by light functions that precede it
  ambientMaterial(250); 
  
  // An array of box objects. Cf. file 'Box.js'
  var b = new Box(0, 0, 0, 250); 
  //Currently an array list with just one box in it, this is changed in line 42
  sponge.push(b); 
 
  //Button
  button = createButton("play")
  button.mousePressed(togglePlaying);
}

function mousePressed() {
  x += 1; 
  
  // Generate the next set of boxes
  if (clicks){
  //New array
  var next = []; 
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    console.log(i);
    var newBoxes = b.generate();
    console.log(newBoxes);
    next = next.concat(newBoxes);
  }
  //Sponge is an arraylist with one thing in it then you take that one thing              out and make a bunch of sponges from that and replace the sponge  
  sponge = next; 
}
  //If mouse is pressed more than 2 times it will not affect the boxes 
  if(x >= 2) { 
    clicks = false;
 } 
}
function draw() {
  background(50, 100, 200);
  var level = amplitude.getLevel(); 
  var rot = map(level, 0, 1, 0, 0.3); //rotation controlled by amplitude 
  //Sketch rotation around the x-axis
  rotateX(a); 
  //Rotation around the y-axis
  rotateY(rot); 
  //Rotation around z, slow speed, to show that it is 3 dimensional 
  rotateZ(a * 1.5); 
  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show(); // instead of drawing box
  }
  a += 0.01;
  playButton();  
}

function playButton() {
  button.position(windowWidth / 2, 800); 
  button.attribute("align", "center"); 
  //Assigned class to be used in CSS sheet, cf. file 'style.css'    
  button.class("button"); 
}

function togglePlaying() { 
  if (!song.isPlaying()) {
      song.play(); 
      button.html("pause"); 
     } else {
      song.pause();
      button.html("play");
 }
}

// How the menger sponge works: 
//1. You begin with a simple cube 
//2. Divide every 'face' of the cube into 9 squares which will sub-divide the cube into 27 smaller cubes 
//3. Remove the smaller cube in the middle of each face
//4. Remove the smaller cube in the center of the larger cube 
//5. This leaves 20 cubes organised in one larger cube (level-1 Menger sponge) 
