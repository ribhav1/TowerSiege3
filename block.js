class block{
    constructor(x, y, w, h, bool, color){
        var options = {
            isStatic: bool
        }  
        this.image = loadImage("redBlockImage.png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.color = color;
        this.Visibility = 255;
        this.scoreValue = 0;
        World.add(world, this.body);
        this.removeFromWorld = function(){
            World.remove(world, this.body);
        }
        
    }

    score(){
        if(this.Visibility < 0 && this.Visibility >- 105){
            score++;
        }
        console.log(this.Visibility);
        text(this.scoreValue, 200, 300);
    }

    display(){
        if(this.body.velocity.x < 3){
        //imageMode(CENTER);
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill(this.color);
        stroke(255);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }else{
        this.removeFromWorld();
        push();
        this.Visibility -= 5;
        pop();
        }  
    }   
}