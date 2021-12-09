import React from "react";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const UserProfileDonations = props => {
	const params = useParams();
	return (
		<div className="container">
			<div className="h-100 p-5 bg-light border rounded-3">
				{/* items donated table */}
				<div className="items-donated-block">
					<h1>Items Donated</h1>
					<h4 className="giveblue-font">Items you have donated</h4>
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Item</th>
								<th scope="col">Date</th>
								<th scope="col">Non Profit</th>
								<th scope="col">Status</th>
								<th scope="col">Date</th>
								<th scope="col">Time</th>
								{/* pick up status, scheduled date, contact non-profit */}
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>cool shirt</td>
								<td>21-Nov-21</td>
								<td>Good Company</td>
								<td>Pick Up Scheduled</td>
								<td>Dec. 14, 2021</td>
								<td>12PM - 4PM</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>cool pants</td>
								<td>22-Nov-21</td>
								<td>Real Good Company</td>
								<td>Drop Off Scheduled</td>
								<td>Dec. 14, 2021</td>
								<td>12PM - 4PM</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>cool shoes</td>
								<td>23-Nov-21</td>
								<td>Really Real Good Company</td>
								<td>Pick Up Scheduled</td>
								<td>Dec. 14, 2021</td>
								<td>12PM - 4PM</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* items auctioned table */}

				<div className="items-donated-block">
					<h1>Items Auctioned</h1>
					<h4 className="giveblue-font">Items you have put up for auction to fund Non-Profits</h4>
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Item</th>
								<th scope="col">Date</th>
								<th scope="col">Non Profit Funded</th>
								<th scope="col">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>cool shirt</td>
								<td>21-Nov-21</td>
								<td>Good Company</td>
								<td>$260</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>cool pants</td>
								<td>22-Nov-21</td>
								<td>Real Good Company</td>
								<td>$100</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>cool shoes</td>
								<td>23-Nov-21</td>
								<td>Really Real Good Company</td>
								<td>$450</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
