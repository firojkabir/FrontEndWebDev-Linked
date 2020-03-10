const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 10;
let minPosition = 110;
let secPosition = 210;

HOURHAND.style.transform = "rotate(" + hrPosition +"deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition +"deg)";
SECONDHAND.style.transform = "rotate(" + secPosition +"deg)";