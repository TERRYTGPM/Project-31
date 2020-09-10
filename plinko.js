class Plinko{
    constructor(x, y){
        var options = {

            isStatic: true,
            restituition: 0.4

        }

        this.x = x;
        this.y = y;
        
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);


    }

    display(){
        var pos = this.body.position;
        
        push();

        ellipse(pos.x, pos.y, 10, 10);

        pop();
    }
}