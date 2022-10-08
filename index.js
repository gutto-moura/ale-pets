/*
const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
	reverse: true,
	max: 15,
	speed: 400,
	scale: 1.12,
	glare: true,
	reset: true,
	perspective: 500,
	transition: true,
	"max-glare": 0.75,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
});
*/
VanillaTilt.init(document.querySelector(".your-element"), {
  max: 25,
  speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".your-element"));