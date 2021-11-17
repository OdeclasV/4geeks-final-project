import React from "react";

import { useParams } from "react-router-dom";

export const ProfileHome = props => {
	const params = useParams();
	return (
		<div className="col-md-6 m-5">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h2>Home</h2>
				<p>This is your profile Home</p>
			</div>
		</div>
	);
};
