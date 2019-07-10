var c = document.getElementById("firstCanvas");
var line = c.getContext("2d");
line.moveTo(0,0);
line.lineTo(200,300);
line.stroke();

var cfirst = document.getElementById('first');
var ctx=cfirst.getContext('2d');
ctx.moveTo(20,15);
ctx.lineTo(40,15);
ctx.stroke();

var ctx2=cfirst.getContext('2d');
ctx2.moveTo(50,10);
ctx2.lineTo(50,40);
ctx2.stroke();

var ctx3=cfirst.getContext('2d');
ctx3.moveTo(100,50);
ctx3.lineTo(150,100);
ctx3.stroke();
var ctx4=cfirst.getContext('2d');
ctx4.moveTo(150,50);
ctx4.lineTo(100,100);
ctx4.stroke();

var sqr1=cfirst.getContext('2d');
sqr1.moveTo(60,30);
sqr1.lineTo(80,30);
sqr1.stroke();
var sqr2=cfirst.getContext('2d');
sqr2.moveTo(80,30);
sqr2.lineTo(80,50);
sqr2.stroke();
var sqr3=cfirst.getContext('2d');
sqr3.moveTo(80,50);
sqr3.lineTo(60,50);
sqr3.stroke();
var sqr4=cfirst.getContext('2d');
sqr4.moveTo(60,50);
sqr4.lineTo(60,30);
sqr4.stroke();
