import React from "react";
import { useLoaderData } from "react-router-dom";
import PokemonType from "../components/pokemontype";
import SearchBar from "../components/searchBar";
import Topbar from "../components/topbar";

// loader function
export const pokemonLoader = async ({ params }) => {
	const { pokemonName } = params;
	const poke_url = pokemonName.toLowerCase();
	const base_url = "https://pokeapi.co/api/v2/pokemon/";
	const response = await fetch(base_url + poke_url);
	const data = await response.json();
	return data;
};

const pokemonStats = (pokemonStats) => {
	return (
		<div className="flex flex-row justify-between">
			<span className="font-bold text-xl">{pokemonStats.stat.name.toUpperCase()}</span>{" "}
			<span className="font-bold text-xl">{pokemonStats.base_stat}</span>
		</div>
	);
};

const Pokemoninfo = () => {
	const pokemon = useLoaderData();
	console.log(pokemon);
	return (
		<>
			<Topbar />
			<SearchBar />
			<div className="flex flex-col items-center mx-auto mt-16 w-10/12">
				<h1 className="text-4xl">
					{pokemon.name.replace(/^./, (str) => str.toUpperCase())} #{pokemon.id.toString().padStart(3, "0")}
				</h1>
				<div>
					<img
						className="h-80 w-80 bg-slate-200 rounded-md my-4"
						src={pokemon.sprites.other["official-artwork"].front_default}
						alt=""
					/>
					<div className="bg-red-200 rounded-md w-100 text-center my-4 p-2">
						<h2 className="mb-5 font-bold text-2xl">Type</h2>
						<div className="flex flex-row justify-around h-1/6 mx-auto">
							{pokemon.types.map((pokemon) => PokemonType(pokemon))}
						</div>
					</div>
					<div className="bg-slate-200 flex flex-col 100 px-3 py-3 rounded-md my-4">
						<div>{pokemon.stats.map((pokemon) => pokemonStats(pokemon))}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pokemoninfo;
