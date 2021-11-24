import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";

export const ProfileWishlist = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid ">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h2>Wishlist Items</h2>
				<p>{store.currentuser.needs}</p>
				<button type="submit" className="btn btn-primary float-right">
					Add Item
				</button>
			</div>
		</div>
	);
};
