import React from "react";

const pokemonType = (pokemon) => {
	let type_color = "";
	if (pokemon.type.name == "fire") {
		type_color += " bg-red-500";
	} else if (pokemon.type.name == "water") {
		type_color += " bg-blue-500";
	} else if (pokemon.type.name == "grass") {
		type_color += " bg-green-500";
	} else if (pokemon.type.name == "bug") {
		type_color += " bg-lime-400";
	} else if (pokemon.type.name == "normal") {
		type_color += " bg-gray-200";
	} else if (pokemon.type.name == "flying") {
		type_color += " bg-gray-400";
	} else if (pokemon.type.name == "fairy") {
		type_color += " bg-red-100";
	} else if (pokemon.type.name == "poison") {
		type_color += " bg-purple-800";
	} else if (pokemon.type.name == "electric") {
		type_color += " bg-yellow-500";
	} else if (pokemon.type.name == "rock") {
		type_color += " bg-stone-500";
	} else if (pokemon.type.name == "ground") {
		type_color += " bg-amber-700";
	} else if (pokemon.type.name == "fighting") {
		type_color += " bg-orange-500";
	} else if (pokemon.type.name == "ghost") {
		type_color += " bg-purple-300";
	} else if (pokemon.type.name == "psychic") {
		type_color += " bg-fuchsia-500";
	} else if (pokemon.type.name == "ice") {
		type_color += " bg-cyan-200";
	} else if (pokemon.type.name == "steel") {
		type_color += " bg-zinc-500";
	} else if (pokemon.type.name == "dark") {
		type_color += " bg-slate-700";
	} else if (pokemon.type.name == "dragon") {
		type_color += " bg-sky-400";
	}

	return <p className={`mr-5 + ${type_color}`}>{pokemon.type.name.replace(/^./, (str) => str.toUpperCase())}</p>;
};

const PokemonCard = (props) => {
	return (
		<div className="flex flex-col border-2 mb-8 ">
			<img className="w-36 h-36 mr-5" src={props.image} alt="" />
			<span className="text-xl">No. {props.id}</span>
			<span className="text-xl">{props.name}</span>
			<div className="flex flex-row justify-start">{props.type.map((pokemon) => pokemonType(pokemon))}</div>
		</div>
	);
};

export default PokemonCard;
