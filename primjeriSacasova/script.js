// var limit = 100;
// var iznos = 88;

// for (var i = 0; i < iznos; i++) {
//   if (i < limit) {
//     console.log("nije dovoljno");
//     if (i > limit) {
//       console.log("Ubacio si previse");
//       if ((i = limit)) {
//         console.log("tacan iznos");
//       }
//     }
//   }
// }

//1$ = 100c;
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;

var coins = 135;

while (coins > 0) {
  if (coins >= 25) {
    coins = coins - 25;
    quarters++;
  } else if (coins >= 10) {
    coins = coins - 10;
    dimes++;
  } else if (coins >= 5) {
    coins = coins - 5;
    nickels++;
  } else if (coins >= 1) {
    coins = coins - 1;
    pennies++;
  }
}
console.log(quarters);
console.log(dimes);
console.log(nickels);
console.log(pennies);

// while (i < iznos) {
//   i += 25;
//   counter++;
// }
// console.log(counter);

// if (iznos > 0) {
//   while (iznos > 0) {
//     if (iznos >= 25) {
//       iznos = iznos - 25;
//       quarters++;
//     } else if (iznos >= 10) {
//       iznos = iznos - 10;
//       dimes++;
//     } else if (iznos >= 5) {
//       iznos = iznos - 5;
//       nickels++;
//     } else if (iznos >= 1) {
//       iznos = iznos - 1;
//       pennies++;
//     }
//   }

//   console.log(quarters);
//   console.log(dimes);
//   console.log(nickels);
//   console.log(pennies);
// }

// var kovanice = [50, 20, 10, 5, 1];
// var iznos = 387;
// var brojacKovanica = 0;

// for (var i = 0; i < kovanice.length; i++) {
//   var kovanicaVrijednost = kovanice[i];
//   var brojKovanicaOdTeVrijednosti = Math.floor(iznos / kovanicaVrijednost);

//   if (brojKovanicaOdTeVrijednosti > 0) {
//     brojacKovanica += brojKovanicaOdTeVrijednosti;
//     iznos %= kovanicaVrijednost;
//   }
// }

// console.log(`Za iznos 387 trebate ${brojacKovanica} kovanica.`);
