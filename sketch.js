var movingrect,fixedrect;
var obj1 ,obj2,obj3;

function setup() {
  createCanvas(800,400);
fixedrect=createSprite(400, 200, 50, 80);
movingrect=createSprite(600,200,80,50)
obj1=createSprite(100,100,50,50)
obj2=createSprite(200,100,50,50)
obj3=createSprite(300,100,50,50)
}

function draw() {
  background(255,150,80);  
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"
  obj1.shapeColor="pink"
  obj2.shapeColor="pink"
  obj3.shapeColor="pink"
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(isTouching(movingrect,obj3)){
movingrect.shapeColor="red"
obj3.shapeColor="red"
}else {movingrect.shapeColor="green"
obj3.shapeColor="pink"
}
  drawSprites();
}

function isTouching(a,b){
  if(a.x-b.x<b.width/2+a.width/2&&
    
    b.x-a.x<b.width/2+a.width/2&&
    b.y-a.y<b.height/2+a.height/2&&
    a.y-b.y<b.height/2+a.height/2){
   return true;
   
  }
  else {
    return false;
}
}

