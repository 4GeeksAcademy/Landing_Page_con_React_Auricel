import { React } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./Cards";
import Footer from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="row">
				<Cards cardText={"Esta es la primera Card"} cardTitle={"car1"} bottonText={"Ver mas"} cardImage={image} />



			</div>
			<Footer />


		</div>

	);
};

export default Home;
