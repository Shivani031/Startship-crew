// Find depth for algo
function finddepth(){
    let depth=0;
   for(i=0;i<5;i++){
       for(j=0;j<5;j++){
           if(board5[i][j]==""){
               depth++;
            }
        }

    }
    return depth;
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

   

     
     
      
         
        

