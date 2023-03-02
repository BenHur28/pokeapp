import React from "react";

const SearchBar = () => {
	return (
		<div className="mt-14">
			<form className="flex items-center justify-center">
				<label for="pokemon-search"></label>
				<div className="relative w-1/4">
					<input
						type="text"
						id="pokemon-search"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-5 p-2.5"
						placeholder="Search for pokemon..."
						required
					></input>
				</div>
				<button type="submit" className="bg-orange-400 p-1.5 ml-5">
					Search Icon Here
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
