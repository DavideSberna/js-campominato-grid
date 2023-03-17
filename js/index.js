





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
            let bombsCheck = false; 
            for(let j = 1; j <= bombs.length -1 ; j++){
                if(i === bombs[j]){
                      bombsCheck = true;
                    }     
            }
            if(!bombsCheck){
                square.classList.add("safe");
            } else{
                square.classList.add("death");
            }

            
            
            
        })
        
    }
} 




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
