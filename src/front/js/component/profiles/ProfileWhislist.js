import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";

export const ProfileWishlist = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [newTask, setNewTask] = React.useState("");
	const [listOfTasks, setListOfTasks] = React.useState(null);

	return (
		<div className="container-fluid ">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h1>Wishlist Items</h1>
				<p>{store.currentuser.needs}</p>
			</div>
		</div>
	);
};
