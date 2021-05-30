new WOW().init();

const Secciones = new fullpage('#fullpage', {
	// ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
		 autoScrolling: false, // Se activa el scroll.
		 fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
		 fitToSectionDelay: 800, // Delay antes de acomodar la seccion automaticamente.
		 easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		 scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
		 css3: true, // Si usara CSS3 o javascript.
		 easingcss3: 'ease-out', // Curva de velocidad del efecto.
		 loopBottom: true, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['inicio', 'info', 'hobbies','proyectos', 'skills', 'contactame', 'footer'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'About', 'Hobbies','Proyectos', 'Skills', 'Contáctame', 'Footer'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
		 sectionsColor : ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#000'], // Color de fondo de cada seccion.
		 verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
		 controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide
	// ──────────────────────────────────────────────────
	//   :::::: Animaciones (Callbacks de FullPage.js)
	// ──────────────────────────────────────────────────
});

const typed = new Typed('.typed', {
	strings: [
		'<i class="profesion">Alumno</i>', 
		'<i class="profesion">Mini-programador</i>',
		'<i class="profesion">Sensei Cinta Negra</i>',
		'<i class="profesion">Estudiante de Violonchelo</i>'
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

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const li = document.querySelectorAll('.menu li');
	
	burger.addEventListener('click', () => {

		menu.classList.toggle('nav-active');

		
		li.forEach((link, index)=> {
			if(link.style.animation) {
				link.style.animation = ''
			}
			else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.55}s`
			}
		});

		burger.classList.toggle('toggle')
	});
};
navSlide();

const cerrarNav = () => {
	const link = document.querySelector('.ancla')

	link.addEventListener('click', () => {
		link.classList.toggle('.menu-close');
	});
	console.log(link)

};
cerrarNav();
