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
sqr1.strokeRect(60,30,30,30);

var trgl1=cfirst.getContext('2d');
trgl1.moveTo(150,80);
trgl1.lineTo(180,50);
trgl1.stroke();
var trgl2=cfirst.getContext('2d');
trgl2.moveTo(180,50);
trgl2.lineTo(200,80);
trgl2.stroke();
var trgl3=cfirst.getContext('2d');
trgl3.moveTo(200,80);
trgl3.lineTo(150,80);
trgl3.stroke();

var line1=cfirst.getContext('2d');
line1.moveTo(20,100);
line1.lineTo(80,100);
line1.stroke();
var line2=cfirst.getContext('2d');
line2.moveTo(60,80);
line2.lineTo(80,100);
line2.stroke();
var line3=cfirst.getContext('2d');
line3.moveTo(60,120);
line3.lineTo(80,100);
line3.stroke();

var blrect=cfirst.getContext('2d');
blrect.rect(30,120,60,40);
blrect.fillStyle='blue';
blrect.fill();

var rcl=cfirst.getContext('2d');
rcl.fillRect(150,150,40,50);
rcl.clearRect(155,160,20,15);

function getRadians(a){
    return (Math.PI/180)*a;
}
var circle=cfirst.getContext('2d');
circle.arc(25,150,75,0,getRadians(180));
circle.stroke();








































