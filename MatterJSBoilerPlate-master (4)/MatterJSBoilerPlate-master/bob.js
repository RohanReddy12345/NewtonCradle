class bobClass{
    constructor(x, y,) {
      
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,20,20, options);
      
      
      
    
      World.add(world, this.body);
    }
    display(){
      

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("gray");
      ellipse(20,20);
      pop();
    }
  };