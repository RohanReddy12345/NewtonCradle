class ropeClass{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 150
        }
        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
}
    
}