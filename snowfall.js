class Snowfall{
    constructor(x,y,radius){
var options={
    restitution:0.2,density:1,isStatic:false
}
this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
World.add(world,this.body);
    }
    //function
    display(){
        push();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}