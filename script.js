const btnGerarFrase = document.querySelector("#btnGerarFrase")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let frases = [
    "Persista além dos limites.",
    "Sonhe, acredite, conquiste.",
    "Força interior vence obstáculos.",
    "Resiliência gera sucesso.",
    "Atitude molda o destino.",
    "Fé move montanhas.",
    "Supere-se diariamente.",
    "Foco gera realização.",
    "Confie na sua jornada.",
    "Sorria, avance, inspire-se."
]
let fraseAleatoria = Math.floor(Math.random() * frases.length)


function cliqueDoBotaoGerarFrase (event){
    event.preventDefault() //impedindo o meu botão de fazer o padrão (reiniciar a página).
    trocaDeTela()

    screen2.querySelector("p").innerText = frases[fraseAleatoria]
}

function trocaDeTela (){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

btnGerarFrase.addEventListener('click', cliqueDoBotaoGerarFrase)