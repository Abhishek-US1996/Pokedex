import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Pokemon(props) {
	const { match, history } = props;
	const { params } = match;
	const { pokemonId } = params;
	const [pokemon, setPokemon] = useState(undefined);
	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
			.then(function (response) {
				const { data } = response;
				setPokemon(data);
			})
			.catch(function (error) {
				setPokemon(false);
			});
	}, [pokemonId]);
	const pokedata = (pokemon) => {
		const { name, id, height, weight, types } = pokemon;
		const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		return (
			<>
				<div className='poke_data_container'>
					<img src={fullImageUrl} alt='' className='pokedex_display_image' />
					<h4 style={{ color: "white" }}>Name : {name}</h4>
					<div className='d-flex justify-content-center'>
						<h4>Height: {height} </h4>
						<h4>Weight: {weight} </h4>
					</div>
					<div className='d-flex justify-content-center'>
						<h4 variant='h6'> Types:</h4>
						{types.map((typeInfo) => {
							const { type } = typeInfo;
							const { name } = type;
							return <h4 key={name}> {`${name}`}</h4>;
						})}
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
				{pokemon !== undefined && pokemon && pokedata(pokemon)}
				{pokemon === false && <h4> Pokemon not found</h4>}

				{pokemon !== undefined && (
					<button className='btn btn-primary' onClick={() => history.push("/")}>
						back to pokedex
					</button>
				)}
			</div>
		</div>
	);
}

export default Pokemon;
