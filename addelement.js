 
var player=['X','0'];
board3= [
  ['X','','X']
  ['X','','']
  ['','X','']
];
board4=[
  ['','','','']
  ['','','','']
  ['','','','']
  ['','','','']
];
board5=[
  ['','','','','']
  ['','','','','']
  ['','','','','']
  ['','','','','']
  ['','','','','']
];

function getMousePosition(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
 console.log("Coordinate x: " + x <br> "Coordinate y: " + y); 
 return (x,y);
} 
let canvasElem = document.querySelector("canvas"); 
        
      canvasElem.addEventListener("mousedown", function(e) 
      { 
          getMousePosition(canvasElem, e); 
      }); 


function move(){   
  for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
          let w=100*j;
          let h=100*i;
          if(w< y <w+100 && h< x <h+100 ){
            if(board3[i-1][j-1]==""){
              var c = document.getElementById("myCanvas");
              var ctx = c.getContext("2d");
              ctx.beginPath();
              ctx.moveTo(x - 100, y - 100);
              ctx.lineTo(x - 80, y - 80);
              ctx.stroke();
              break;
            }
          } 
      } 
  }   
}



