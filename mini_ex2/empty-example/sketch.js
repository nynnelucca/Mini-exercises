//bogstaver startplaering på x-aksen
var letterX = 1450;

//tekst farve
//var letterfill = ('rgb(0, 255, 0)');
var r1 = ('r(0)');
var g = ('g(255)');

//rektangel farve
var fillX = ('rgba(0, 190, 0, 0.90)'); 

//bevægelse tekst fra højre mod venstre
var speed = -4;

//rektangel til tekst farveskift
var rectY = 0;
var speedrectY = 0; 

//rektangel placering x-aksen
var rectX = 850; 

//bevægelse rektangel 
var speedrect = 0;

//farver til map funktion
var r = 179;

//opasitet
var trans1 = 255; 
var trans2 = 255; 
var transr = 255;
var transe = 255;
var transs1 = 255;
var transs2 = 255;
var transx = 255;
var transe1 = 255;
var transn = 255;
var transt = 255;
var transe2 = 255;
var transr1 = 255;
var transx1 = 255;

//opasitet rektangel 
var transrec = 0; 
//opasitet not found 404
var trans404 = 0;

function setup() {
    createCanvas(1600, 4000); 
    noCursor(); 
}

function draw() {
    //baggrund, rød
    background(r, 0, 0);
    
    //tekst 
    textStyle(BOLD);
    
    //grøn skrift
    fill(r1, g, 0);
    textSize(60);
    textFont("Arial");
    text(" T U R N   U P   Y O U R   V O L U M E", letterX, 380); 
    
    //bevægelse tekst og rektangeler 
    letterX = letterX + speed; 
    rectX = rectX + speedrect; 
    rectY = rectY + speedrectY;
    
    //bevægelse stop tekst       
    if (letterX < 220) {
       speed = 0
    }
    
    //farveskift rektangel 
    if (letterX < 220) {
        fillX = ('rgba(255, 0, 0, 0.20)');
    }
    
    //rektangel bevægelse 
    if (letterX < 220) {
        speedrect = 1.5
    }
    
    if (rectX > 1200) {
        speedrectY = 2
    }
    
            
    //rektangel 
    fill(fillX); 
    strokeWeight(0); 
    stroke (0, 190, 0, 220); 
    rect(190, 270, 1100, 200, 20, 20); 
    
    
    //rektangel til bevægelse
    //grøn
    fill(0, 255, 0); 
    rect(rectX, -30, 10, 10);   
    
    //rektangel til ændring af tekstfarve
    rect(-20, rectY, 10, 10); 
    
    
    //MAP FUNKTION
    //ændring af baggrundsfarve
    r = map(rectX, 850, 1300, 179, 255);  
    //ændring af tekstfarve
    r1 = map(rectY, 0, 800, 0, 255); 
    g = map(rectY, 0, 400, 255, 0); 
    
    //Press 'enter' opacitet
    trans2 = map(rectY, 800, 850, 0, 255); 
    transr = map(rectY, 850, 900, 0, 255);
    transe = map(rectY, 900, 950, 0, 255);
    transs1 = map(rectY, 950, 1000, 0, 255);
    transs2 = map(rectY, 1000, 1050, 0, 255);
    transx = map(rectY, 1050, 1100, 0, 255);
    transe1 = map(rectY, 1100, 1150, 0, 255);
    transn = map(rectY, 1150, 1200, 0, 255);
    transt = map(rectY, 1200, 1250, 0, 255);
    transe2 = map(rectY, 1250, 1300, 0, 255);
    transr1 = map(rectY, 1300, 1350, 0, 255);
    transx1 = map(rectY, 1350, 1400, 0, 255);
    
    fill(0, trans1);
    textSize(16);
    textStyle(NORMAL); 
    textAlign(LEFT, CENTER); 
    textFont("Courier");
    text("Music will begin shortly...", 600, 500); 
    
    //Press 'enter'
    fill(0, trans2); 
    textSize(50); 
    text("P", 565, 400);
    fill(0, transr); 
    text("r", 600, 400); 
    fill(0, transe); 
    text("e", 635, 400); 
    fill(0, transs1); 
    text("s", 670, 400); 
    fill(0, transs2); 
    text("s", 705, 400); 
    fill(0, transx); 
    text("'", 740, 400); 
    fill(0, transe1); 
    text("e", 760, 400); 
    fill(0, transn); 
    text("n", 795, 400); 
    fill(0, transt); 
    text("t", 830, 400);
    fill(0, transe2); 
    text("e", 865, 400);
    fill(0, transr1); 
    text("r", 905, 400); 
    fill(0, transx1); 
    text("'", 925, 400); 
    
    //visning af tekst Music will begin shortly...
    if (r1 === 255) {
        trans1 = 0
    }
    
    //hvid rektangel
 
    fill(255, transrec); 
    rect(0, 0, width, height); 
       fill(0, trans404); 
    textSize (46); 
    textStyle(BOLD); 
    textFont("Times New Roman");
    text("Error (404): Not found", 20, 150);
    textStyle(NORMAL); 
    textSize(20); 
    text("The requested URL/somefolder was not found on this server.", 20, 275); 
    text("Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.", 20, 300, 600, 100); 
    
   
    
    }
    function keyPressed() {
    if (keyCode === ENTER) {
    transrec = 255;
  } else if (keyCode === RIGHT_ARROW) {
    transrec = 0;
  }
    if (keyCode === ENTER) {
    trans404 = 255; 
  } else if (keyCOde === RIGHT_ARROW) {
    trans404 = 0; 
  }
}
