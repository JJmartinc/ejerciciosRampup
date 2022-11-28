console.log("Welcome to JS!");


/******       IF - ElSE       ****** */
//! EJERCICIO SEMAFORO
//? 3 CONDICIONES --> GREEN, YELLOW , RED


function ejemploIfElse() {

    // 3 condiciones --> green,yellow,red
    let color = prompt("Introduzca color");

    if (color === "green") {
        console.log("Puedes pasar");
    } else if (color === "yellow") {
        console.log("Cruza. Cambiará rápido");
    }
    else if (color === "blue") {
        console.log("No sé que es esto. Corre!");
    }
    else { // red
        console.log("Espera");
    }
}

/********SWITCH*********/
function ejemploSwitch() {
    // 3 condiciones --> green,yellow,red
    let color = prompt("Introduzca color");

    switch (color) {
        case "green":
            console.log("Puedes pasar");
            break;

        case "yellow":
            console.log("Cruza. Cambiará rápido");
            break;
        case "blue":
            console.log("No sé que es esto. Corre!");
            break;

        case "red":
            console.log("Espera");
            break;

        default:
            console.log("Error de semáforo");
            break;
    }

}


function ejemploFor(){
    for (let i = 1996; i <= 2022; i++) {
        
        if(i%2==0){
            continue;
        }

        if (i == 2010) {
            break;
        }
        console.log("Año "+i);
    }
}

function ejemploWhile(){

    let i = 0;
    while(i <= 2022){
        
        if(i%2 == 0){
            i++;
            continue;
        }

        if (i > 2011) {
            break;
        }
        
        console.log("Año "+i);
        i++;
    }
}

function ejemploDoWhile(){
    i = 0;
    let text ="";
    do {
        text += "The number is " + i;
        console.log(text);
        i++;
      }
      while (i < 10);
}