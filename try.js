


var n;
function chsbod(n) {
  var c = document.getElementById("myCanvas");
  myCanvas.width = 100*n;
  myCanvas.height = 100*n;
  w=100;
  h=100;
  var ctx = c.getContext("2d");
  for(let i=1;i<n;i++){
   ctx.beginPath();
   ctx.moveTo(w*i, 0);
   ctx.lineTo(w*i, 100*n);
   ctx.moveTo(0,h*i);
   ctx.lineTo(100*n,h*i);
   ctx.lineWidth="5";
   ctx.strokeStyle="black";
   ctx.stroke();
  }
}

