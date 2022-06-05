import React, { Component } from "react";
import Player from "./player";
import PlayerResult from "./playerResult";

let roles = ["top", "mid", "jungler", "adc", "support"];

const champions = [
	"Aatrox",
	"Ahri",
	"Akali",
	"Akshan",
	"Alistar",
	"Amumu",
	"Anivia",
	"Annie",
	"Aphelios",
	"Ashe",
	"Aurelion Sol",
	"Azir",
	"Bard",
	"Blitzcrank",
	"Brand",
	"Braum",
	"Caitlyn",
	"Camille",
	"Cassiopeia",
	"Cho'Gath",
	"Corki",
	"Darius",
	"Diana",
	"Dr. Mundo",
	"Draven",
	"Ekko",
	"Elise",
	"Evelynn",
	"Ezreal",
	"Fiddlesticks",
	"Fiora",
	"Fizz",
	"Galio",
	"Gangplank",
	"Garen",
	"Gnar",
	"Gragas",
	"Graves",
	"Gwen",
	"Hecarim",
	"Heimerdinger",
	"Illaoi",
	"Irelia",
	"Ivern",
	"Janna",
	"Jarvan IV",
	"Jax",
	"Jayce",
	"Jhin",
	"Jinx",
	"Kai'Sa",
	"Kalista",
	"Karma",
	"Karthus",
	"Kassadin",
	"Katarina",
	"Kayle",
	"Kayn",
	"Kennen",
	"Kha'Zix",
	"Kindred",
	"Kled",
	"Kog'Maw",
	"LeBlanc",
	"Lee Sin",
	"Leona",
	"Lillia",
	"Lissandra",
	"Lucian",
	"Lulu",
	"Malphite",
	"Malzahar",
	"Maokai",
	"Master Yi",
	"Miss Fortune",
	"Mordekaiser",
	"Morgana",
	"Nami",
	"Nasus",
	"Nautilus",
	"Neeko",
	"Nidalee",
	"Nocturne",
	"Nunu & Willump",
	"Olaf",
	"Orianna",
	"Ornn",
	"Pantheon",
	"Poppy",
	"Pyke",
	"Qiyana",
	"Quinn",
	"Rakan",
	"Rammus",
	"Rek'Sai",
	"Rell",
	"Renata Glasc",
	"Renekton",
	"Rengar",
	"Riven",
	"Rumble",
	"Ryze",
	"Samira",
	"Sejuani",
	"Senna",
	"Seraphine",
	"Sett",
	"Shaco",
	"Shen",
	"Shyvanna",
	"Singed",
	"Sion",
	"Sivir",
	"Skarner",
	"Sona",
	"Soraka",
	"Swain",
	"Sylas",
	"Syndra",
	"Tahm Kench",
	"Taliyah",
	"Talon",
	"Taric",
	"Teemo",
	"Thresh",
	"Tristana",
	"Trundle",
	"Tryndamere",
	"Twisted Fate",
	"Twitch",
	"Udyr",
	"Urgot",
	"Varus",
	"Vayne",
	"Veigar",
	"Vel'Koz",
	"Vex",
	"Vi",
	"Viego",
	"Viktor",
	"Vladimir",
	"Volibear",
	"Warwick",
	"Wukong",
	"Xayah",
	"Xerath",
	"Xin Zhao",
	"Yasuo",
	"Yone",
	"Yorick",
	"Yuumi",
	"Zac",
	"Zed",
	"Zeri",
	"Ziggs",
	"Zilean",
	"Zoe",
	"Zyra",
];

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
		console.log("Hello");
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
