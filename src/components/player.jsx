import React from "react";

const Player = (props) => {
	return (
		<div>
			Player {props.player.id}
			<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				name={props.id}
				onChange={props.onChange}
				type="text"
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => props.onChampSelect(props.player)}
			>
				Pick a Champion
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => props.onRoleSelect(props.player)}
			>
				Pick a Role
			</button>
		</div>
	);
};

export default Player;
