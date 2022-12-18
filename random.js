// In this example, the whackMole function first checks if the game is in progress by
//  checking if the intervalId variable is truthy. If the game is not in progress, the function returns immediately and does nothing.

// Next, the function checks if the clicked grid cell contains a mole by calling the 
// contains method on the grid cell element. If the grid cell does not contain a mole, the function returns immediately and does nothing.

// If both of these checks pass, the function adds the grid cell's data-id attribute to 
// the whackedMole array and updates the score.

// This way, if the user tries to click on a grid cell when the game is not in progress or
//  when there is no mole present, the code will not crash and will simply do nothing instead.




// // This function is called when the user clicks on a grid cell
// function whackMole() {
//     // Check if the game is in progress
//     if (!intervalId) {
//       // If the game is not in progress, do nothing
//       return;
//     }
  
//     // Check if the clicked grid cell contains a mole
//     if (!this.contains(mole)) {
//       // If the grid cell does not contain a mole, do nothing
//       return;
//     }
  
//     // If the game is in progress and the grid cell contains a mole,
//     // add the grid cell's data-id attribute to the whackedMole array
//     let hitMole = this.getAttribute("data-id");
//     whackedMole.push(hitMole);
  
//     // Update the score
//     score.textContent = "Score: " + whackedMole.length;
//   }
  