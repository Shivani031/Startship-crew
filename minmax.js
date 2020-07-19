let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];


let ai = 'X';
  let human = 'O';
  let currentPlayer = human;

  // display Moves

    function writeOnGame(pos, char) {
     board[pos] = char;
     document.getElementById("pos"+pos)
     .innerHTML = "<div  class='taken' id='div"+pos+"'><span style='display: flex;'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/icon"+char+".png' style='width: 50px; margin: auto;'></span></div>";
    }

   
   // </> Random Ai Char
   function randChar() {
     var rand =  Math.floor(Math.random()*chars.length);
     aiChar = chars[rand];
     if (aiChar === plChar) {return randChar();}
     return;
    }

// Find depth for algo
 function finddepth(){
     let depth=0;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(board[i][j]==""){
                depth++;
            }
        }

     }
 }

 let scores = {
    X: "10",
    O: "-10",
    tie:"0"
  };
  
// Minmax algo
 function minmax(board,depth,player){
    if(depth==0){
        return score[result];  
    }
    if (player=="ai") {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == '') {
              board[i][j] = ai;
              let score = minimax(board, depth -1, false);
              board[i][j] = '';
              bestScore = max(score, bestScore);
            }
          }
        }
        return bestScore;
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == '') {
              board[i][j] = human;
              let score = minimax(board, depth -1, true);
              board[i][j] = '';
              bestScore = min(score, bestScore);
            }
          }
        }
        return bestScore;
      }
    }

    function equals3(a, b, c) {
        return a == b && b == c && a != '';
      }
      
      function checkWinner() {
        let winner = null;
      
        // horizontal
        for (let i = 0; i < 3; i++) {
          if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
          }
        }
      
        // Vertical
        for (let i = 0; i < 3; i++) {
          if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
          }
        }
      
        // Diagonal
        if (equals3(board[0][0], board[1][1], board[2][2])) {
          winner = board[0][0];
        }
        if (equals3(board[2][0], board[1][1], board[0][2])) {
          winner = board[2][0];
        }
      
        
      
        if (winner == null && depth == 0) {
          return 'tie';
        } else {
          return winner;
        }
      }
      
      
        let result = checkWinner();
        if (result != null) {
          noLoop();
          let resultP = createP('');
          resultP.style('font-size', '32pt');
          if (result == 'tie') {
            resultP.html('Tie!');
          } else {
            resultP.html(`${result} wins!`);
          }
        }
          
         



