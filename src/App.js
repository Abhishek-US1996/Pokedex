import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./Pokemon";
import Pokedex from "./Pokedex";
import AllPokemonList from "./AllPokemonList";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' render={(props) => <Pokedex {...props} />} />
					<Route
						exact
						path='/All-Pokemon'
						render={(props) => <AllPokemonList {...props} />}
					/>
					<Route
						exact
						path='/:pokemonId'
						render={(props) => <Pokemon {...props} />}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
