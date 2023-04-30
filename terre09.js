const arguments1 = process.argv[2];
let x = arguments1;
let y = 1;
const e = 0; // Précision

while (x - y > e) {
  x = (x + y) / 2;
  console.log('Valeur de x: ' + x)
  y = arguments1 / x;
  console.log('Valeur de y: ' + y)
}

console.log("La racine carée de " + arguments1 + " est : " + x );

