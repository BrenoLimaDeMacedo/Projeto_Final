let lista_palav = ['amarelo', 'aviao', 'bolo', 'cama', 'doce', 'estojo', 'faca', 'geleia', 'janela', 'noite', 'acender', 'basquete', 'champanhe', 'desalmado', 'eloquente', 'afobado', 'amendoim', 'banheiro', 'caatinga', 'forca'];

let palav = lista_palav[Math.floor(Math.random() * lista_palav.length)];

let cha = 6;
let ace = 0;

let ima = 0;

let posicao;

for (posicao = 0; posicao < palav.length; posicao++) {
    let cria = document.createElement("span");
    cria.setAttribute('id', posicao);

    let div = document.getElementById("palavra");
    div.appendChild(cria);
}

let alfa = "abcdefghijklmnopqrstuvwxyz";
let letra_alfa = alfa.split("");

for (posicao = 0; posicao < letra_alfa.length; posicao++) {
    let botao_letra = document.createElement("button");
    let letra = document.createTextNode(letra_alfa[posicao]);
    
    botao_letra.appendChild(letra);
    botao_letra.setAttribute('onclick', 'escolheLetra(\''+letra_alfa[posicao]+'\')');
    botao_letra.setAttribute('id', letra_alfa[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao_letra);
}

function escolheLetra(letra) {

    let aceu = false;

    for (posicao = 0; posicao < palav.length; posicao++) {
        if (letra === palav[posicao]) {
            let s = document.getElementById(posicao);
            let letr = document.createTextNode(letra);

            s.appendChild(letr);

            let botao_click = document.getElementById(letra);
            botao_click.setAttribute('class', 'acertos');
            botao_click.removeAttribute('onclick');

            ace++;
            aceu = true;
        }
    }

    if (aceu === false) {
        ima++;
        document.getElementById("forca").src = "imagem/forca-"+ima+".png";

        var botao_click = document.getElementById(letra);
        botao_click.setAttribute('class', 'erros');
        botao_click.removeAttribute('onclick');

        cha--;
    }

    if (cha === 0) {
        let perdeu = document.createElement("p");
        let caso1 = document.createTextNode("Você perdeu!");
        perdeu.appendChild(caso1);

        let botao_click = document.createElement("button");
        let novamente = document.createTextNode("jogar novamente");
        
        botao_click.appendChild(novamente);
        botao_click.setAttribute('class', 'mensagem');
        botao_click.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(perdeu);
        div.appendChild(botao_click);
    }

    if (ace === palav.length) {
        let ganhou = document.createElement("p");
        let caso2 = document.createTextNode("Você venceu!");
        ganhou.appendChild(caso2);

        let botao_click = document.createElement("button");
        let novamente = document.createTextNode("jogar novamente");
        
        botao_click.appendChild(novamente);
        botao_click.setAttribute('class', 'mensagem');
        botao_click.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(ganhou);
        div.appendChild(botao_click);
    }
}