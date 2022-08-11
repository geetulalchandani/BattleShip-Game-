//math of i * boardsize + j because you know you only have two variables to work with when creating a 2D array in JS



//Made a variable to get grid-container from html 

const container = document.getElementById("grid-container");


//function to use to generate a random whole number 

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }



class Board {
  constructor(boardSize) {
    let spots = [];
    const ships = [1,2,3,4,5];

    // create board using variables defined above
    // *if time: remove the rows and columns *
    for (let i = 0; i < boardSize; i++) {
      spots[i] = [];
      for (let j = 0; j < boardSize; j++) {
        spots[i][j] = null;
      }
    }

    // populate board


    

    // document.getElementById("Start Game").addEventListener("click", () => battleship.()); = how to pass events below into this?  

    // loop through ship length array   


    for (let s = 0; s < ships.length; s++) {
        let shipLength = ships[s];
        // While the ship has not been placed, keep trying again in a loop 
        let tries = 0;
        while (tries < 10000) {
            // choose a random spot
            let i = getRandomArbitrary(1, 10)
            let j = getRandomArbitrary(1, 10)

            // if orientation is true than ship will be places up / down
            // if oritentation is false, ship will be palces left, right
            let orientation = Math.random() < 0.5;

            // if increasing, then we do +k, else we do -k
            let increasing = Math.random() < 0.5;
            
 
            let emptyCount = 0;
            for (let k = 0; k < shipLength; k++) {
                // check if we have enough empty spaces
                if (orientation === true &&  increasing === true &&     j + k < boardSize   && spots[i][j + k] !== 'X') emptyCount++
                if (orientation === true &&  increasing === false &&    j - k >= 0          && spots[i][j - k] !== 'X') emptyCount++
                if (orientation === false && increasing === true &&     i + k < boardSize   && spots[i + k][j] !== 'X') emptyCount++
                if (orientation === false && increasing === false &&    i - k >= 0          && spots[i - k][j] !== 'X') emptyCount++
            }

            if (emptyCount === shipLength) {
                // we are clear to place the ship
                for (let k = 0; k < shipLength; k++) {
                    if (orientation === true &&  increasing === true &&     j + k < boardSize   && spots[i][j + k] !== 'X') spots[i][j+k] = 'X';
                    if (orientation === true &&  increasing === false &&    j - k >= 0          && spots[i][j - k] !== 'X') spots[i][j-k] = 'X';
                    if (orientation === false && increasing === true &&     i + k < boardSize   && spots[i + k][j] !== 'X') spots[i+k][j] = 'X';
                    if (orientation === false && increasing === false &&    i - k >= 0          && spots[i - k][j] !== 'X') spots[i-k][j] = 'X';
                }
                break;
            }

            tries++;
        }
        }   
        
        console.log(spots)
        this.spots = spots;
        this.boardSize = boardSize;
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const node = document.createElement("div");
                const individualGridItem = "grid-item" + (i * boardSize + j);
                node.id = individualGridItem;
                node.classList.add("grid-item");
                container.appendChild(node);
                const individualGridItemSelector = document.getElementById(individualGridItem);
                individualGridItemSelector.addEventListener('click', () => {
                if (this.spots[i][j] === "X") {
                    individualGridItemSelector.style.backgroundColor = "red";
                } else {
                    individualGridItemSelector.style.backgroundColor = "grey";
                }
            })
        };

        document
            .getElementById("reset")
            .addEventListener("click", () => battleship.resetGame());
    
    }   

  resetGame() {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        this.spots[i][j] === "";
        document.getElementById(
          "grid-item" + (i * this.boardSize + j)
        ).style.backgroundColor = "white";
        }
      }
    }

    // winGame () {
    

    // checkWin(emptyCount) { 

  // if click document.getElementById(individualGridItem); == 15 you won logic prompt. 
//     emptyCount = 15;
//     return prompt("you won!");

// }



// if all the red squares are clicked == user won 

    // }

  }



  const battleship = new Board(10);
  


















// updateMove () {
//     --already stored in the above variable
// }

// currentPlayer () {

// }



