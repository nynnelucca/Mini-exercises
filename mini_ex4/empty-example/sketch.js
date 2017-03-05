var fillVal = ('#000000'); //sort

var col = ('rgb(58, 2, 105)'); //lilla

var song;

var button;

var amplitude; //amplitude, måler lydstyrke på sang

function preload() {
  song = loadSound('assets/Beyoncé.mp3');
}


function setup() {
    createCanvas(innerWidth, innerHeight);  
    ellipseMode(CENTER); 

//amplitude
    amplitude = new p5.Amplitude(); 
    amplitude.setInput(song);
    
//button
    button = createButton("I slay play")
    button.mousePressed(togglePlaying);
}

function draw() {
    background('rgb(58, 2, 105)');

 
//ellipse og amp.
    fill('#f0f00b');
    noStroke(); 
    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 300, 400);
    ellipse(width/2, 300, size, size);
    
//button.style
    button.position(595, 700); 
    button.attribute("align", "center"); 
    button.style("fontFamily", "Courier");
    button.style("color", "#f0f00b"); 
    button.style("font-size", "36px");
    button.attribute("align", "center"); 
    button.style("background-color", col); 
    
//border-style
    button.style("border-top-style", "none");
    button.style("border-right-style", "none");
    button.style("border-bottom-style", "none");
    button.style("border-left-style", "none"); 
    
    kvindetegn(); 
    var time = song.currentTime(); 
    
}

function kvindetegn() {
    var time = song.currentTime();
    var opa = map(time, 10, 15, 0, 255); 
    
    strokeWeight(40); 
    stroke(240, 240, 11, opa);
    
    var level = amplitude.getLevel();
    var sizeY = map(level, 0, 1, 600, 650);
    var sizeX = map(level, 0, 1, 510, 560); 
    
    line(720, 430, 720, sizeY); //lodret linje
    line(660, sizeX, 780, sizeX); //vandret linje
    noStroke();
    
    var size1 = map(level, 0, 1, 220, 270);
    fill(58, 2, 105, opa);
    ellipse(width/2, 300, size1, size1); 
    
}

function togglePlaying() { //knap viser 'play', hvis sang er stoppet og 'pause' hvis den afspilles
    if (!song.isPlaying()) {
        song.play(); 
        button.html("No more slay"); 
    } else {
        song.pause();
        button.html("I slay play");
 }
}