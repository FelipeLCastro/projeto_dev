// class Player{
//     constructor(x,y,image){
//         this.x = x
//         this.y = y
//         this.image = image
//     }

//     draw(){
//         ctx.beginPath()
//         ctx.drawImage(this.x,this.y,this.image)
//     }
// }

// const player = new Player(125,550,image.src = 'img/sprite_main.png')
// player.draw()

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let nuvem1= {
    x:300 ,
    y:640 ,
    largura:130 ,
    altura: 60,
    velocidade: 2,
    direcao_x: 1,
    direcao_y:0
}

let nuvem2= {
    x:20 ,
    y:500 ,
    largura:130 ,
    altura: 60,
    velocidade: 3,
    direcao_x: 1,
    direcao_y:0
}

let nuvem3= {
    x:200 ,
    y:350 ,
    largura:130 ,
    altura: 60,
    velocidade: 4,
    direcao_x: 1,
    direcao_y:0
}

// let background= {
//     x:0 ,
//     y:0 ,
//     largura:700 ,
//     altura: 800,
//     velocidade: 0,
//     direcao_x: 0,
//     direcao_y:0
// }

// let background = new Image();
// imagem_nuvem1.src="img/background_jogo.png";

let imagem_nuvem1 = new Image();
imagem_nuvem1.src="img/nuvem1.png";

let imagem_nuvem2 = new Image();
imagem_nuvem2.src="img/nuvem2.png";

let imagem_nuvem3 = new Image();
imagem_nuvem3.src="img/nuvem3.jpg";

function movimento(){
    
    if(nuvem1.x <= 300)
        nuvem1.direcao_x = 1;
    if(nuvem1.x + nuvem1.largura >= 700)
        nuvem1.direcao_x= -1;
    
        if(nuvem2.x <= 0)
        nuvem2.direcao_x = 1;
    if(nuvem2.x + nuvem2.largura >= 700)
        nuvem2.direcao_x= -1;

        if(nuvem3.x <= 0)
        nuvem3.direcao_x = 1;
    if(nuvem3.x + nuvem3.largura >= 700)
        nuvem3.direcao_x= -1;

    nuvem1.x=nuvem1.x + nuvem1.velocidade*nuvem1.direcao_x;
    nuvem1.y=nuvem1.y + nuvem1.velocidade*nuvem1.direcao_y;

    nuvem2.x=nuvem2.x + nuvem2.velocidade*nuvem2.direcao_x;
    nuvem2.y=nuvem2.y + nuvem2.velocidade*nuvem2.direcao_y;

    nuvem3.x=nuvem3.x + nuvem3.velocidade*nuvem3.direcao_x;
    nuvem3.y=nuvem3.y + nuvem3.velocidade*nuvem3.direcao_y;

    
}



function desenhar(){
ctx.clearRect(0,0,700,800);

    ctx.drawImage(imagem_nuvem1,nuvem1.x,nuvem1.y,nuvem1.largura,nuvem1.altura);
    ctx.drawImage(imagem_nuvem2,nuvem2.x,nuvem2.y,nuvem2.largura,nuvem2.altura);
    ctx.drawImage(imagem_nuvem3,nuvem3.x,nuvem3.y,nuvem3.largura,nuvem3.altura);
    // ctx.drawImage(background,background.x,background.y,background.largura,background.altura);
}




function atualizar(){
    desenhar();
    movimento();
    requestAnimationFrame(atualizar);

}

atualizar();

//  29;00 background
