"use 'strict";

//console.log(randNumber);


// document.querySelector(".coins").textContent = "Tail";
document.querySelector(".btn").addEventListener("click", function () {
    let randNumber = Math.trunc(Math.random() * 2) + 1;
    if (randNumber === 1) {
        document.querySelector(".coins").textContent = "Tail";
        // document.querySelector("body").style.backgroundColor = "#ffff00";
    }
    else if (randNumber === 2) {
        document.querySelector(".coins").textContent = "Head";
        document.querySelector("body").style.backgroundColor = "#00d4ff";
    }
    
});