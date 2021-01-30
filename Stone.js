class Stone{
    constructor(x, y){
   var options={
     'restitution':0,
     'friction':1,
     'density':1.2
 }   
     this.body.rectangle(x, y, 25, 25, options);
     this.width = 25;
     this.height = 25;
     this.image = loadImage("images/stone.png")
     World.add(world, this.body);
    }
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}
}