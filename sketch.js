var rua,imagemdarua
var runner,imagemrunner
var bordaE, bordaD

function preload(){
  //imagens pré-carregadas
  imagemdarua = loadImage("path.png")
  imagemrunner = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  rua = createSprite(200, 200)
  rua.scale = 1.28
  runner = createSprite(200, 330, 25, 25)
  runner.scale = 0.05
  rua.addImage(imagemdarua)
  runner.addAnimation("corredor",imagemrunner)
  bordaE = createSprite(0,0,100,800)
  bordaE.visible = false
  bordaD = createSprite(410,0,100,800)
  bordaD.visible = false
}

function draw() {
  background(0);
  drawSprites();

  runner.x = World.mouseX
  runner.collide(bordaE)
  runner.collide(bordaD)
  rua.velocityY = 3
  if(rua.y>400){
    rua.y = height/2
  }


}
