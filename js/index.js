const squareGrid = document.querySelector("#play-grid");
const btn = document.querySelector("#btn-play");
const btnAgain = document.querySelector("#btn-again");
const result = document.querySelector("#result");
let resultCont = document.querySelector(".result-cont");
let PopUpRes = document.querySelector("#Pop-up-result");
let PopUpH3 = document.querySelector("#Pop-up-result h3");
let PopUpUl = document.querySelector("#Pop-up-result ul");
let iconNoCheck = document.querySelector("#icon-nocheck");
let iconCheck = document.querySelector("#icon-check");

btn.addEventListener("click", playGenerate)
btnAgain.addEventListener("click", restartFlow);

let n = 0
const numBombs = 16;
let numSquares = 0;
let squareSqrt;
let bombsCheck;


function playGenerate(e){
    e.preventDefault()
    resultCont.classList.add("CM-display")
    let levelInput = document.querySelector("#level").value;
    switch(levelInput){
        case "simple":
            numSquares = 100;
            break;
        case "medium":
            numSquares = 81;
            break;
        case "difficult":
            numSquares = 49;
            break;
    }
    squareSqrt = Math.sqrt(numSquares)
    const bombs = generateBombs(numBombs , numSquares)
    
    for(let i = 1; i <= numSquares; i++){
        const squareCheck = createSquare(squareSqrt, i)
        clickColorSquare(squareCheck, bombs, i)   
    }
}


function clickColorSquare(squareCheck, bombs, i){
    squareCheck.addEventListener("click", function(){
        for(let j = 0; j <= bombs.length; j++){
            if(i === bombs[j]){
                bombsCheck = true 
            } 
        } 
        if(bombsCheck){
            squareCheck.classList.add("death");
            bombsCheck = true
            loserMatch(bombsCheck, n);   
        } else{
            squareCheck.classList.add("safe");
            bombsCheck = false 
        }
        n++ 
        result.innerHTML = n
    })
}

 
function loserMatch(bool, n){
    let popUpResult;
    PopUpRes.classList.add("pop-up-active");
    iconCheck.classList.add("d-none")
    PopUpH3.innerHTML = "Hai perso!"
    PopUpUl.innerHTML = `<li id="result">Corrette: ${n - 1}</li>
                             <li>Sbagliate: ${n - (n - 1)}</li>`;
    popUpResult = PopUpUl.innerHTML                         
     if(!bool){
        PopUpUl.innerHTML = `<li id="result">Corrette: ${n - 1}</li>
                             <li>Sbagliate: ${n - (n - 1)}</li>`;
        PopUpH3.innerHTML = "Hai vinto!"
        iconNoCheck.classList.add("d-none")
     }
     squareGrid.classList.add("d-none")
    
    return bool

}

function generateBombs(numBomb , numSquares){
    const bombs = [];
    while(bombs.length <= numBomb){
        const bombRandom = getRandomInt(1, numSquares)
        if(bombs.indexOf(bombRandom) < 0){
            bombs.push(bombRandom)
        } 
    }
    return bombs
}

function createSquare(squareSqrt, index){
    let square = document.createElement("div")
    square.classList.add("square");
    square.style.width = `calc(100% / ${squareSqrt})`
    square.style.height = square.style.width;
    square.innerText = `${index}`
    squareGrid.appendChild(square)
    return square;
}
 



function restartFlow(){
    PopUpRes.classList.add("d-none")
}

                  

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
