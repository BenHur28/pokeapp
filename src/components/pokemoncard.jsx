import React from "react";
import { Link } from "react-router-dom";
import PokemonType from "./pokemontype";

const PokemonCard = (props) => {
	return (
		<div className="flex flex-col mb-8 py-4 px-3">
			<Link to={`/${props.name}`}>
				<img className="w-48 h-48 mx-5 mb-3 bg-slate-200 rounded-md py-4 px-4" src={props.image} alt="" />
			</Link>
			<span className="text-xs ml-7">#{props.id}</span>
			<span className="text-xl ml-7 mb-2">{props.name}</span>
			<div className="flex flex-row justify-start ml-7">{props.type.map((pokemon) => PokemonType(pokemon))}</div>
		</div>
	);
};

export default PokemonCard;
