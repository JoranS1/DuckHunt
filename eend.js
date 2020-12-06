var container = document.getElementById("container");
var donald = document.getElementById("donald");

var hit = document.getElementById("hit");
var miss = document.getElementById("miss");
var countHit = 0;
var countMiss = 0;
var positionX = 500;
var positionY = 350;

var randomTop = [300, 375, 450];
var randomLeft = [450, 525, 600];
var posTop = randomTop[Math.floor(Math.random()*randomTop.length)]
var posLeft = randomLeft[Math.floor(Math.random()*randomLeft.length)]
donald.style.top = posTop + "px";
donald.style.left = posLeft + "px";

 dir = ["N", "NE" , "E" , "SE" , "S" , "SW" , "W" , "NW"];
 container.addEventListener("click", function(){
 	countMiss++
 	miss.innerHTML = "MISS:  " + countMiss;
 })
 donald.addEventListener("click",function(event){
 	event.stopPropagation();
 	countHit++
 	hit.innerHTML = "HIT:  " + countHit;
 	posTop = randomTop[Math.floor(Math.random()*randomTop.length)]
 	posLeft = randomLeft[Math.floor(Math.random()*randomLeft.length)]
 	donald.style.top = posTop + "px";
	donald.style.left = posLeft + "px";
	stop();
 })
 function stop(){
 	if(countHit < 20){
 		alert("You gained: "+ countHit + " points")
 	
 	}
 	else if (countHit == 20){
 		alert("GAME OVER INSIRT COIN TO CONTINUE");
 		container.style.backgroundImage = "url('index.jpg')"
 	}
 }

setInterval(function (event) {
	var number = Math.floor(Math.random() * dir.length);
	var direction = dir[number]
	console.log(number)

	if(direction == "N"){
		if(positionY < 0){
			positionY = 200;
		}
		else{
			positionY -= 75;
			donald.style.top = positionY + "px";
		}
	}
	else if (direction =="NE"){
		if (positionY < 0) {
			positionY = 200;
		} 
		else if (positionX > 1336) {
			positionX = 1280;
		}
		else{
			positionY -= 75;
			donald.style.top = positionY + "px";
			positionX += 75;
			donald.style.left = positionX + "px";
		}
	}
	else if(direction =="E"){
		if (positionX > 1336) {
			positionX = 1280;
		}
		else{
			positionX += 75;
			donald.style.left = positionX + "px";
		}
	}
	else if (direction == "SE"){
		if(positionY > 769){
			positionY = 550;
		}
		else if (positionX > 1336){
			positionX = 1280;
		}
		else{
			positionY += 75;
			donald.style.top = positionY + "px";
			positionX += 75;
			donald.style.left = positionX + "px";
		}
	}
	else if (direction == "S"){
		if(positionY > 769){
			positionY = 550;
		}
		else{
			positionY += 75;
			donald.style.top = positionY + "px";
		}
	}
	else if (direction == "SW"){
		if(positionY > 769){
			positionY = 550;
		}
		else if(positionX < 0){
			positionX = 200;
		}
		else{
			positionY += 75;
			donald.style.top = positionY + "px";
			positionX -= 75;
			donald.style.left = positionX + "px";
		}
	}
	else if (direction == "W"){
		if(positionX < 0){
			positionX = 200;
		}
		else{
			positionX -= 75;
			donald.style.left = positionX + "px";
		}
	}
	//NE
	else{
		if(positionY < 0){
			positionY = 200;
		}
		else if(positionX < 0){
			positionX = 200;
		}
		else{
			positionY -= 75;
			donald.style.top = positionY + "px";
			positionX -= 75;
			donald.style.left = positionX + "px";
		}
	}
}, 500);