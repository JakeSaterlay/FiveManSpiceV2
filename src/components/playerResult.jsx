import React from "react";

const PlayerResult = ({ player, onReshuffle }) => {
	return (
		<div className="flex items-center text-left text-slate-50 text-lg">
			<div className="mr-2 w-40">{player.name}</div>
			<div className="mr-2 w-40">{player.role}</div>
			<div className="w-40">{player.champion}</div>
			<button
				className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
				onClick={() => onReshuffle(player)}
			>
				Reselect Champion
			</button>
		</div>
	);
};

export default PlayerResult;
