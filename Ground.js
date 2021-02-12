class Ground
{
    constructor(x, y, width, height)
    {
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("Rocket.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        strokeWeight(1);
        stroke("Black");
        fill("brown");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}