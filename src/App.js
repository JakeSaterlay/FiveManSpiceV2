import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChampionPicker from "./components/championPicker";
import Intro from "./components/intro";

class App extends Component {
	state = {
		showIntro: true,
	};

	handleShowIntroClick = () => {
		this.setState({ showIntro: false });
	};
	render() {
		return (
			<div className="flex flex-col items-center bg-slate-800 h-screen w-screen">
				<Intro
					showIntro={this.state.showIntro}
					onShowIntroClick={this.handleShowIntroClick}
				/>
				<ChampionPicker showSection={this.state.showIntro} />
			</div>
		);
	}
}

export default App;
