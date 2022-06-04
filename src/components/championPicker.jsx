import React, { Component } from "react";
import Player from "./player";
import PlayerResult from "./playerResult";
import { champions } from "../constants/constants";

let roles = ["top", "mid", "jungler", "adc", "support"];

class ChampionPicker extends Component {
	state = {
		players: [
			{ id: 1, name: "", role: "", champion: "" },
			{ id: 2, name: "", role: "", champion: "" },
			{ id: 3, name: "", role: "", champion: "" },
			{ id: 4, name: "", role: "", champion: "" },
			{ id: 5, name: "", role: "", champion: "" },
		],
		submitted: false,
		originalRoles: [],
	};

	componentDidMount() {
		this.setState({ originalRoles: [...roles] });
	}

	handleNameChange = ({ currentTarget: input }) => {
		console.log("Name Change", input.name);
		const players = [...this.state.players];
		const player = players.find((x) => x.id == input.name);
		player.name = input.value;
		this.setState({ players });
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

	handleSubmitAll = () => {
		const players = [...this.state.players];
		const originalRoles = [...this.state.originalRoles];
		players.forEach(function (player) {
			var randomChampion =
				champions[Math.floor(Math.random() * champions.length)];
			var index = champions.indexOf(randomChampion);
			champions.splice(index, 1);

			// get random role and splice
			if (roles.length === 0) {
				roles = originalRoles;
			}
			var randomRole = roles[Math.floor(Math.random() * roles.length)];
			var index = roles.indexOf(randomRole);
			roles.splice(index, 1);
			player.champion = randomChampion;
			player.role = randomRole;
		});
		this.setState({ players, submitted: true });
	};

	render() {
		const { players } = this.state;
		return (
			<div className="flex flex-col items-center bg-slate-800 h-screen w-screen">
				{this.state.submitted === false &&
					players.map((player) => (
						<Player
							id={player.id}
							key={player.id}
							name={player.id}
							player={player}
							onChange={this.handleNameChange}
						/>
					))}

				{this.state.submitted === true &&
					players.map((player) => (
						<PlayerResult
							key={player.id}
							onReshuffle={this.handleReshuffle}
							player={player}
						/>
					))}
				<button
					className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
					onClick={() => this.handleSubmitAll()}
				>
					Submit All
				</button>
			</div>
		);
	}
}

export default ChampionPicker;
