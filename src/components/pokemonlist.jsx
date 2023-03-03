import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "./pokemoncard";

const Pokemonlist = () => {
	const base_url = "https://pokeapi.co/api/v2/";

	const [allPokemon, setAllPokemon] = useState([]);
	const [search, setSearch] = useState("");

	const getPokemon = async () => {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
		const data = await response.json();

		function createPokemonObjects(results) {
			results.forEach(async (pokemon) => {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const data = await response.json();
				setAllPokemon((currentList) => [...currentList, data]);
				await allPokemon.sort((a, b) => a.id - b.id);
			});
		}

		createPokemonObjects(data.results);
	};

	useEffect(() => {
		getPokemon();
	}, []);

	return (
		<div className="flex flex-row flex-wrap justify-evenly mx-auto my-12 w-10/12">
			{allPokemon.map((pokemon) => (
				<PokemonCard
					key={pokemon.id}
					id={pokemon.id.toString().padStart(3, "0")}
					name={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
					image={pokemon.sprites.other["official-artwork"].front_default}
					type={pokemon["types"]}
				/>
			))}
		</div>
	);
};

export default Pokemonlist;
