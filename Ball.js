class Ball {
  constructor(x,y,radius)   {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
  

