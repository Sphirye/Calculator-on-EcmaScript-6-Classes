const botones = document.getElementsByTagName('button');
const display = document.getElementById('id_display');
let sigOperador = false;
 

class Calculadora{
	constructor(boton){
		this.boton = boton;

		//Enviar datos al display
		if ((this.boton != '=') && (this.boton != 'Limpiar')){
			const texto = document.createTextNode(this.boton);
			display.appendChild(texto);
			}	

		//Separador entre boton de Igual y Limpiar
		if (this.boton == 'Limpiar'){
			display.textContent = '';
			sigOperador = true;
		}

		if (this.boton === '='){
			display.textContent = eval(display.textContent);
		}
	}

	sendBoton(){
		for(let i = 0; i < botones.length; i++){
			let btnActual = botones[i].textContent;

			botones[i].onclick = () => {
				//Numeros
				if (btnActual >= 0){
					sigOperador = true;
					const caracter = new Calculadora(btnActual);
				}
				else{
					//Operadores
					if (sigOperador == true){
						sigOperador = false;
						const caracter = new Calculadora(btnActual);
					}
				}
			}
		}
	}

}
const caracter = new Calculadora("");
caracter.sendBoton();
