
// refresh //
function refreshPage(){
  window.location.reload();
} 


function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

// Game Over // 
setTimeout(function(){
  window.location.href = 'easyend.html';
}, 62000);



// Timer //  
const startTiming = 1; 
let time = startTiming * 60; // 60 seconds in a minute
const countdownEl =  document.getElementById('countdown');

setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time/60); // all seconds / 60 to get minutes [Math.floor = lowest number w/o decimal]
  let seconds  =  time % 60;  
  seconds = seconds < 1 ? '0' + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`; 
  time--;
  time = time < 0 ? 0 : time; 
}

// Puzzle //

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile9") { 
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}


// shuffle // 

function shuffle() {
  //Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
     for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    } 
  } 
  }