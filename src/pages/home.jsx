import React from "react";
import Pokemonlist from "../components/pokemonlist";
import Topbar from "../components/topbar";

const Home = () => {
	return (
		<div>
			<Topbar />
			<Pokemonlist />
		</div>
	);
};

export default Home;
