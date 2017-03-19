var inc = 0.1; 
var scl = 10; //scale
var cols, rows; //collons & rows

var zoff = 0; //z-offset

var particles = [];

var flowfield; 

var secretlife = ["thinking too much", "about you", "constantly thinking", "about you", "you", "constantly", "thinking", "too much", "about"] //array

function preload() {
    you = loadSound ('assets/moan.mp3'); 
}

function setup(){
  createCanvas(innerWidth, innerHeight);
  cols = floor(width / scl); //floor gets rid of decimal place
  rows = floor(height / scl);//not dealing with pixels anymore 
  frameRate(10); 
  you.play(); 
    
  flowfield = new Array(cols * rows);
    
  for (var i = 0; i < 1000; i++) {
    particles[i] = new Particle(); //particle index equals a new particle, rule#1
  }
  background(111, 18, 18); 
}

function draw(){  
    var yoff = 0; 
    for (var y = 0; y < rows; y++) {
         var xoff = 0; 
         for (var x = 0; x < cols; x++) {
            var index = x + y * cols;
            var angle = noise(xoff, yoff, zoff) * TWO_PI * 4; //give noise values in 3                                                      dimensional space, rule #2
            var v = p5.Vector.fromAngle(angle);
            v.setMag(1); 
            flowfield [index] = v; 
            xoff += inc; 
            stroke(0, 50); 

        }
        yoff += inc; 
        
        zoff += 0.0003; 
    }
    
    for (var i = 0; i < particles.length; i++) { //rule #3
    particles[i].follow(flowfield); 
    particles[i].update();
    particles[i].show();
    particles[i].edges();    
    }
    
    aboutyou(); 
}

function aboutyou(){
    fill(111, 18, 18, 80);
    noStroke(); 
    rect(width /6.1, height / 1.88, 200, 50); 
    fill('rgba(153, 76, 0, 50)');  
    textSize(20);
    text(random(secretlife), width / 6, height / 1.8);  // Displays one of the four words
}