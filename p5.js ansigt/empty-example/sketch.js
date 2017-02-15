function setup() {
    createCanvas(3000, 4000); 
   
}

function draw() {
    background(0)
    
    //ansigt
    stroke(255, 0, 0);
    fill(255, 0, 0);
    ellipse(400,400, 400, 400); 
    fill(0, 0, 255);
    
    //højre øje
    stroke(0, 0, 255);
    ellipse(450, 365, 75, 75);
    
    //venstre øje
    ellipse(350, 365, 75, 75);
    
    //højre pupil
    fill(0);
    ellipse(450, 365, 35, 35);
    //venstre pupil
    ellipse(350, 365, 35, 35);
    
    //mund
    stroke(0);
    arc(400, 475, 80, 80, 0, 3.14, PI+QUARTER_PI, CHORD);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    
    //krop
    line(400, 600, 400, 800); 
    
    //højre arm
    line(400, 650, 600, 600);
    //venstre arm
    line(400, 650, 200, 600);
    
    //højre ben
    line(400, 800, 450, 900);
    //venstre ben
    line(400, 800, 350, 900);
    
    //kasse
    rect(250, 900, 300, 100); 
    
    //førsteplads
    fill(0, 0, 255);
    stroke(0, 0, 255);
    textSize(42); 
    text("1.", 380, 960);

}

