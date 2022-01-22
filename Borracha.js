class Borracha {
    constructor(x, y) {
        var options = {
            'density':1,
            'restitution': 0.3,
            'friction': 5
        };
        this.body = Bodies.circle(x, y, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke('black')
        fill('white')
        ellipseMode(RADIUS)
        ellipse(0, 0, this.width, this.height);
        pop();
    };
};