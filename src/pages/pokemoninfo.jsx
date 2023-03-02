import React from "react";
import { useLoaderData } from "react-router-dom";

// loader function
export const pokemonLoader = async ({ params }) => {
	const { pokemonName } = params;
	const poke_url = pokemonName.toLowerCase();
	const base_url = "https://pokeapi.co/api/v2/pokemon/";
	const response = await fetch(base_url + poke_url);
	const data = await response.json();
	return data;
};

const Pokemoninfo = () => {
	const pokemon = useLoaderData();
	console.log(pokemon);
	return (
		<div className="flex flex-col items-center mx-auto w-10/12">
			<h1 className="text-4xl">
				{pokemon.name.replace(/^./, (str) => str.toUpperCase())} #{pokemon.id.toString().padStart(3, "0")}
			</h1>
			<div className="flex flex-row justify-around mt-24 w-2/3">
				<img className="h-96 w-96" src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
				<div>Pokemon Bio info</div>
			</div>
			<div className="flex flex-row justify-around mt-12 w-2/3">
				<div>stats</div>
				<div>type + weakness</div>
			</div>
		</div>
	);
};

export default Pokemoninfo;
