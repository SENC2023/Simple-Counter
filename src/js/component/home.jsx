import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div className="bg-dark d-flex justify-content-center">
			<div className="clock">
				<svg xmlns ="http://www.w3.org/2000/svg" width="128" height="128" fill="white" class="bi bi-clock" viewBox="0 0 16 16">
				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
				</svg>
			</div>
			<div className="d-flex justify-content-center">
				<h1 className="card bg-dark text-white border-secondary border border-3 m-4">{props.digito6}</h1>	
				<h1 className="card bg-dark text-white border-secondary border border-3 m-4">{props.digito5}</h1>	
				<h1 className="card bg-dark text-white border-secondary border border-3 m-4">{props.digito4}</h1>	
				<h1 className="card bg-dark text-white border-secondary border border-3 m-4">{props.digito3}</h1>	
				<h1 className="card bg-dark text-white border-secondary border border-3 m-4">{props.digito2}</h1>
				<h1 className="card bg-dark text-white border-secondary border border-3 m-4">{props.digito1}</h1>			
			</div>
		</div>
		
		
	);
};

export default Home;
