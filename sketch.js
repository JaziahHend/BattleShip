function setup() {
    createCanvas(1300, 1000);
    background("white");
    stroke("black");
    strokeWeight(2);    
} 
let l = 400;
let p = 100;
let z = 50;
let i = 50;
let j = 50;

function superGrid(){
    rect(l,p+z,50,50);
    rect(l,p+z*2,i,j);
    rect(l,p+z*3,i,j);
    rect(l,p+z*4,i,j);
    rect(l,p+z*5,i,j);
    rect(l,p+z*6,i,j);
    rect(l,p+z*7,i,j);
    rect(l,p+z*8,i,j);
    rect(l,p+z*9,i,j);
    rect(l,p+z*10,i,j);
    rect(l,p+z*11,i,j);
}
function draw(){ 

    superGrid();
    if (l == 900){
        l -= 50;
    }

    if (l >= 400){
        l  += 50;
    }
}

let grid = [];
let i = 0;
let x = 0;
let y = 0;

while(x < 1400){
    while(y < 1100){
        grid[i] = [x,y]
        y += 100;
        i++;
    }
    x += 100
    y = 0;
}


