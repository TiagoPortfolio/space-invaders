// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Ship() {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, 20, 60);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    if (!this.onEdge()) {
      this.x += this.xdir * 5;
    }
  }

  this.onEdge = function() {
    var nextMove = (this.xdir * 5) + this.x;
    if (nextMove > width || nextMove < 0) {
      return true;
    } else {
      return false;
    }
  }
}
