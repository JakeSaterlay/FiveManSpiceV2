import React, { Component } from "react";
import Player from "./player";
import PlayerResult from "./playerResult";
import { roles, champions } from "../constants/constants";
class ChampionPicker extends Component {
	state = {
		players: [
			{ id: 1, name: "", role: "", champion: "", submitted: false },
			{ id: 2, name: "", role: "", champion: "", submitted: false },
			{ id: 3, name: "", role: "", champion: "", submitted: false },
			{ id: 4, name: "", role: "", champion: "", submitted: false },
			{ id: 5, name: "", role: "", champion: "", submitted: false },
		],
		submitCount: 0,
	};

	handleNameChange = ({ currentTarget: input }) => {
		console.log("Name Change", input.name);
		const players = [...this.state.players];
		const player = players.find((x) => x.id == input.name);
		player.name = input.value;
		this.setState({ players });
	};

	handlePlayerSubmit = (player) => {
		console.log("Player Submitted", player.id);
		const players = [...this.state.players];
		const submittedPlayer = players.find((x) => x.id == player.id);

		// get random champion and splice
		var randomChampion =
			champions[Math.floor(Math.random() * champions.length)];
		var index = champions.indexOf(randomChampion);
		champions.splice(index, 1);

		// get random role and splice
		var randomRole = roles[Math.floor(Math.random() * roles.length)];
		var index = roles.indexOf(randomRole);
		roles.splice(index, 1);

		submittedPlayer.champion = randomChampion;
		submittedPlayer.role = randomRole;
		submittedPlayer.submitted = true;

		this.setState({ players, submitCount: this.state.submitCount + 1 });
	};

	handleReshuffle = (player) => {
		const players = [...this.state.players];
		const submittedPlayer = players.find((x) => x.id == player.id);
		// get random champion and splice
		var randomChampion =
			champions[Math.floor(Math.random() * champions.length)];
		var index = champions.indexOf(randomChampion);
		champions.splice(index, 1);
		submittedPlayer.champion = randomChampion;
		this.setState({ players });
	};

	render() {
		const { players } = this.state;
		return (
			<div className="flex flex-col items-center bg-slate-800 h-screen w-screen">
				{players.map((player) => (
					<Player
						id={player.id}
						key={player.id}
						name={player.id}
						player={player}
						onChange={this.handleNameChange}
						onPlayerSubmit={this.handlePlayerSubmit}
					/>
				))}
				{this.state.submitCount === 5 &&
					players.map((player) => (
						<PlayerResult onReshuffle={this.handleReshuffle} player={player} />
					))}
			</div>
		);
	}
}

export default ChampionPicker;
