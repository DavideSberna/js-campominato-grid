





const squareGrid = document.querySelector("#play-grid");
const btn = document.querySelector("#btn-play");

btn.addEventListener("click", playGenerate)

function generateBombs(numBomb , numSquares){
    const bombs = [];
    while(bombs.length <= numBomb){
        const bombRandom = getRandomInt(1, numSquares)
        if(bombs.indexOf(bombRandom) === -1){
            bombs.push(bombRandom)
        } 
    }  
    return bombs
}



function generateSquare(index, squareRow){
     
    const square = document.createElement("div");
    square.style.width = `calc(100% / ${squareRow})`;
    square.style.height = square.style.width;
    square.classList.add("square")
    square.innerText = index;
    squareGrid.appendChild(square);
    return square;
}


function playGenerate(e){
    e.preventDefault()
    let levelInput = document.querySelector("#level").value;
    const numBombs = 16;
    let numSquares = 0;

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
    let squareRow = Math.sqrt(numSquares)
    
    const bombs = generateBombs(numBombs, numSquares)
    console.log(bombs)
    

    for(let i = 1; i <= numSquares; i++){
        const square = generateSquare(i, squareRow)
        squareGrid.appendChild(square);
        square.addEventListener("click", function(){
            let bombsCheck;
            for(let i = 0; i < bombs.length; i++){
                bombsCheck = bombs[i];
                if(i === bombsCheck){
                      bombsCheck = true;
                    }
                    bombsCheck = false;
            }
            if(bombsCheck){
                console.log("è vero")
                console.log(i)
            } else{
                console.log("è falso")
                console.log(i)
            }
            
            
        })
        
    }
} 




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
