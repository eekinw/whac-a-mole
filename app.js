const outerGrid = document.getElementById("grid")
const score = document.getElementById("score")
const timeRemaining = document.getElementById("timeRemaining")

// let randomGrid = []
let whackedMole = []
let intervalId = null;
let timerId = null;
let startingTime = 30;

const mole = document.createElement("img")
mole.setAttribute("src", "./mouse.jpg")




// create inner grid and put mole inside grid
function createBoard() {

    for(let i = 0; i < 9; i++) {
        const child = document.createElement("div")
        const btn = document.getElementById("startButton")
        const btn2 = document.getElementById("endButton")


        child.setAttribute("class", "child")
        child.setAttribute("data-id", i)
        // console.log(child)
        outerGrid.appendChild(child)
        btn.addEventListener("click", startGame)
        btn2.addEventListener("click", endGame)
        child.addEventListener("click", whackMole)




    }
}
createBoard();

function startGame() {
    // Reset the starting time and whacked mole array
    startingTime = 30;
    whackedMole = [];

    // Clear the interval IDs if they are not null
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }

    // Update the score and time remaining elements to their initial values
    score.textContent = "Score: 0"
    timeRemaining.textContent = "30";

    // Start the game by calling the moleAppear function and remainingTime function
    moleAppear();
    intervalId = setInterval(moleAppear, 1000);
    remainingTime();

}


function moleAppear() {

    let chosenGridNumber = Math.floor(Math.random() * outerGrid.childNodes.length)
    console.log(chosenGridNumber + " is chosen!")
    // randomGrid.push(chosenGrid)
    // console.log(randomGrid)
    let chosenGrid = outerGrid.children[chosenGridNumber]

    if (chosenGrid.contains(mole)) {
        return moleAppear();
    }

    chosenGrid.appendChild(mole)
}



function whackMole() {
    // check if the game is in progress
    if(!intervalId) {
    // If the game is not in progress, do nothing
        return;
    }

    // Check if the clicked grid cell contains a mole
    if (!this.contains(mole)) {
      // If the grid cell does not contain a mole, do nothing
      return;
    }

    // If the game is in progress and the grid cell contains a mole,
    // add the grid cell's data-id attribute to the whackedMole array
    let hitMole = this.getAttribute("data-id");
    whackedMole.push(hitMole);

    //update the score
    score.textContent = "Score: " + whackedMole.length

    // only allow 1 cllick per grid
    this.removeChild(mole);
}

function endGame() {
    clearInterval(intervalId);
    clearInterval(timerId)


    alert(whackedMole.length)

    const gridCells = document.querySelectorAll(".child")

    gridCells.forEach((gridCell) => {
        gridCell.removeEventListener("click", whackMole);

        if(gridCell.contains(mole)) {
            gridCell.removeChild(mole)
        }
    })

    score.textContent = ""
    timeRemaining.textContent = ""

    // enable the "start" button again
    const btn = document.getElementById("startButton");
    btn.disabled = false;
  
    // console.log("The game has ended!");

  }




//   Use setInterval() to call a function repeatedly at a given time interval (e.g. every 1000 milliseconds).
function remainingTime() {
     timerId = setInterval(showCurrentTime, 1000)
    //  setTimeout(endGame, (startingTime - 1) * 1000)
}



//   Inside the function called by setInterval(), decrement the remaining time by the time interval (i.e. 1000 milliseconds).
function showCurrentTime() {
    startingTime-- ;

    if(startingTime < 0) {
        clearInterval(timerId);
        endGame();
    }
    timeRemaining.textContent = startingTime;

}

//   Use setTimeout() to stop the setInterval() after the countdown has reached 0.

//   Use clearInterval() to stop the setInterval() if the end game button is clicked.

//   Use innerHTML or textContent to display the remaining time on the page.

// You may need to use additional logic to handle edge cases such as the countdown reaching 0 or 
// the end game button being clicked before the countdown has finished.
=======
const outerGrid = document.getElementById("grid")
const score = document.getElementById("score")


// let randomGrid = []
let whackedMole = []
let intervalId = null;


const mole = document.createElement("img")
mole.setAttribute("src", "./mouse.jpg")




// create inner grid and put mole inside grid
function createBoard() {

    for(let i = 0; i < 9; i++) {
        const child = document.createElement("div")
        const btn = document.getElementById("startButton")
        const btn2 = document.getElementById("endButton")


        child.setAttribute("class", "child")
        child.setAttribute("data-id", i)
        // console.log(child)
        outerGrid.appendChild(child)
        btn.addEventListener("click", startGame)
        btn2.addEventListener("click", endGame)
        child.addEventListener("click", whackMole)

    }
}
createBoard();


// assign mole randomly to a random grid
// Math.floor(Math.random() * gridId.length)
// setInterval(moleAppear, 1000)

function startGame() {
  intervalId = setInterval(moleAppear, 1000);
}

function moleAppear() {

    let chosenGridNumber = [Math.floor(Math.random() * outerGrid.childNodes.length)]
    console.log(chosenGridNumber + " is chosen!")
    // randomGrid.push(chosenGrid)
    // console.log(randomGrid)
    let chosenGrid = outerGrid.children[chosenGridNumber]
    console.log(chosenGrid)
    chosenGrid.appendChild(mole)
}


// function whackMole() {
//     let hitMole = this.getAttribute("data-id")
//     console.log( hitMole)
//     whackedMole.push(hitMole)
//     // console.log(whackedMole)
    

//     score.textContent = "Score: " + whackedMole.length

// }

function whackMole() {
    // check if the game is in progress
    if(!intervalId) {
    // If the game is not in progress, do nothing
        return;
    }

    // Check if the clicked grid cell contains a mole
    if (!this.contains(mole)) {
      // If the grid cell does not contain a mole, do nothing
      return;
    }

    // If the game is in progress and the grid cell contains a mole,
    // add the grid cell's data-id attribute to the whackedMole array
    let hitMole = this.getAttribute("data-id");
    whackedMole.push(hitMole)

    //update the score
    score.textContent = "Score: " + whackedMole.length


}

function endGame() {
    clearInterval(intervalId);

    alert(score.textContent)

    const gridCells = document.querySelectorAll(".child")

    // for(let gridCell of gridCells) {
    //     gridCell.removeEventListener("click", whackMole)
    // } OR the one below: 

    gridCells.forEach((gridCell) => {
        gridCell.removeEventListener("click", whackMole);

        if(gridCell.contains(mole)) {
            gridCell.removeChild(mole)
        }
    })

  
    score.textContent = ""
    console.log("The game has ended!");


  }
  




// Next feature: 

// A timer that counts down from a certain number of seconds, and ends the game when the timer reaches 0.
// A difficulty setting that allows the user to choose the speed at which the mole appears and disappears.
// A score multiplier that increases every time the user hits the mole in a row without missing.
// A high score list that shows the top scores for the current session or for all time.
// Sound effects that play when the mole is hit or missed.

>>>>>>> 994f82ce99081bb8cd5d559f4f8e32abf4ec0901
