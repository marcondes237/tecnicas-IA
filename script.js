const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que Lowen é contratada pela família Crawford?",
        alternativas: [
            {
                texto: "Para terminar os livros de Verity!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Para cuidar dos filhos de Verity",
                afirmacao: "falso"
            }           
            
        ]
    },
    {
        enunciado: "O que Lowen encontra na casa dos Crawford?",
        alternativas: [
            {
                texto:"Um manuscrito autobiográfico de Verity",
                afirmacao:"afirmacao"
            },
            {
                texto: " Uma coleção de cartas de Jeremy",
                afirmacao:"falso"
            }
        ]
    },
    {
        enunciado: "Qual é o principal mistério do livro?",
        alternativas: [
            {
                texto:" O conteúdo e a veracidade do manuscrito de Verity",
                afirmacao:"afirmacao"
            },
            {
                texto:"O desaparecimento de Lowen",
                afirmacao:"falso"
            }
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você e time carta ou manuscrito?",
        alternativas: [
            {
                texto:"manuscrito",
                afirmacao:"afirmacao"
            },
            {
                texto:"carta",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Qual é a relação entre Lowen e Jeremy?",
        alternativas: [
            {
                texto: "Eles desenvolvem uma relação amorosa",
                afirmacao:"afirmacao"
            },
            {
                texto: "Eles são apenas colegas de trabalho",
                afirmacao:"falso"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();