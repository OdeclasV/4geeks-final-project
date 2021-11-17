import React from "react";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileContent = props => {
	const params = useParams();

	if (params.profileOption == undefined) {
		return (
			<div className="col-md-6 m-5">
				<div className="h-100 p-5 bg-light border rounded-3">
					<h2>Home</h2>
					<p>
						Or, keep it light and add a border for some added definition to the boundaries of your content.
					</p>
				</div>
			</div>
		);
	}

	if (params.profileOption == "dashboard") {
		return (
			<div className="col-md-6 m-5">
				<div className="h-100 p-5 bg-light border rounded-3">
					<h2>Hello</h2>
					<p>
						Or, keep it light and add a border for some added definition to the boundaries of your content.
					</p>
				</div>
			</div>
		);
	}

	if (params.profileOption == "orders") {
		return (
			<div className="col-md-6 m-5">
				<div className="h-100 p-5 bg-light border rounded-3">
					<h2>Goodbye</h2>
					<p>
						Or, keep it light and add a border for some added definition to the boundaries of your content.
					</p>
				</div>
			</div>
		);
	}
	if (params.profileOption == "settings") {
		return (
			<div className="col-md-6 m-5">
				<div className="h-100 p-5 bg-light border rounded-3">
					<h2>Oh hey</h2>
					<p>
						Or, keep it light and add a border for some added definition to the boundaries of your content.
					</p>
				</div>
			</div>
		);
	}
};

ProfileContent.propTypes = {
	profileOption: PropTypes.string
};
