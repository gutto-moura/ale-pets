var swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 4,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const imagens = document.getElementById('img');
const imagem = document.querySelectorAll("#img img");

let valorInicial = 0;

function carrosselAlePets(){
	valorInicial++;

	if(valorInicial > imagem.length -1){
		valorInicial = 0
	}

	imagens.style.transform = `translatex(${-valorInicial * 300}px)`;
}

setInterval(carrosselAlePets, 1800);