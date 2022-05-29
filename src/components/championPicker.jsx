import React, { Component } from "react";
import Player from "./player";
class ChampionPicker extends Component {
	state = {
		players: [
			{ id: 1, name: "", role: "", champion: "" },
			{ id: 2, name: "", role: "", champion: "" },
			{ id: 3, name: "", role: "", champion: "" },
			{ id: 4, name: "", role: "", champion: "" },
			{ id: 5, name: "", role: "", champion: "" },
		],
	};

	handleNameChange = ({ currentTarget: input }) => {
		console.log("Name Change", input.name);
		const players = [...this.state.players];
		players[input.name - 1].name = input.value;
		this.setState({ players });
	};

	handleChampSelect = (player) => {
		console.log("Champ Select", player.id);
	};

	handleRoleSelect = (player) => {
		console.log("Role Select", player.id);
	};

	render() {
		const { players } = this.state;
		return (
			<div class="container mx-auto">
				<h1 className="text-3xl font-bold underline">Welcome</h1>
				{players.map((player) => (
					<Player
						id={player.id}
						key={player.id}
						name={player.id}
						player={player}
						onChange={this.handleNameChange}
						onChampSelect={this.handleChampSelect}
						onRoleSelect={this.handleRoleSelect}
					/>
				))}
			</div>
		);
	}
}

export default ChampionPicker;
