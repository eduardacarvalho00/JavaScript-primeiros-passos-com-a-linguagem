console.log("\n Trabalhando com looping");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro '
);

const idadeComprador = 10;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;
let contador = 0;
let destinoExiste = false

while (contador < 3) {
    let destinoExiste

    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe ", destinoExiste)

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

/* outro jeito de fzr while, com for 

for(let contador = 0 ; contador <3 ; contador++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true
    }
}
*/