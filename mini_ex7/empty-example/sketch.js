var rSlider; //sliders that control background color
var gSlider; 
var bSlider; 
var input; 
checkboxes = [];

function setup() {
   createCanvas (windowWidth, windowHeight); 
   sliders();     
   input = createInput('        B O X E S-6 7 5'); 
   input.position(innerWidth / 2.2, innerHeight / 1.2); 
    for (var x = innerWidth / 3; x <= innerWidth / 1.5; x += 20) {
    for (var y = 100; y <= innerHeight / 1.3; y += 20) {  
     var checkbox = createCheckbox('', false); //checkboxes initially not checked
     checkbox.position(x, y); 
     checkboxes.push(checkbox); //puts all the checkboxes into an array
    }

  }
   
}

function sliders() {
   rSlider = createSlider(0, 255, 0); //1. min. val 2. max. val 3. default val 
   rSlider.position(20, 100);
   gSlider = createSlider(0, 255, 0);
   gSlider.position(20, 130);
   bSlider = createSlider(0, 255, 255);
   bSlider.position(20, 160);
}

function draw() {
    var r = rSlider.value();
    var g = gSlider.value();
    var b = bSlider.value();
    background(r, g, b);
}

