class wallpaper {
  constructor(_xPos, _yPos, _rotation, _size){
    this.xPos= _xPos;
    this.yPos= _yPos;
    this.rotation= _rotation;
    this.size = _size;
    
  }
  
  display(){
push();
translate(this.xPos, this.yPos);
rotate(this.rotation);
scale(this.size);
fill(15, 20, 139);
  noStroke();
  circle(width * .4, height * .84, width * .06);
  circle(width * .4, height * .78, width * .06);
  circle(width * .58, height * .84, width * .06);
  circle(width * .58, height * .78, width * .06);
  rect(width * .4, height * .78, width * .18, height * .06);
pop();  
    
    
  }
  
  move(){
    
    if (this.yPos <= height * .82 ){
    //this.yPos = this.yPos + 2;
    //shorthand is +=
    this.yPos += 2;
    } else {
      this.yPos = -height * 1
      
    }
    
    
  }
  
  
}





//function wallpaper(xPos, yPos, rotation){

//}
