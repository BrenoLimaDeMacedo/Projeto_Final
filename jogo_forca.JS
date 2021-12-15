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

alfabeto = 'abcdefghijklmnopqrstuvyxwz'
let letras = alfabeto.split('')

for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement('text')
    let letra = document.createTextNode(letras[posicao]);

    botao.appendChild(letra)
    botao.setAttribute('id', letras[posicao])

    let div = document.getElementById("letras")
    div.appendChild(botao)
}

function escolheLetra() {
    let alfa = document.getElementById('letra')
    let letra_alfa = alfa.value

    let aceu = false;

    for (posicao = 0; posicao < palav.length; posicao++) {
        if (letra_alfa === palav[posicao]) {

            let s = document.getElementById(posicao);
            let letr = document.createTextNode(letra_alfa);

            let botao = document.getElementById(letra_alfa)
            botao.setAttribute('class', 'acertos')

            s.appendChild(letr);

            ace++;
            aceu = true;
        }
    }

    if (aceu === false) {
        ima++;
        document.getElementById("forca").src = "imagem/forca-"+ima+".png";

        let botao = document.getElementById(letra_alfa)
        botao.setAttribute('class', 'erros')

        cha--;
    }

    if (cha === 0) {
        let perdeu = document.createElement("p");
        let caso1 = document.createTextNode("Você perdeu!");
        perdeu.appendChild(caso1);

        let botao_click = document.createElement("text");
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

        let botao_click = document.createElement("text");
        let novamente = document.createTextNode("jogar novamente");
        
        botao_click.appendChild(novamente);
        botao_click.setAttribute('class', 'mensagem');
        botao_click.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(ganhou);
        div.appendChild(botao_click);
    }
}