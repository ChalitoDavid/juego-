var SET = 2;
var PLAY = 1;
var END = 0;
var score=0;

var gameState = SET;

var gameScene; 

var X = 0;
var Y = 0;
var Z = 1;
var count=0;
var position = false;
var fix = false;
var fly = false;
var refix = false;
var paused = false;
var x;
var space = true 
var avion, ground, ground2, ground3,floorImg,squareImg,triangleImg,baseImg, avionImg,
groundImg, bordeImg,playImg, playButtonImg,playButtonBackImg, pauseButton, pauseButtonImg,trianguloImg,trianguloImg2,trianguloImg3;

var gameOver, restart;
var gameOverImg, restartImg;

var obstaclesGroup, squareGroup;

var UpEdge, UpEdge2, UpEdge3,DownEdge, DownEdge2, DownEdge3, floor, triangle, base, base2, base3,
floor2,floor3,floor4,playButton,playButtonBack,plays, fondoImg,fondo;
var DownGroup,UpGroup, cloudsGroup
var square,square2,square3,square4,square5,square6,square7,square8;
var triangle, triangle2, triangle3, triangle4;
var avionImgs, avionAnimation,avionAnimation2,avionAnimation3,avionAnimation4;
var line,lineImg
var cloud1,cloud2,cloud3,cloud4,cloud5,cloud6;
var portal,portalImg

var button

function preload(){
  

  avionImg = loadAnimation("./assets/avion3.png"); 
  
  avionAnimation = loadAnimation("./assets/avion2.png","./assets/avion2.png",
  "./assets/avion3.png", "./assets/avion4.png", "./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png","./assets/avion5.png");
  avionAnimation2 = loadAnimation("./assets/avion4.png","./assets/avion3.png","./assets/avion2.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png","./assets/avion1.png");
  avionAnimation3 = loadAnimation("./assets/crash1.png","./assets/crash2.png","./assets/crash3.png","./assets/crash4.png","./assets/crash5.png");
  avionAnimation4 = loadAnimation("./assets/avion6.png")
  groundImg = loadImage("./assets/fondo2.png");
  playImg = loadImage("./assets/fondo3.png");
  baseImg = loadImage("./assets/borde2.png");
  floorImg = loadImage("./assets/floor.png");
  triangleImg = loadImage("./assets/triangle.png");
  squareImg = loadImage("./assets/square.png");
  playButtonImg = loadImage("./assets/playButton.png")
  playButtonBackImg =loadImage("./assets/playButtonBack.png")
  pauseButtonImg = loadImage("./assets/pauseButton.png")
  gameOverImg = loadImage("./assets/gameOver.png");
  restartImg = loadImage("./assets/restart.png");
  fondoImg = loadImage("./assets/fondo2.png");
  bordeImg = loadImage("./assets/borde.png");
  lineImg= loadImage("./assets/borde2.png");
 
  trianguloImg=loadImage("./assets/triangulo.png")
  trianguloImg2=loadImage("./assets/triangulo2.png")
  trianguloImg3=loadImage("./assets/triangulo3.png")
  
  cloud1=loadImage("./assets/cloud1.png");
  cloud2=loadImage("./assets/cloud2.png");
  cloud3=loadImage("./assets/cloud3.png");
  cloud4=loadImage("./assets/cloud4.png");
  cloud5=loadImage("./assets/cloud5.png");

  portalImg=loadImage("./assets/portal.png");
}

function setup() {
  createCanvas(700,350);

  imageMode(CENTER);

  gameScene= new SceneManager();
  gameScene.addScene(menu);
  // gameScene.addScene(levels);
  gameScene.addScene(level1);

  
  gameScene.showNextScene();

  



 



 

 
}

function draw() {
  
 /* if (gameState===SET){ 
    background("red");

   base.visible=false;
   base2.visible=false;
   base3.visible=false;
   line.visible=false;
   avion.visible=false;
  }*/
  

gameScene.draw();


}


function nextScene(){
  gameScene.showNextScene();
}




/*=================MENU================================
=======================================================
=======================================================
=====================================================*/

function menu(){
this.setup= function(){
  button = createImg('./assets/playButton2.png');
  button.position(width/2-75,height/2-75);
  button.size(125,150);
  button.mouseClicked(playGame);
  button.mouseOver(escala);
  button.mouseOut(escalaOut);


  plays=createSprite(width/6.5,height/8,10,10)
  plays.addImage(playImg);
  plays.visible = true;


/*avion.velocityX = 0 
avion.velocityY = 0
button.visible=true
ground.visible=false
ground2.visible=false
ground3.visible=false
pauseButton.visble=false;*/
}

this.draw= function(){
  background("red")
  
  
  
  drawSprites();
}
}
/*===============LEVELS==================================
============================================================
===========================================================
0================================================================*/

// function levels(){
//   this.setup= function(){

  
//   }
  
//   this.draw= function(){
//     background("red")
   
//     plays.visible =false;
//     drawSprites();
//   }
//   }
  

/*=================LEVEL 1=============================
=======================================================
=======================================================
=====================================================*/
function level1(){
  
  this.setup= function(){
  

    pauseButton = createImg('./assets/pauseButton.png');
    pauseButton.position(width/2+300,height/2-170);
    pauseButton.size(30,30);
    pauseButton.mouseClicked(buttonPause);

    pauseButton.mouseOver(escalas);
    pauseButton.mouseOut(escalasOut);

    menu2 = createImg('./assets/menu.png');
    menu2.position(width/2+2000,height/2-170);
    menu2.mouseClicked(menuButton);
    menu2.size(50,50);

    function escalas(){
      pauseButton.position(width/2+300,height/2-170);
      pauseButton.size(35,35);
    }
    
    function escalasOut(){
      pauseButton.position(width/2+300,height/2-170);
      pauseButton.size(30,30);
    }

function buttonPause(){
paused=!paused;
space = true;
pauseButton.position(width/2+300,height/2-170);
pauseButton.size(30,30);


pauseButton.mouseOver(escalas);
pauseButton.mouseOut(escalasOut);

}
    line=createSprite(100,119,200,20)
    line.addImage(lineImg);
    line.scale=0.5
    line.velocityX=10
    
    avion=createSprite(10,150,20,50);
    avion.addAnimation("avion01",avionImg);
    avion.addAnimation("avion02",avionAnimation);
    avion.addAnimation("avion03",avionAnimation2);
    avion.addAnimation("avion04",avionAnimation3);
    avion.addAnimation("avion05",avionAnimation4);
    avion.scale = 0.3;
  
    avion.debug=true;
    
    ground=createSprite(0,10,400,20);
    ground.addImage("ground",groundImg);
    ground.scale = 1;
  
    ground2=createSprite(700,10,400,20);
    ground2.addImage("ground2",groundImg);
  
    ground3=createSprite(1400,10,400,20);
    ground3.addImage("ground3", groundImg);
  
    base=createSprite(0,250);
    base.addImage("base",baseImg);
    base.scale=1;
  
    base2=createSprite(700,250);
    base2.addImage("base2",baseImg);
    base2.scale=1;
   
    base3=createSprite(1400,250);
    base3.addImage("base3",baseImg);
    base3.scale=1;
  
    UpEdge=createSprite(0,-200,400,20);
    UpEdge.addImage(bordeImg);
  
    UpEdge2=createSprite(700,-200,400,20);
    UpEdge2.addImage(bordeImg);
    
    UpEdge3=createSprite(1400,-200,400,20);
    UpEdge3.addImage(bordeImg);
  
  
    DownEdge=createSprite(0,118,400,20);
    DownEdge.addImage(bordeImg);
  
    DownEdge2=createSprite(700,118,400,20);
    DownEdge2.addImage(bordeImg);
  
    DownEdge3=createSprite(1400,118,400,20);
    DownEdge3.addImage(bordeImg);
  
  
    triangle=createSprite(550,85);
    triangle.addImage(trianguloImg3);
    triangle.scale = .5;
  
    triangle2=createSprite(525,90);
    triangle2.addImage(trianguloImg2);
    triangle2.scale = 1.5;
    
  

    square=createSprite(665,90); 
    square.addImage(squareImg);
    square.scale = 0.3;
  
    square2=createSprite(1320,287,10,10); 
    square2.addImage(squareImg);
    square2.scale = 0.1;
  
    square3=createSprite(1320,252,10,10); 
    square3.addImage(squareImg);
    square3.scale = 0.1;
  
    square4=createSprite(1320,217,10,10); 
    square4.addImage(squareImg);
    square4.scale = 0.1;
  
    square5=createSprite(1320,182,10,10); 
    square5.addImage(squareImg);
    square5.scale = 0.1;
   
    square6=createSprite(1320,147,10,10); 
    square6.addImage(squareImg);
    square6.scale = 0.1;
    
    floor=createSprite(1380,325,10,10);
    floor.addImage(floorImg);
    floor.scale=0.1;
  
    floor2=createSprite(1400,325,10,10);
    floor2.addImage(floorImg);
    floor2.scale=0.1;
  
    floor3=createSprite(1420,325,10,10);
    floor3.addImage(floorImg);
    floor3.scale=0.1;
    
    gameOver=createSprite(300,100);
    gameOver.addImage(gameOverImg);
    gameOver.scale=0.5;
  
    restart=createSprite(width/2,height/2);
    restart.addImage(restartImg);
    restart.scale=0.5;
  
    triangle.debug=true
    gameOver.visible=false;
    restart.visible=false;
    DownEdge.visible=false;
    DownEdge2.visible=false;
    DownEdge3.visible=false;
    UpEdge.visible=false;
    UpEdge2.visible=false;
    UpEdge3.visible=false;
  
    
    obstaclesGroup=new Group();
    //squareGroup=new Group();
    baseGroup=new Group();
    UpGroup=new Group(); 
    DownGroup=new Group();
    cloudsGroup=new Group();
  
  
  
  
   //UpEdge2.depth=UpEdge.depth+1
  
   obstaclesGroup.add(square);
   obstaclesGroup.add(square2);
   obstaclesGroup.add(square3);
   obstaclesGroup.add(square4);
   obstaclesGroup.add(square5);
   obstaclesGroup.add(square6);
  
   obstaclesGroup.add(triangle)
   
   baseGroup.add(base);
   baseGroup.add(base2);
   baseGroup.add(base3);
   DownGroup.add(DownEdge);
   DownGroup.add(DownEdge2);
   DownGroup.add(DownEdge3);
    
   // avion sobre el fondo 
   
  avion.setCollider("rectangle",0,0,200,100)
     
     ground.depth=avion.depth
     avion.depth=avion.depth+20
  
  }
  //=============== LEVEL 1 DRAW ==========
  this.draw= function(){
    background("red");


    text("Puntuación: "+ score, 500,50);
  
     
    camera.position.x = avion.position.x+50;
    camera.positionY= avion.positionY-200
  
  
  
    avion.collide(base);
    avion.collide(base2);
    avion.collide(base3);
    avion.collide(UpEdge);
    avion.collide(UpEdge2);
    avion.collide(UpEdge3);
    avion.collide(triangle);
    //avion.collide(obstalcesGroup);
    //console.log(UpEdge.depth + "1")
    //console.log(UpEdge2.depth + "2")
    //console.log(UpEdge3.depth + "3")
    //console.log(avion.positionX+"1")
    console.log(avion.position.y+"posición")
    console.log(gameState);
    console.log(count+"hola");
    

  if(gameState===PLAY){
    if(DownGroup.isTouching(avion)){    
      avion.changeAnimation("avion05", avionAnimation4);
    }
    play();
  
  /*if(obstaclesGroup.isTouching(avion)||squareGroup.isTouching(avion)){
    gameState=END
    }
  if(gameState===END){
    count++;>
    end();
  }
  if(count===10){
    avion.destroy();
  }*/
    if(mousePressedOver(restart)) {
      reset();
    }
  if(keyDown("A")){
    X-=20;
  }else if(keyDown("D")){
    X+=20;
  }

  if(keyDown("W")){
    Y-=20;
  }else if(keyDown("S")){
    Y+=20;
  }
if(paused===true){
  avion.velocityX=0;
  avion.velocityY=0;

    






  drawSprites();
 
  // x = avion.x
  // fill(0,0,0,50);
  // strokeWeight(2)
  // stroke("white")
  // rect(x-170,camera.position.y-150, 500, 300);
  pauseButton.position(width/2-150,height/2-80);
  pauseButton.size(160,160)
  pauseButton.mouseOver(escala2);
  pauseButton.mouseOut(escalaOut2);


  menu2.position(width/2+50,height/2-100);
  menu2.size(225,195)
  space = false;



  return;

}


  drawSprites();

  textSize(20);
  //text("x: " + camera.position.x + " y: " + camera.position.y, camera.position.x, camera.position.y);
 
  }
}
}



// function buttonPlay(){
// avion.velocityX = 10 
// }
// function playGame(){
//  gameState = PLAY;
// //  button.visible=false;
// //  pauseButton.visible=true;
//  nextScene();
//  button.remove();
// }
function playGame(){
  gameState = PLAY;
 //  button.visible=false;
 //  pauseButton.visible=true;
  nextScene();
 
  button.remove();
 }
 
 function menuButton(){
  console.log("hey");
  gameScene.showScene(menu);
}
 


function escala(){
  button.position(width/2-100,height/2-100);
  button.size(200,200);

  
}

function escalaOut(){
  button.position(width/2-75,height/2-75);
  button.size(125,150);
}

function escala2(){



  
}

function escalaOut2(){

  pauseButton.position(width/2-150,height/2-80);
  pauseButton.size(160,160)
}



function play(){

  avion.velocityY = avion.velocityY + 0.8

  avion.velocityX = 10;

   //spawnClouds();
 
   avion.visible=true;
   base.visible=true;
   base2.visible=true;
    base3.visible=true;
   line.visible=true;


   if(avion.position.x%700===0&&position===false){
   ground.position.x+=1400;
   base.position.x+=1400
   UpEdge.position.x+=1400;
   DownEdge.position.x+=1400
  
   //console.log(ground.position.x+"ground1");
   position=true
   
   }else if(avion.position.x%1400===0&&position===true){
   ground2.position.x+=1400
   base2.position.x+=1400
   UpEdge2.position.x+=1400 
   DownEdge2.position.x+=1400
   // console.log(avion.position.x)
   //console.log(ground2.position.x+"ground2");
   position=false
   }else if(avion.position.x%2100===0&&place===true){
    ground3.position.x+=1400
    base3.position.x+=1400
    UpEdge3.position.x+=1400 
    DownEdge3.position.x+=1400
   }
 
    score = score + Math.round(getFrameRate()/60); 


     if(keyDown("UP_ARROW")) {
    
      avion.changeAnimation("avion02", avionAnimation)
      
      fix=true;
    }
    if(fix===true) {
      avion.velocityY = avion.velocityY -1.2
      avion.velocityY = -10
    
      avion.velocityX =10
      refix=false
     }
  
     if(keyDown("DOWN_ARROW")) {
    
      avion.changeAnimation("avion03", avionAnimation2);
      refix=true;
    }
    if(refix===true) {
      avion.velocityY = avion.velocityY +1.2 
      avion.velocityY = 20
      avion.velocityX =10
      fix = false 
     }
    
     if(keyDown("space")&& space===true){
      avion.velocityY = avion.velocityY +0.8
      avion.velocityY =-12
     
    
      avion.changeAnimation("avion01", avionImg);
     }

  
if(avion.position.y<=-90){
  camera.position.y = avion.position.y+100;
}else if(avion.position.y>=-100){
  camera.position.y = width/2-250;
}
    
    //establece un ciclo de vida a los objetos del juego, para que nunca sean destruidos
}  
  
   

 

function end(){
avion.velocityX=0;
avion.velocityY=0;
avion.changeAnimation("avion04", avionAnimation3);


}
function reset(){
gameState = PLAY;
gameOver.visible = false;
restart.visible = false;



}

function lifetime(){
  obstaclesGroup.setLifetimeEach(-1);
  cloudGroup.setLifetimeEach(-1);
}

function spawnClouds(){
if (frameCount % 100 === 0) {



 var cloud = createSprite(camera.position.x+10,random(10,300),40,10);

 console.log(cloud.positionY+"nube")

cloud.scale = 0.6;

var rand = Math.round(random(1,5));
switch(rand) {
  case 1: cloud.addImage(cloud1);
          break;
  case 2: cloud.addImage(cloud2);
          break;
  case 3: cloud.addImage(cloud3);
          break;
  case 4: cloud.addImage(cloud4);
          break;
  case 5: cloud.addImage(cloud5);
         break;

  default: break;
}
     
cloud.scale = 0.5;
//cloud.lifetime = 400;

//cloud.setCollider("rectangle",0,0,shrub.width/2,shrub.height/2)


  }
}