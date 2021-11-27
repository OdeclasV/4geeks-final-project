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
				<h2>Wishlist Items</h2>
				<p>{store.currentuser.needs}</p>
				<button type="submit" className="btn btn-primary float-right">
					Add Item
				</button>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Item</th>
							<th scope="col">Date</th>
							<th scope="col">Donor</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>cool shirt</td>
							<td>21-Nov-21</td>
							<td>George</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>cool pants</td>
							<td>22-Nov-21</td>
							<td>Gian</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>cool shoes</td>
							<td>23-Nov-21</td>
							<td>Gil</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
