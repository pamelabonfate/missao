const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é um fator de risco conhecido para o câncer de pulmão?",
        alternativas: [
            {
                texto: "Exposição ao sol em excesso",
                afirmacao: "A exposição excessiva ao sol está mais associada ao câncer de pele do que ao câncer de pulmão."
            },
            {
                texto: "Tabagismo",
                afirmacao: "O tabagismo é um fator de risco significativo para o câncer de pulmão, sendo responsável por uma grande parte dos casos diagnosticados."
            }
           
        ]
    },
    {
        enunciado: "Qual tipo de câncer é mais frequentemente associado ao HPV (Papilomavírus Humano)?",
        alternativas: [
            {
                texto: "Câncer cervical",
                afirmacao: "O HPV é amplamente reconhecido como um fator de risco significativo para o câncer cervical, e a vacinação contra o HPV pode ajudar a prevenir esse tipo de câncer."
            },
            {
                texto: "Câncer de mama",
                afirmacao: "Embora o HPV esteja relacionado a vários tipos de câncer, o câncer de mama não é um dos principais associados a este vírus."
            }
           
        ]
    },
    {
        enunciado: "Qual é uma das abordagens principais no tratamento do câncer em estágio inicial?",
        alternativas: [
            {
                texto: "Quimioterapia",
                afirmacao:"A quimioterapia é frequentemente usada para tratar cânceres mais avançados ou metastáticos, e não é a abordagem principal para cânceres em estágio inicial."
            },
            {
                texto: "Cirurgia",
                afirmacao:"A cirurgia é frequentemente uma das principais abordagens no tratamento de câncer em estágio inicial, visando remover o tumor e tecidos afetados antes que se espalhe para outras partes do corpo."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa () {
    for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement ("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", ()=>
    respostaSelecionada (alternativa));
    caixaAlternativas.appendChild (botaoAlternativa);
    }
}
function respostaSelecionada (opçãoSelecionada){ 
    const afirmacao = opçãoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta ();
}
function mostraResultado (){
    caixaPerguntas.textContent = "Resulmindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
    mostraPergunta () ;