var i=0; 
var timer; 
    

function setup() {
 createCanvas(innerWidth, innerHeight); 
 background(0);
 frameRate (15); //rotationshastighed
 timer = createP('timer'); //paragraf til tælling

}

function draw() {
    
//style for paragraf
 timer.style("position", 695, 380); 
 timer.style("fontFamily", "Courier");
 timer.style("color", "00C847"); 
 timer.style("font-size", "26px");
 timer.attribute("align", "center"); 
 timer.html((frameCount + 1700) % 2017); //modulotegn brugt her

//tekstindstillinger og rektangel til tekst
 push();
 noStroke(); 
 fill(0); 
 rect(0, 600, width, 400);
 fill(0, 200, 71);
 textAlign(CENTER); 
 textSize(25);
 textFont("Courier");

//tekst og lokal variabel med braces [ ]  
 var dataload = ["The silent sex...", "Waiting for equality...", "Waiting for the miracle to come...", "STILL WAITING...", "Please wait...", "While I wait...", "While you wait...", "While we wait..."]; 
 i = i + 1;

 if (i >= 1 && i<=50) {
 var bepatient = dataload [0]; //man tæller fra 0 og opefter i programmering
}
 if (i >= 51 && i<=100) {
 var bepatient = dataload [1];
 }
if (i >= 101 && i<=150) {
 var bepatient = dataload [2];
}
 if (i >= 151 && i<=200) {
 var bepatient = dataload [3];
 }
if (i >= 201 && i<=250) {
 var bepatient = dataload [4];
}
if (i >= 251 && i<=300) {
 var bepatient = dataload [5];
}
if (i >= 301 && i<=350) {
 var bepatient = dataload [6];
}
if (i >= 351 && i<=400) {
 var bepatient = dataload [7];
    if (i == 400) {
    i = 0;
} 

pop();
}
//tekst placering 
text(bepatient, width / 2, 700);
    
 push();  
 fill(0, 30);  
 rect(0, 0, width, 600); //rektangel der hele tiden tegnes, så der skabes 'spor' i throbberen
 drawThrobber(10);  //antal rektangler/objekter i throbberen
 pop();

}

function drawThrobber(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num); 
  rotate(radians(cir));
  noStroke();
  //de roterende dele i throbberen
  fill(0, 200, 71); 
  rect(35,120,95,5);  //the moving dot(s), the y is the distance from the center
  pop();
  
}