class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restituition:0.3,
            friction:0,
            density:1.2
        }
        
        this.radius=radius
        this.x=x;
        this.y=y;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,(this.radius-20/2),options)
        World.add(world,this.body);
        
    }
    display()  {
        var paperpos=this.body.position
    push()
    translate(paperpos.x,paperpos.y);
    
    fill(255,0,255)
    imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
    pop();
}


}