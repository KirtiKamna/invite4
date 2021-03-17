  
class Haldi extends BaseClass {
    constructor(x, y){
      super(x,y,400,400);
      this.image = loadImage("pics/haldi.jpg");
      this.Visiblity = 155;
    }
  
   display(){
     console.log(this.body.speed);

     
     if(frameCount > 300 && frameCount < 400){
        push();
        this.Visiblity = this.Visiblity + 1;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, windowWidth * 0.75,windowHeight * 0.65);
      pop();
     }
     else if(frameCount > 390 && frameCount < 490){
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