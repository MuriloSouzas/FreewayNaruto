/*
let xAtor = 85;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
 }

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeDescer()){
    yAtor += 3;
    } 
  }
}
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 17)
    if (colisao){
      voltaInicio();
      somColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1}
    }
  }
}

function voltaInicio(){
  yAtor = 370;
}

function adicionarPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,255,0);
  text(meusPontos, width / 5, 27);
}

function marcarPontos(){
  if(yAtor < 15){
    meusPontos +=1;
    somPonto.play();
    voltaInicio();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0
}

function podeDescer(){
  return yAtor < 370;
}
*/

let xNaruto = 85;
let yNaruto = 335;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemNaruto, xNaruto, yNaruto, 100, 100);
 }

function movimentaNaruto(){
  if (keyIsDown(UP_ARROW)){
    yNaruto -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeDescer()){
    yNaruto += 3;
    } 
  }
}
function verificaColisao(){
  for (let i = 0; i < imagemShuriken.length; i = i + 1){
    colisao = collideRectCircle(xShuriken[i], yShuriken[i], comprimentoShuriken - 10, alturaShuriken - 80, xNaruto , yNaruto, 100)
    if (colisao){
      voltaInicio();
      somColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1}
    }
  }
}

function voltaInicio(){
  yNaruto = 335;
}

function adicionarPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,69,0);
  text(meusPontos, width / 5, 27);
}

function marcarPontos(){
  if(yNaruto < 15){
    meusPontos +=1;
    somPonto.play();
    voltaInicio();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0
}

function podeDescer(){
  return yNaruto < 335;
}




