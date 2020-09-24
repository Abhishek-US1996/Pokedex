import React from "react";
import { Link } from "react-router-dom";

function Pokedex() {
	return (
		<div className='pokecontainer d-flex flex-column justify-content-center'>
			<h1 className='text-center' style={{ color: "white" }}>
				PokeDex
			</h1>
			<div className='pokedex mx-auto'>
				<div className='row '>
					<div className='col-lg-6 pokedex-left'>
						<div className='top d-flex flex-column justify-content-center'>
							<div className='container-fluid d-flex'>
								<div className='blue_btn shadow'></div>
								<div className='red_btn shadow'></div>
								<div className='yellow_btn shadow'></div>
								<div className='green_btn shadow'></div>
							</div>
						</div>
						<div className='left_pokedex_container'>
							<div className='left_main_container d-flex flex-column justify-content-center'>
								<div className='display mx-auto d-flex flex-column justify-content-center pokemon_background_byType'>
									<div className='mx-auto d-flex flex-column justify-content-center '>
										<img
											src='https://pokeres.bastionbot.org/images/pokemon/1.png'
											alt=''
											className='pokedex_display_image'
										/>
										<h4>Bulbasaur</h4>
									</div>
								</div>
								<div className='pokelist_buttons d-flex mx-auto mt-2'>
									<Link
										to='/All-Pokemon'
										className='blue_btn_all d-flex flex-column justify-content-center btn shadow'
									>
										All
									</Link>
									<div className='d-flex flex-column justify-content-center'>
										<div className='d-flex justify-content-between'>
											<button className='green_line_buttn shadow'></button>
											<button className='orange_line_buttn shadow'></button>
										</div>
									</div>
								</div>
								<div className='description_display mx-auto mt-2 d-flex flex-column justify-content-center'>
									<h4 className='mx-auto'>
										<Link to='/1'>No: 1</Link>
									</h4>
								</div>
							</div>
							<div className='left_joint_container'></div>
						</div>
					</div>
					<div className='col-lg-6 pokedex-right'>
						<div className='top'></div>
						<div className='pokedex_right_container'>
							<div className='container'></div>
							<div className='description_display_Right_panel mt-3 mx-auto d-flex flex-column justify-content-center'>
								<div className='container d-flex justify-content-between'>
									<h5>Height : 2.5'</h5>
									<h5>Weight : 20 lbs</h5>
								</div>
							</div>
							<div className='poke_number_pad mx-auto'>
								<div className='poke_num_line_one d-flex justify-content-center'>
									<button>0</button>
									<button>1</button>
									<button>2</button>
									<button>3</button>
									<button>4</button>
								</div>
								<div className='poke_num_line_two d-flex justify-content-center'>
									<button>5</button>
									<button>6</button>
									<button>7</button>
									<button>8</button>
									<button>9</button>
								</div>
							</div>
							<div className='pokemon_more_details mx-auto d-flex'>
								<div className='left_twobtns d-flex flex-column justify-content-center'>
									<div className='btn_nav_leftright_arrow d-flex justify-content-center'>
										<div className='red_btn shadow'></div>
										<div className='green_btn shadow'></div>
									</div>
								</div>
								<div className='right_twobtns d-flex flex-column justify-content-center'>
									<div className='btn_nav_leftright_arrow d-flex'>
										<button className='green_line_buttn shadow'></button>
										<button className='orange_line_buttn shadow'></button>
									</div>
								</div>
							</div>
							<div className='poke_tyiping_display mx-auto d-flex'>
								{/* typing loop starts here */}
								<div className='pokemon_typing d-flex flex-column justify-content-center'>
									<div className='container d-flex justify-content-center'>
										Type 1
									</div>
								</div>
								{/* typing loop ends here */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pokedex;
