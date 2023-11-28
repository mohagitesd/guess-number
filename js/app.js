const inputValue = document.getElementById("inputValue");
const btnCheck = document.getElementById("btnCheck");
const textTry = document.getElementById("textTry");
const textResponse = document.getElementById("textResponse");

function randInt(mini, maxi) {
    return mini + Math.floor(maxi * Math.random());
}
/*for (let i = 1; i < 100; i++) {
    console.log(randInt(1, 6));
}*/
let computerNumber = randInt(1, 100);
console.log(computerNumber);

let guessTry = 10;

btnCheck.onclick = function () {
    let userNumber = Number(inputValue.value);
    if (userNumber == computerNumber) {


        console.log("Youpi");

    } else {
        if (userNumber > computerNumber) {
            textResponse.innerHTML = "Trop grand";
        } else {
            textResponse.innerHTML = "Trop petit"
        }
        // retirer un essai
        /*  guessTry = guessTry-1;
          guessTry -= 1;*/
        guessTry--;
        textTry.innerHTML = "Encore " + guessTry + " essais";
        if (guessTry <= 0) {
            textResponse.innerHTML = "Perdu, aucun essai restant";
            btnCheck.disabled = true;
        }





    }
}


