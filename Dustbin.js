class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.Bottombody = Bodies.rectangle(x,y,width,height,options);
        this.leftbody=Bodies.rectangle(x-75,y-30,20,150,options);
        this.Rightbody=Bodies.rectangle(x+75,y-30,20,150,options);
        World.add(world, this.Bottombody);
        World.add(world,this.leftbody);
        World.add(world,this.Rightbody);
    }
    display(){
        var posBottom=this.Bottombody.position;
        var posRight=this.Rightbody.position;
        var posleft=this.leftbody.position;
        push()
        translate(posleft.x,posleft.y)
        rectMode(CENTER)
        fill("green")
        rect(0,0,20,100);
        pop();
        push()
        translate(posRight.x,posRight.y)
        rectMode(CENTER)
        fill("green")
        rect(0,0,20,100);
        pop();
        push()
        translate(posBottom.x,posBottom.y)
        rectMode(CENTER)
        fill("green")
        rect(0,0,200,20);
        pop();

    }

}