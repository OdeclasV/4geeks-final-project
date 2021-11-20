import React from "react";

import { useParams } from "react-router-dom";

export const ProfileHome = props => {
	const params = useParams();
	return (
		<div className="col-md-6 m-5">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h2>Welcome!</h2>
				<p>This is will be an overview of your account</p>
				<h3>Total Funds Raised: $30,000</h3>
				{/* Total funds raised */}
				<h3>Donations Recieved</h3>
				<p>Carousel with items or just list of items</p>
				<h3>Wishlist items</h3>
				{/* Wishlist items */}
			</div>
		</div>
	);
};
