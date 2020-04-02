class Chain {
    constructor(bodyA,bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        
    }  
    display()   {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(9);            
        line(pointA.x,pointyA.y,pointB.x,pointB.y);

    }
}