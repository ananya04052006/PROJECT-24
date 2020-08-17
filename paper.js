class Paper{
    constructor(x, y, width, height, angle) {
        var options = {
          'isStatic': false,  
          'restitution': 0.3,
          'friction': 0.5,
          'density': 1.2
        }
        this.body = Matter.Bodies.circle(x, y, diameter, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
}