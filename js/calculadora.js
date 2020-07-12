const botones = document.getElementsByTagName('button');
const display = document.getElementById('id_display');
let sigOperador = false;	//Limitador de operadores

class Numeros{
	constructor(numero){
		this.numero = numero;
	}
}

class Operadores{
	constructor(operador){
		this.operador = operador;
	}
	
}

for(var i = 0; i < botones.length; i++){	//Dios bendiga a quien invento el for.
	if (botones[i].textContent >= 0){	
		//Asignar clases a numeros
		const btnNumero = new Numeros(botones[i].textContent);
		//Enviar numeros
		botones[i].onclick = () => {
			obtenerDatos(btnNumero.numero);
			sigOperador = true;
		};
	}
	else{								
		//Asignar clases a operadores
		if (botones[i].textContent != 'Limpiar'){
			if (botones[i].textContent != '='){
				const btnOperador = new Operadores(botones[i].textContent);
				botones[i].onclick = () => {					
					if (!sigOperador){
						//Prohibir * y / al iniciar, pero permitir + y -
						if ((btnOperador.operador === '*') || (btnOperador.operador === `/`)){
						}
						else{
							if (display.textContent === ''){
								obtenerDatos(btnOperador.operador);
								sigOperador = false;
							}
						}
					}
					else{
						//Enviar operadores
						obtenerDatos(btnOperador.operador);
						sigOperador = false;
					}
				}
			}
			else{	
				//Desplegar resultado
				botones[i].onclick = () => {
					display.textContent = eval(display.textContent);
				}
			}
		}
		else{	
			//Limpiar display
			botones[i].onclick = function (){
				display.textContent = '';
			}
		}
	}
}

function obtenerDatos(obj){
	const texto = document.createTextNode(obj);
	display.appendChild(texto);
}

//Curiosidad: Por alguna razón, no puedes llamar a un evento onclick desde el constructor lol
*/