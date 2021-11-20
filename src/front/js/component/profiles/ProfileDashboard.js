import React from "react";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileDashboard = props => {
	const params = useParams();
	return (
		<div className="col-md-6 m-5">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h2>Dashboard</h2>
				<p>This is your dashboard, with some info.</p>
			</div>
		</div>
	);
};
