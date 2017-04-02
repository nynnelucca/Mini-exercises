// This is the box object - what is called in sketch.js when I write 'var b = new Box', line 10           
function Box(x, y, z, r) { 
  this.pos = createVector(x, y, z);
  this.r = r;

  this.generate = function() {
    var boxes = []; //an array 
    for (var x = -1; x < 2; x++) {
      for (var y = -1; y < 2; y++) {
        for (var z = -1; z < 2; z++) {
          var sum = abs(x) + abs(y) + abs(z);
          var newR = this.r / 3;
          if (sum > 1) {
            var b = new Box(this.pos.x + x * newR*2, this.pos.y + y * newR*2, this.pos.z + z * newR*2, newR);
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }

  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    stroke(0);
    noFill();
    box(this.r);
    pop();
  }
}
