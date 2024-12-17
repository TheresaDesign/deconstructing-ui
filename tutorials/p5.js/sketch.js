const width = 600;
const height = 400;
const snowflakes = 200;
let y = -2000;

function setup(){
    var myCanvas = createCanvas(width, height)
    myCanvas.parent('p5_sketch')
    background('black')
    frameRate(5)
}

function draw(){
    fill(255)

    

    for (let s = 0; s < snowflakes; s++) {
        circle(random(width), y + random(2000), random(1,6))
    }
    y += 20;

    if (y > 0){
        y = -1000;
    }
}


draw()