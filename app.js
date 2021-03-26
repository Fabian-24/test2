let coaie = new Audio("coaie.mpeg");
let fery = document.querySelector(".fery");

fery.addEventListener("click" , feryfunct);

function feryfunct () {
    coaie.play();
}