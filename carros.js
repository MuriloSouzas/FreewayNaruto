/*
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 318]; 
let velocidadeCarros = [2.8, 4.1, 3.2, 3.8, 5, 2];
let comprimentoCarros = 50;
let alturaCarros = 40

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros[i];
        }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}
*/

let xShuriken = [600, 600, 600, 600, 600, 600];
let yShuriken = [40, 96, 150, 210, 260, 318]; 
let velocidadeShuriken = [2.8, 4.1, 3.2, 3.8, 5, 2];
let comprimentoShuriken = 50;
let alturaShuriken = 40;

function mostraShuriken(){
    for(let i = 0; i < imagemShuriken.length; i = i + 1){
  image(imagemShuriken[i], xShuriken[i], yShuriken[i], 50, 40);
  }
}

function movimentaShuriken(){
    for(let i = 0; i < imagemShuriken.length; i = i + 1){
        xShuriken[i] -= velocidadeShuriken[i];
        }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemShuriken.length; i = i + 1){
        if(passouTodaATela(xShuriken[i])){
                xShuriken[i] = 600;
        }
    }
}

function passouTodaATela(xShuriken){
    return xShuriken < - 50;
}