var maze1, maze;
 function preload()
{
     maze = loadImage("images/pac-man.jpg");
 } 
 function setup() 
 { 
   createCanvas(650, 720);
  maze1  = createSprite(325,30,585,10);
  maze2 = createSprite(325,650,585,10);
  maze3 = createSprite(610,532,10,245);
  maze4 = createSprite(37,532,10,245);
  maze5 = createSprite(610,130,10,200);
  maze6 = createSprite(37,130,10,200);
  maze7 = createSprite(92,225,115,10);
  maze8 = createSprite(557,225,115,10);
  maze9 = createSprite(557,295,115,10);
  maze10 = createSprite(92,295,115,10);
  maze11 = createSprite(92,415,115,10);
  maze12 = createSprite(92,345,115,10);
  maze13 = createSprite(557,415,115,10);
  maze14 = createSprite(557,345,115,10);
  maze15 = createSprite(505,382,10,75);
  maze16 = createSprite(143,382,10,75);
  maze17 = createSprite(505,257,10,75);
  maze18 = createSprite(143,257,10,75);
  maze19 = createSprite(447,230,20,140);
  maze20 = createSprite(198,230,20,140);
  maze21 = createSprite(323,167,143,17);
  maze22 = createSprite(323,410,143,17);
  maze23 = createSprite(323,533,143,17);
  maze24 = createSprite(57,532,50,17);
  maze25 = createSprite(588,532,47,17);
  maze26 = createSprite(417,473,80,20);
  maze27 = createSprite(230,473,80,20);
  maze28 = createSprite(447,380,20,78);
  maze29 = createSprite(198,380,20,78);
  maze30 = createSprite(323,440,20,80);
  maze31 = createSprite(323,567,20,77);
  maze32 = createSprite(323,200,20,77);
  maze33 = createSprite(198,562,20,77);
  maze34 = createSprite(448,562,20,77);
  maze35 = createSprite(415,230,77,20);
  maze36 = createSprite(230,230,77,20);
  maze37 = createSprite(470,595,185,20);
  maze38 = createSprite(177,595,185,20);
  maze39 = createSprite(115,96,60,42);
  maze40 = createSprite(531,96,60,42);
  maze41 = createSprite(417,96,80,40);
  maze42 = createSprite(230,96,80,40);
  maze43 = createSprite(115,170,60,20);
  maze44 = createSprite(530,170,60,20);
  maze45 = createSprite(325,75,20,80);
  maze50 = createSprite(530,473,60,20);
  maze51 = createSprite(115,473,60,20)

   }
    function draw()
     { 

    background(maze);
        drawSprites(); 
    fill("red")
    text(mouseX+","+mouseY, mouseX, mouseY)

  }






// var canvas, backgroundImage;
// var carsAtEnd
// var gameState = 0;
// var playerCount;
// var allPlayers;
// var distance = 0;
// var database;

// var form, player, game;

// var cars, car1, car2, car3, car4;

// var track, car1_img, car2_img, car3_img, car4_img;

// function preload(){
//   track = loadImage("../images/track.jpg");
//   car1_img = loadImage("../images/car1.png");
//   car2_img = loadImage("../images/car2.png");
//   car3_img = loadImage("../images/car3.png");
//   car4_img = loadImage("../images/car4.png");
//   ground = loadImage("../images/ground.png");
// }

// function setup(){
//   canvas = createCanvas(650,720);

// //  database = firebase.database();
// //  game = new Game();
// //  game.getState();
//   // game.start();
// }


// function draw(){
//   background(0);















//   drawSprites();
//   // if(playerCount === 4){
//   //   game.update(1);
//   // }
//   // if(gameState === 1){
//   //   clear();
//   //   game.play();
//   // }
//   // if(gameState === 2){
//   //   game.end();
//   // }
// }
