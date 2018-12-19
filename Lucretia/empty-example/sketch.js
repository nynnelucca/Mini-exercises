var img;

var myFont;

var song;

var button;

function preload () {
  img = loadImage("assets/lucretiadone.png");
  myFont = loadFont("assets/chakra.ttf");
  song = loadSound("assets/mynameisnynnelucca.m4a");
}

function setup () {
  canvas = createCanvas(windowWidth, windowHeight);

  //button
  button = createButton("PLAY THOUGHTS")
  button.mousePressed(togglePlaying);
}

function draw () {
  background(255);
  lucretia();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function lucretia () {
  //image
  imageMode(CENTER);
  image(img, innerWidth/2, innerHeight/2, img.width/3, img.height/3);

  //text
  textFont(myFont);
  textSize(20);
  fill(223, 70, 65);
  text("SEXUAL ASSAULTS IN DENMARK 2017 ON LUCRETIA", 40, 40);
  push();
  textAlign(CENTER);
  textSize(15);
  text("SOURCES: Marie Heinskou m.fl. 2017: Seksuelle krænkelser | Offerundersøgelse 2017 | Danmarks Statistik | Rigspolitiets centrale nøgletal", innerWidth/2, innerHeight/1.01);
  pop();
  textSize(15);
  text("SEXUALLY ASSAULTED: 5.100", 100, 100);

  fill(96, 189, 191);
  text("REPORTED: 944", 100, 160);

  fill(	201, 69, 202);
  text("CONVICTED: 94", 100, 220); // gør tekst til links
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        button.html("STOP THOUGHTS");
    } else {
        song.pause();
        button.html("PLAY THOUGHTS");
 }
}
