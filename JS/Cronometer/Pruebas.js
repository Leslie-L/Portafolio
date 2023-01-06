<!DOCTYPE html>
<html>
<body>

<h1>The Window Object</h1>
<h2>The setInterval() Method</h2>

<p id="demo"></p>
<button onclick="play()">play</button>
<button onclick="parar()">Stop</button>
<script>
var time=0;
var minutes=0;
var hours=0;
const element = document.getElementById("demo");
var myInterval;
function play(){
myInterval = setInterval(function() {
time+=1;
if(time==60){
	time=0;
	minutes+=1;
}
if(minutes==60){
	minutes=0;
    hours+=1;
}
let display=(hours+":" +minutes +":"+time);
element.innerHTML = display;
}, 1000);
}

function parar(){
	clearInterval(myInterval);
}
</script>

</body>
</html>