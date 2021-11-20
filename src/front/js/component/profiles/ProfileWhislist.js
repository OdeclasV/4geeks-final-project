import React from "react";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileWishlist = props => {
	const params = useParams();
	return (
		<div className="col-md-6 m-5">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h2>Wishlist</h2>
				<p>Theres going to be a list here with some items</p>
			</div>
		</div>
	);
};
