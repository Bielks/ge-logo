class Pedra {
    constructor(x, y) {
        var options = {
            'density':12,
            'friction':0.9,
            'retitution':0.8
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke('black');
        fill('gray');
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }  
}