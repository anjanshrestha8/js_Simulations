const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width="500";
canvas.height="500";
let boxObj = [];

class Box{
    constructor(){
        this.position={
            x: Math.random()*canvas.width,
            y:Math.random()*canvas.height,
        }
        // this.x =100;
        // this.y =100;
        this.size={
            width :50,
            height :50,

        }
        // this.width =50;
        // this.height =50;

        this.velocity ={
            x:1,
            y:1,
        }
        this.acceleration=0.8;
    }
    // box draw garxa 
    draw(){
        c.beginPath();
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();
    }
    // box move hunxa
    move(){
        this.velocity.y = this.velocity.y + this.acceleration;
        this.position.y = this.position.y + this.velocity.y;
    }
    // collision check garxa ra gravity ko concept ma kam gareko 
    borderCollision(){
        if(this.position.y + this.size.height >= canvas.height){
            this.position.y = canvas.height -this.size.height;  // prevent from shrinking
            this.velocity.y = this.velocity.y * - 0.8;
            
        }

    }
    // sabai function lai call garxa
    update(){
        this.draw();
        this.move();
        this.borderCollision();
    }
}
//Game Loop
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i < 100;i++){
        boxObj.push(new Box());
        boxObj[i].update();
    }    

    requestAnimationFrame(animate);
}
animate();