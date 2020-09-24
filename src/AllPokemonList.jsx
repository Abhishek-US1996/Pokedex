import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllPokemonList(props) {
	const { history } = props;
	const [pokemonData, setPokemonData] = useState({});
	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon?limit=1150`)
			.then(function (response) {
				const { data } = response;
				const { results } = data;
				const newPokemonData = {};
				results.forEach((pokemon, index) => {
					newPokemonData[index + 1] = {
						id: index + 1,
						name: pokemon.name,
						sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							index + 1
						}.png`,
					};
				});
				setPokemonData(newPokemonData);
			});
	}, []);
	const getPokemonCard = (pokemonId) => {
		const { id, name, sprite } = pokemonData[pokemonId];
		return (
			<>
				<div className='col-md-3' key={pokemonId}>
					<div className='card' onClick={() => history.push(`/${id}`)}>
						<img src={sprite} alt='' className='card-image-top' />
						<div className='card-body'>{`${id}. ${name}`}</div>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className='pokecontainer d-flex flex-column justify-content-center'>
			<h1 className='text-center' style={{ color: "white" }}>
				<Link to='/'>PokeDex</Link>
			</h1>
			<div className='pokemon_pokedex mx-auto text-center d-flex flex-column justify-content-center'>
				<h1>All pokemon list</h1>
				<div className='poke_listing container'>
					<div className='row gy-3'>
						{Object.keys(pokemonData).map(
							(pokemonId) =>
								pokemonData[pokemonId].name && getPokemonCard(pokemonId)
						)}
					</div>
				</div>
			</div>
			<div className='d-flex justify-content-center'>
				<button>Previous</button>
				<button>Next</button>
			</div>
		</div>
	);
}

export default AllPokemonList;
