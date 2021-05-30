window.onscroll = function(){
	const nav = document.querySelector('.nav');
	const logo = document.querySelector('.contenedor-logo');
	const boton1 = document.querySelector('.boton-1');
	
	var top = window.scrollY;
	console.log(top);
	if (top >=700){
		nav.classList.add('nav-active');
		logo.classList.add('contenedor-logo-active');
		boton1.classList.add('boton-1-active');
	} else {
		nav.classList.remove('nav-active');
		logo.classList.remove('contenedor-logo-active');
		boton1.classList.remove('boton-1-active');
	}
}