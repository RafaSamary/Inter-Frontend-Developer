

// Metodo Filter


const frutas = ['maçã fuji','maçã gala','maçã verde','laranja','abacaxi','abacate']

let novasFrutas = frutas.filter((fruta) => fruta.includes('maçã')); // Filter com Arrow Function// includes para procurar no array
                                                    
console.log(novasFrutas);