let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function rotate(){
	let date = new Date();
	let getHours = date.getHours();
	let getMinutes = date.getMinutes();
	let getSeconds = date.getSeconds();

	let sF = getSeconds / 60;
	let mF = (sF + getMinutes) / 60;
	let hF = (mF + getHours) / 12;

	let sD = Math.floor(sF * 360);
	let mD = Math.floor(mF * 360);
	let hD = Math.floor(hF * 360);
	//reset transition if 0 deg
	if(sD == 0 ){
		seconds.style.transition = null;
		minutes.style.transition = null;
		hours.style.transition = null;
	}
	else{
		//add transition if > 0 deg, to make smooth
		seconds.style.transition = '1s';
		minutes.style.transition = '.8s';
		hours.style.transition = '.4s';
	}
	hours.style.transform = `rotate(${hD}deg)`;
	minutes.style.transform = `rotate(${mD}deg)`;
	seconds.style.transform = `rotate(${sD}deg)`;
}

setInterval(rotate, 1000);