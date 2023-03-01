import React from "react";
import Home from "./pages/home";
import Pokemoninfo, { pokemonLoader } from "./pages/pokemoninfo";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<Home />} />
			<Route path="/:pokemonName" element={<Pokemoninfo />} loader={pokemonLoader} />
		</Route>
	)
);

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
