import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const SearchBar = () => {
	const [pokemon, setPokemon] = useState("");

	return (
		<div className="flex flex-row justify-center mt-14 items-center">
			<div className=" w-1/4">
				<input
					type="text"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-5 p-2.5"
					placeholder="Search for pokemon..."
					required
					onChange={(e) => setPokemon(e.target.value)}
				></input>
			</div>
			<Link to={`/${pokemon}`}>
				<button type="submit" className="bg-orange-400 p-2 ml-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</button>
			</Link>
		</div>
	);
};

export default SearchBar;
