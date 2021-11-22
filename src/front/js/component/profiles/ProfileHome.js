import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";

export const ProfileHome = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="col-md-6 m-5">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h2>Welcome! {store.currentuser.name}</h2>
				<p>{store.currentuser.description}</p>
				<h3>Total Funds Raised: {store.currentuser.totalfunds}</h3>
				<h3>Donations Recieved</h3>
				<p>Carousel with items or just list of items</p>
				<h3>Wishlist items</h3>
				<p>{store.currentuser.needs}</p>
			</div>
		</div>
	);
};
