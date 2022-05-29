import React from "react";

const Player = (props) => {
	return (
		<div>
			Player {props.player.id}
			<input name={props.id} onChange={props.onChange} type="text" />
			<button onClick={() => props.onChampSelect(props.player)}>
				Pick a Champion
			</button>
			<button onClick={() => props.onRoleSelect(props.player)}>
				Pick a Role
			</button>
		</div>
	);
};

export default Player;
