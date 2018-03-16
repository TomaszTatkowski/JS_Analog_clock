const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");





function runTheClock() {
  var date = new Date();
  
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  
  let hPosition = (hr*360/12)+(min*(360/60)/12);
  let mPosition = (min*360/60)+(sec *(360/60)/60);
  let sPosition = sec*360/60;
	
 // hPosition = hPosition+(3/360);
 // mPosition = mPosition+(6/60);
 // sPosition = sPosition+6;
  
  
  HOURHAND.style.transform = "rotate(" + hPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + mPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + sPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);