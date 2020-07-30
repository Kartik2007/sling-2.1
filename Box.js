class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
    display() {
    
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      
    


  }
  score(){
    text("SCORE :"+score,1000,40);

    textSize(30);
    score.display();

}


  }
