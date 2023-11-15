let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
canvas.width="600";
canvas.height="600";
let color = "red";



class Object{
    constructor(){
        this.position={
            x:Math.random()* 600,
            y:Math.random()*600
        }
        this.size={
            width:50,
            height:50
        }
        this.velocity={
            x:Math.random()*(3 - 1) + -1,
            y:3
        }
    }
    // its draw an rectangle
    draw(){
        c.beginPath();
        c.fillStyle=color;
        c.strokeStyle="black"
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();
        c.stroke();

    }
    // it moves the rectangle
    move(){
        // this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    // checks X axis collision
    borderX_Collision(){
        if(this.position.x + this.size.width >= canvas.width){
            this.velocity.x=3*(-1)
            color="blue"
            console.log(this.velocity.x)
        }
        else if( this.position.x <0){
            this.velocity.x=3*(1)
            color ="green"
        console.log(this.position.x);
        } 
    }
    //checks Y axis collision
    borderY_Collision(){
        if(this.position.y + this.size.height>=canvas.height){
            this.velocity.y =3*(-1);
            color ="black"
        }
        else if(this.position.y <=0){
            this.velocity.y =3*(1);
            color ="orange"
        }

    }
    removeBox(){
        if(this.position.y >= 500){
            this.position.y =600;
        }
    }
    //it calls draw and move
    update(){
        this.draw();
        this.move();
        this.borderX_Collision();
        this.borderY_Collision();
        this.removeBox();

    }

}
// makes new object

let box=[]
for(let i =0;i<=5;i++){
    let obj = new Object();
    box.push(obj);
}


function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<=5;i++){
        box[i].update();
    }

    requestAnimationFrame(animate);
}
animate();