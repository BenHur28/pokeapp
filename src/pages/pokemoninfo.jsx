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
			<span className="font-bold text-xl">{pokemonStats.stat.name.toUpperCase()}</span> <span className="font-bold text-xl">{pokemonStats.base_stat}</span>
		</div>
	);
};

const pokemonAbilities = (pokemonAbilities) => {
	return <div className="">{pokemonAbilities.ability.name}</div>;
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
				<div className="flex flex-row justify-around mt-24 w-3/5">
					<img className="h-80 w-80 bg-slate-200 rounded-md" src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
					<div className="bg-cyan-400 flex flex-row flex-wrap w-1/3 h-11/12 rounded-md">
						<div className="flex flex-col justify-start my-auto w-1/3 ml-5">
							<h2 className="text-2xl mb-3 text-white ">Height</h2>
							<span className="text-xl">{pokemon.height}</span>
						</div>
						<div className="flex flex-col justify-start my-auto w-1/3 ml-5">
							<h2 className="text-2xl mb-3 text-white">Weight</h2>
							<span className="text-xl">{pokemon.weight}</span>
						</div>
						<div className="flex flex-col justify-start  w-1/3 ml-5">
							<h2 className="text-2xl mb-3 text-white">Abilities</h2>
							<span className="text-xl">{pokemon.abilities.map((pokemon) => pokemonAbilities(pokemon))}</span>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-around mt-12 w-3/5">
					<div className="bg-slate-300 flex flex-col w-1/3 px-3 py-3 rounded-md">
						<div>{pokemon.stats.map((pokemon) => pokemonStats(pokemon))}</div>
					</div>
					<div className="w-1/3">
						<h2 className="mb-5 font-bold text-2xl">Type</h2>
						<div className="flex flex-row justify-start h-1/6">{pokemon.types.map((pokemon) => PokemonType(pokemon))}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pokemoninfo;
