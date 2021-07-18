/*
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  adicionarPontos();
  marcarPontos();
}
*/
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(0,255,0);
  mostraAtor();
  mostraShuriken();
  movimentaShuriken();
  movimentaNaruto();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  adicionarPontos();
  marcarPontos();
}