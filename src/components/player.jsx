import React from "react";

const Player = (props) => {
	return (
		<div>
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
			</div>
		</div>
	);
};

export default Player;
