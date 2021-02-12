class Rocket
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
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}