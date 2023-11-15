let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
canvas.width="600";
canvas.height="600";
let color = "red";

let counter =1;

class Object{
    constructor(){
        this.position={
            x:Math.random()* 600,
            y:200
        }
        this.size={
            width:50,
            height:50
        }
        this.velocity={
            x:Math.random()*(3 - 1) + -1,
            y:Math.random()*(5 - 1) + -1
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
        if(counter < 3){
            this.position.y += this.velocity.y;
        }
    }
    // checks X axis collision
    borderX_Collision(){
        if(this.position.x + this.size.width >= canvas.width){
            this.velocity.x=3*(-1)
            color="blue"

        }
        else if( this.position.x <0){
            this.velocity.x=3*(1)
            color ="green"

        } 
    }
    //checks Y axis collision
    borderY_Collision(){
        if(this.position.y + this.size.height>=canvas.height){
            // this.velocity.y =3*(-1);
            // color ="black"
            this.position.y = canvas.height- this.size.height;
            counter++;
            console.log(counter);
        }
        else if(this.position.y <=0){
            this.velocity.y =3*(1);
            color ="orange"
        }

    }
    
    //it calls draw and move
    update(){
        this.draw();
        this.move();
        this.borderX_Collision();
        this.borderY_Collision();
       

    }

}
// makes new object

let box=[];

for(let i =0;i<=10;i++){
    let obj = new Object();
    box.push(obj);
}
let x=0;
let y=0;
canvas.addEventListener("mousemove",(event) =>{
    x=event.clientX;
    y=event.clientY;

   

});


function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.fillStyle="black"
    c.fillRect(x,y,10,10);
    for(let i=0;i<=10;i++){
        box[i].update();
        if(x+10>box[i].position.x && box[i].position.x + box[i].size.width >x &&
            y+10>box[i].position.y && box[i].position.y + box[i].size.height >y ) {
                box[i].position.y = -100;
            }
    }
   

    
    
    requestAnimationFrame(animate);
}
animate();