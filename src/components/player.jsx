import React from "react";

const Player = (props) => {
	const display = props.player.submitted ? "mb-2 hidden" : "mb-2";
	return (
		<div className={display}>
			<div>
				<div className="border-b border-white-800 py-2">
					<input
						placeholder={"Player " + props.player.id}
						className="appearance-none bg-transparent border-none w-full text-neutral-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
						name={props.id}
						onChange={props.onChange}
						type="text"
					/>
				</div>
				<div className="flex flex-row">
					<button
						className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 mr-2 mt-2 px-4 rounded"
						onClick={() => props.onPlayerSubmit(props.player)}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Player;
