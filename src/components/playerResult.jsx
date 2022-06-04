import React from "react";

const PlayerResult = ({ player }) => {
	return (
		<div className="flex text-slate-50">
			<div className="mr-2">{player.name}</div>
			<div className="mr-2">{player.role}</div>
			<div>{player.champion}</div>
		</div>
	);
};

export default PlayerResult;
