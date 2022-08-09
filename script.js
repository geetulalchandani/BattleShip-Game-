/* define functions inside of a class to organize what will happen on the board 
    needed functions: 
    fire a battle ship onto the board 
    check if that spot on the board has a battle ship from the other player 
    update move 
    create the ship 


*/






//Variables Required 

// const startGame = {
//     ship1: 
//     ship2: 
//     ship3: 
//     ship4: 
//     ship5:
//     intialHits:  
//     rows: 10
//     columns: 10 

//    board: [
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ["", "", "", "", "", "", "", "", "", "" ],
//         ];



// }
    
    
    
    
    
   
    

// create board through js for easier accesibility 
//math of i * boardsize + j because you know you only have two variables to work with when creating a 2D array in JS 


const container = document.getElementById("grid-container")






class Board {
    constructor (spots, boardSize) {
        this.spots = spots  
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const node = document.createElement("div");
                const individualGridItem = "grid-item" + (i * boardSize + j); 
                node.id = individualGridItem
                node.classList.add("grid-item")
                container.appendChild(node)
                
                const individualGridItemSelector = document.getElementById(individualGridItem);
                
                individualGridItemSelector.addEventListener('click', () => {
                    if (this.spots[i][j] === "X"){
                        individualGridItemSelector.style.backgroundColor = 'red';
                    } else {
                        individualGridItemSelector.style.backgroundColor = 'grey';
                    }
                    

                    
                });
            }
        }

    }

    generateShip (grid,) {
        








    }


    shipLocation () {

    }

    
    
    
    updateMove () {

    }
  




    currentPlayer () {



    }


    
    
}




// const battleship = new Board ([
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
//     ["", "", "", "", "", "", "", "", "", "" ],
// ]);


const battleship = new Board ([
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "X", "", "", "", "", "X", "", "" ],
    ["", "", "X", "", "", "", "", "", "", "" ],
    ["", "", "X", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "X", "", "", "X", "" ],
    ["", "", "", "", "", "X", "", "", "X", "" ],
    ["", "", "", "", "", "", "", "", "X", "" ],
    ["", "X", "X", "X", "X", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
], 10);




//math.random.math.object for the board 
//

// input the number of guesses allowed 

//input win/loss logic 























