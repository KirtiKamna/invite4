class Wedding extends BaseClass {
    constructor(x, y){
      super(x,y,400,400);
      this.image = loadImage("pics/wedding.png");
      this.Visiblity = 155;
    }
  
   display(){
     console.log(this.body.speed);
    imageMode(CENTER);
     
     if(frameCount > 700 && frameCount < 800){
        push();
        this.Visiblity = this.Visiblity + 1;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, windowWidth * 0.75,windowHeight * 0.65);
      pop();
     }
     else if(frameCount > 790 && frameCount < 890){
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 1;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, windowWidth * 0.75,windowHeight * 0.65);
       pop();
     }

     else{

        World.remove(world, this.body);
       push();
     
       tint(255,0);
       image(this.image, this.body.position.x, this.body.position.y, windowWidth * 0.75,windowHeight * 0.65);
       pop();
     }
     
   }
  
  
  
  };