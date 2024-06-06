let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y


function setup() {
    createCanvas(800, 600);
    background(color(100, 0, 0));
    cor = color(random(0, 255), random(0, 255), random(0,255));
posicaoHorizontal = 200;
  posicaoVertical = 200;
    }
    
function draw() {
fill(cor)
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) posicaoHorizontal = posicaoHorizontal -=random(0, 3);
  if(mouseX > posicaoHorizontal) posicaoHorizontal = posicaoHorizontal += random(0, 3);
  
  if(mouseY < posicaoVertical) posicaoVertical = posicaoVertical -= (random(0, 3))
  if(mouseY > posicaoVertical) posicaoVertical = posicaoVertical += random(0, 3);
  
  if(mouseIsPressed)
     cor = color(random(0, 255), random(0, 255), random(0,255), random(0, 100));
}
