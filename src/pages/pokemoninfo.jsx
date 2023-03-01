import React from "react";
import { useLoaderData } from "react-router-dom";

// loader function
export const pokemonLoader = async ({ params }) => {
	const { pokemonName } = params;
	const base_url = "https://pokeapi.co/api/v2/pokemon/";
	const response = await fetch(base_url + pokemonName);
	const data = await response.json();
	return data;
};

const Pokemoninfo = () => {
	const pokemon = useLoaderData();

	return <div>{pokemon.name}</div>;
};

export default Pokemoninfo;
