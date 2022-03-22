console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro '
);

const idadeComprador = 10;
const estaAcompanhado = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem!!");
} else {
    console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!")
} else /*pessoa menor de idade*/ {
    console.log("Você não pode comprar")
}

console.log(listaDeDestinos);