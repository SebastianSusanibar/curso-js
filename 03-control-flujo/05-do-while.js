

let i = 2;

//primero se verifica la condicion y luego se ejecuta el codigo
// while (i < 2) {
//     if (i % 2 == 0){
//         console.log('Numero par', i);
        
//     }
//     i++;
// }

//Primero se ejecuta el codigo y luego se verifica la condicion
do {
    if (i % 2 == 0){
        console.log('Numero par', i);
        
    }
    i++;
} while (i<2);