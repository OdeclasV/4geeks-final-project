import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";

export const ProfileWishlist = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="col-md-6 m-5">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h2>Wishlist Items</h2>
				<p>{store.currentuser.needs}</p>
			</div>
			<form>
				<div className="form-group">
					<label forHTML="exampleInputEmail1">Add items to your wishlist</label>
					<input
						type="item"
						className="form-control"
						id="add-item-input"
						placeholder="Shirts, shoes, bicycles"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Well never share your email with anyone else.
					</small>
				</div>
				<button type="submit" className="btn btn-primary">
					Add Item
				</button>
			</form>
		</div>
	);
};
