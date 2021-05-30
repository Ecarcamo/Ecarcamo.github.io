
 const navSlide = () => {
 	const burger = document.querySelector('.burger');
	const ul = document.querySelector('.ul');
	const a = document.querySelectorAll('.ul a');

	burger.addEventListener('click', () => {
		ul.classList.toggle('ul-transform');


		a.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			}
  			else {
 				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.55}s`
 			}
 		});
		 
 		burger.classList.toggle('toggle');
		
 	});
};

 navSlide();


window.onscroll = function(){
	const nav = document.querySelector('.nav');
	var tamanioVentana = window.scrollY;
	console.log(tamanioVentana);
	if (tamanioVentana >= 50){
		nav.classList.add('nav-active');
	} else {
		nav.classList.remove('nav-active');
	}
}



const escrito = new Typed('.escrito', {
	strings: [
		'<i class="profesion">Alumno</i>',
		'<i class="profesion">Programador</i>',
		'<i class="profesion">Violonchelista</i>'
	],
	typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
	startDelay: 700, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 65, // Velocidad en milisegundos para borrrar una letra,
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


