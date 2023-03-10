import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
	return (
		<div className="flex justify-center bg-gradient-to-r from-white to-red-500 items-center">
			<div className="flex flex-row justify-between w-10/12">
				<Link to="/">
					<div className="flex flex-row items-center">
						<span className="text-2xl font-bold pr-5">Pokedex</span>
						<img
							className="h-10 w-10"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
							alt=""
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Topbar;
