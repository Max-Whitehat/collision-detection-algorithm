var movingrect
var fixedrect


function setup() {
  createCanvas(800,400);

  movingrect = createSprite(400,400,100,50)
  fixedrect = createSprite(200,200,100,100)

  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
}

function draw() {
  background(255,255,255); 
  
  movingrect.y=mouseY
  movingrect.x=mouseX

  
  drawSprites();

  if (movingrect.x - fixedrect.x<=movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x - movingrect.x<=fixedrect.width/2+movingrect.width/2 && 
    movingrect.y - fixedrect.y<=movingrect.height/2+fixedrect.height/2 && 
    fixedrect.y - movingrect.y<=fixedrect.height/2+movingrect.height/2){

      movingrect.shapeColor="yellow"
      fixedrect.shapeColor="yellow"
    
    } else {
      movingrect.shapeColor="blue"
      fixedrect.shapeColor="blue"
    }

}