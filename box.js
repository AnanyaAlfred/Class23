class Box {
    constructor(x, y, width, height){
        //JSON FORMAT
        var options = {
            restitution: 0.5,
            density:0.2
        }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       World.add(world, this.body); 
    }
    display(){
        // name spacing
        var pos = this.body.position; 
        
        fill("blue");
        push();
        
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop(); 
    }
}