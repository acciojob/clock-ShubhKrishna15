function updateClock(){
	let p = document.getElementById("timer")
	let currentTime = new Date();
	let output = currentTime.getMonth()+"/"+currentTime.getDate()+"/"+currentTime.getFullYear()+", "+
		currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds();
    p.innerHTML = output ;
	setTimeout(updateClock,1000);
}
updateClock()

