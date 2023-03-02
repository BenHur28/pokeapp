import React from "react";
import Pokemonlist from "../components/pokemonlist";
import Topbar from "../components/topbar";
import SearchBar from "../components/searchBar";

const Home = () => {
	return (
		<div>
			<Topbar />
			<SearchBar />
			<Pokemonlist />
		</div>
	);
};

export default Home;
