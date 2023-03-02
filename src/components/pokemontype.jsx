import React from "react";

const PokemonType = (pokemon) => {
	let type_color = "";
	let typemap = new Map([
		["fire", "bg-red-400 text-white"],
		["water", "bg-blue-500 text-white"],
		["grass", "bg-green-500 text-black"],
		["normal", "bg-gray-400 text-black"],
		["flying", "bg-gray-200 text-black"],
		["rock", "bg-stone-500 text-white"],
		["ground", "bg-amber-700 text-white"],
		["fighting", "bg-orange-500 text-white"],
		["electric", "bg-yellow-300 text-black"],
		["bug", "bg-lime-400 text-white"],
		["poison", "bg-purple-800 text-white"],
		["ghost", "bg-purple-300 text-white"],
		["psychic", "bg-fuchsia-500 text-white"],
		["fairy", "bg-red-100 text-black"],
		["ice", "bg-cyan-200 text-black"],
		["steel", "bg-zinc-500 text-white"],
		["dark", "bg-slate-700 text-white"],
		["dragon", "bg-sky-400 text-white"],
	]);

	if (typemap.has(pokemon.type.name)) {
		type_color = typemap.get(pokemon.type.name);
	}

	return <p className={`mr-5 px-2 rounded-sm + ${type_color}`}>{pokemon.type.name.replace(/^./, (str) => str.toUpperCase())}</p>;
};

export default PokemonType;
