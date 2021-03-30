var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;
var gardenImage, garden

function preload() {
   cat1 = loadAnimation( "cat3.png");
   cat2 = loadAnimation("cat1.png", "cat2.png");
   cat3 = loadAnimation("cat4.png")

   mouse1 = loadAnimation("mouse3.png" );
   mouse2 = loadAnimation("mouse1.png", "mouse2.png");
   mouse3 = loadAnimation("mouse4.png");

   gardenImage = loadImage("garden.png");
}

function setup(){
    createCanvas(800,600);
    cat = createSprite(650, 500, 50, 50);
    cat.addAnimation("sleeping", cat1);

    cat.scale = 0.1

    mouse = createSprite(250, 450, 50, 50);
    mouse.addAnimation("eating", mouse1)
    mouse.scale = 0.1
    //text(mouseX + ',' + mouseY, 10, 45);

}

function draw() {

    background(gardenImage);
    //cat.x = World.mouseX;
    //cat.y = World.mouseY;

    if(cat.x - mouse.x < mouse.width/2 + cat.width/2){
         
        cat.velocityX = 0;
        cat.addAnimation("standing", cat3);
        cat.changeAnimation("standing", cat3);

        cat.scale = 0.1;
        cat.x = 150;

        mouse.addAnimation("stand", mouse3);
        mouse.changeAnimation("stand", mouse3);
        mouse.scale = 0.1;
       }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", cat2)
        cat.changeAnimation("catRunning", cat2);
        cat.scale = 0.1;

        mouse.addAnimation("run", mouse2);
        mouse.changeAnimation("run", mouse2);
        mouse.scale = 0.1;
    }



}
