console.log( 'main in' ) ;
console.log( 'main in' ) ;
import Sample from './ui/sample';

let sample = new Sample("keunho");

sample.say();

console.log( '들어와라' ) ;

window.addEventListener('load', () => {
	console.log( '로딩이 완료되면 시작해라!!!!!!!!!!!!!!' ) ;
	let logo = document.querySelector('.logo') ;
	console.log( logo ) ;


	logo.addEventListener('click', () => {
		document.body.classList.toggle('hide') ;
	})

}) ;