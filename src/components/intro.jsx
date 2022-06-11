import React from "react";
const Intro = ({ showIntro, onShowIntroClick }) => {
	console.log("SHOW INTRO: ", showIntro);
	const display = !showIntro ? "none" : "";
	return (
		<div className="flex flex-col items-center" style={{ display: display }}>
			<h1 className="text-4xl text-slate-50">
				Welcome to League of Legends Champion Randomiser
			</h1>
			<p className="text-slate-50">
				Enter your names, and your champions will be randomised! If you don't
				have that champion, don't panic! You can reroll your selection.
			</p>
			<button
				className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
				onClick={() => onShowIntroClick()}
			>
				Got it!
			</button>
		</div>
	);
};

export default Intro;
