class bounce{
    constructor(x, y) {
        var options = {
            'restitution':0.9,
            'friction':1.0,
            'density':0.04
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 30;
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red")
        ellipseMode(CENTER);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}