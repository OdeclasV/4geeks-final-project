import React from "react";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileDashboard = props => {
	const params = useParams();
	return (
		<div className="container-fluid ">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h1>My Donations</h1>
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
