import React from "react";

const Player = (props) => {
	return (
		<div className="mb-2">
			<div>
				<div className="border-b border-white-800 py-2">
					<input
						placeholder={"Player " + props.player.id}
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						name={props.id}
						onChange={props.onChange}
						type="text"
					/>
				</div>
				<div className="flex flex-row">
					<button
						className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
						onClick={() => props.onChampSelect(props.player)}
					>
						Pick a Champion
					</button>
					<button
						className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
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
