import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./Cards";
import Footer from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar 
			titulo={"Made in Studio"}
			/>
			<Jumbotron />
			<div className="container">
			<div className="justify-content-between row mb-5">
				<Cards 
				cardTitle={"Tatuajes de Estilo Fineline"}
				cardText={"Los tatuajes fineline son sofisticados y sutiles, lo que los hacen ideales para todo tipo de situaciones. No es sorpresa que sean una tendencia entre los amantes del tattoo y también la primera opción para quienes están pensando en hacerse su primer tattoo. Para hacer la línea tan delgada, se utilizan unas agujas muy delgadas."} 				 
				bottonText={"Ver mas"} 
				cardImage={"https://media.istockphoto.com/id/1150718133/es/vector/dibujo-de-l%C3%ADnea-continua-flor-de-mano-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=dv_goRO4cEUIwy-sh6YatPOnrdOZaEj_FuO40VOv5oo="} 
				/>
				<Cards 
				cardTitle={"Tatuajes de Puntillismo"}
				cardText={"Hay muchos tipos de puntillismo, los hay tanto en blanco y negro como con color; pero básicamente, la técnica consiste en crear figuras a través de la aproximación de puntos, manchas y trazos, con el fin de conseguir volúmenes, sombras y relieves."} 				 
				bottonText={"Ver mas"} 
				cardImage={"https://i.pinimg.com/564x/c7/06/4a/c7064adb829817cbed7c628c8d0fc68e.jpg"} 
				/>
				<Cards 
				cardTitle={"Tatuajes en Vectores"}
				cardText={"Esta es la primera Card"}				 
				bottonText={"Ver mas"} 
				cardImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmxRTUT6tGo0EvZpJtwOuIVXCpvIjS-iD-w&s"} 
				/>
				<Cards 
				cardTitle={"Tatuajes de Realismo"} 
				cardText={"Esta es la primera Card"} 				
				bottonText={"Ver mas"} 
				cardImage={"https://scontent.fmad20-1.fna.fbcdn.net/v/t1.6435-9/69385607_2377042445904013_3406128555736694784_n.jpg?stp=dst-jpg_p417x417&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=j4TwBAPGCVAQ7kNvgHhvhy4&_nc_ht=scontent.fmad20-1.fna&oh=00_AYAHSvUiZkr-NNmq7M7_N337qHNriItPaP5mUA1jTU4yaQ&oe=66EE6ED7"} 
				/>



			</div>

			</div>
			
			<Footer />


		</div>

	);
};

export default Home;
