const argument = parseInt(process.argv[2]);

if (isNaN(argument)) {
  console.log("Veuillez fournir un nombre en argument.");
} else if (argument < 2) {
  console.log(argument + " n'est pas un nombre premier.");
} else if (argument === 2) {
  console.log(argument + " est un nombre premier.");
} else {
  let x = argument;
  let x_prev = 0;
  while (Math.abs(x - x_prev) > 1) {
    x_prev = x;
    x = (x + argument / x) / 2;
  }
  let isPrime = true;
  for (let i = 2; i <= Math.floor(x); i++) {
    if (argument % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(argument + " est un nombre premier.");
  } else {
    console.log(argument + " n'est pas un nombre premier.");
  }
}
