var clouds; 
var canvas; 
var myDiv; 
var song; 
var img; 
var words = ["my", "my", "my", "heart", "heart", "heart", "heart", "heart", "heart", "standing-reserve"]   

function preload() {
song = loadSound('assets/part.mp3');
myFont = loadFont("data/VeraMono.ttf");    
img = loadImage("assets/aphrodite.png");    
}

function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
    song.play();
    
    background(255);
//myDiv = createDiv(words) 
    clouds = createVideo(['assets/clouds.mp4']);
    clouds.loop();
}

function draw() {
    background(255);
    
//clouds
    noTint(); 
    clouds.size(innerWidth, innerHeight);
    image(clouds, 0, 0);
    filter(INVERT);   
    
//tekst
    fill('rgba(121, 93, 17, 0.69)');  
    textSize(20);
    textFont(myFont); 
    text(random(words), width / 3, height / 2);  // Displays one of the four words
    tint(50, 70);  
    image(img, width / 20, height / 3.8); 
}