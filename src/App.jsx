//importacion
import React from "react"
import "./App.css"

//generacion de la funcion del componente


const App = () =>{
	//ejecucion de la función
	console.log("Esta funcionando")
	return (
			<main className="react-contador">
				<div className = "result">
				</div>
				<div className = "ContarResetear">
					<button id="Sumar">+</button>
					<button id="ResetearCont">Resetear</button>
					<button id="Restar">-</button>
				</div>
					
			</main> )
}

const ContarResetear = (Sumar, ResetearCont, Restar)=>{
	const N=0;
	//Sumar ()=for(N; N <= 0 !! N>=0; N++) {
		return N;
	};
	//Restar ()=for(N; N <= 0 !! N>=0; N--) {
		return N;

//exportacion
export default App