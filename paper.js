class Paper{
  constructor(x,y) {
      var options = {
        isStatic : false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,10, options);
      this.raduis = 10
      this.x = x;
      this.y = y;
      World.add(world, this.body);
  }
    fly(){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110})
    }
    display(){
      push();
      fill("deeppink");
      ellipseMode(RADIUS);
      ellipse(this.x,this.y,this.raduis,this.raduis);
      pop();
    }
}