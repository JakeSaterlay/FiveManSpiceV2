import React from "react";

const Player = (props) => {
	return (
		<div>
			Player {props.player.id}
			<div>
				<input
					className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					name={props.id}
					onChange={props.onChange}
					type="text"
				/>
				<div class="flex flex-row">
					<button
						className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
						onClick={() => props.onChampSelect(props.player)}
					>
						Pick a Champion
					</button>
					<button
						className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
						onClick={() => props.onRoleSelect(props.player)}
					>
						Pick a Role
					</button>
				</div>
			</div>
		</div>
	);
};

export default Player;
