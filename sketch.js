
let board5=[
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
];



let ai = 'X';
let human = 'O';
let currentPlayer = human;

var w;
var h;


function setup() {
  let c = createCanvas(600, 600);
  c.position(500,100);
  input = createInput();
  input.position(20,600); 
 
  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(chsbod);
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

function draw() {
  background(225,125,36);
  chsbod();
  for(let j=0; j<5; j++){
    for(let i=0; i<5; i++){
        w= 100;
        h= 100;
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = board5[i][j];
        textSize(32);
        let r = w / 4;
        if (spot == human) {
          noFill();
          ellipse(x, y, r * 2);
        } 
        else if (spot == ai) {
            line(x - r, y - r, x + r, y + r);
           line(x + r, y - r, x - r, y + r);
    
        }
    }
  }

}


function mousePressed() {
  if (currentPlayer == human) {
    // Human make turn
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    // If valid turn
    if (i >= 0 && i < 5) {
      if (board5[i][j] == '') {
        board5[i][j] = human;
        currentPlayer = ai;
        bestMove();
       
      }
    }
  }
}

function chsbod() {
 var no = input.value();
 width=100*no;
 height=100*no;
 w=100;
 h=100;
 if(no>=3 && no<=5){
     for(let i=1;i<no;i++){
     line(w*i, 0, w*i, 100*no);
     line(0, h*i, 100*no, h*i);
     strokeWeight(5);
    }
  }
}

function bestMove(){
  let bestScore=-Infinity;
  let move;
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (board3[i][j]==''){
              board3[i][j]=ai;
              let score=minmax(board3,finddepth(),false);
              board3[i][j]='';
              if(score>bestScore){
                  bestscore = score;
                  move = {i,j};
               }
           }
       }
   }
  board3[move.i][move.j]=ai;
  currentPlayer = human;
}
