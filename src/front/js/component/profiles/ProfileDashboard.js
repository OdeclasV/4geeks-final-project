import React, { useState, useContext } from "react";

import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const ProfileDashboard = ({ nonprofit }) => {
	const { store, actions } = useContext(Context);
	let { id } = useParams();

	// setting logged in nonprofit in order to
	// use its info in the dashboard
	let activeNonprofit;

	// filters nonprofit array and selects
	// nonprofit based on id
	store.nonprofits &&
		store.nonprofits.filter(nonprofit => {
			if (nonprofit.id == id) {
				activeNonprofit = nonprofit;
			}
		});

	// const shorthMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const getMonthName = month => {
		switch (month) {
			case 1:
				return "Jan";
			case 2:
				return "Feb";
			case 3:
				return "Mar";
			case 4:
				return "Apr";
			case 5:
				return "May";
			case 6:
				return "Jun";
			case 7:
				return "Jul";
			case 8:
				return "Aug";
			case 9:
				return "Sep";
			case 10:
				return "Oct";
			case 11:
				return "Nov";
			case 12:
				return "Dec";
		}
	};
	console.log(getMonthName(12));

	return (
		<div className="container">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h1>Donations Received</h1>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Item</th>
							<th scope="col">Date</th>
							<th scope="col">Donor</th>
							<th scope="col">Pick Up Date</th>
							<th scope="col">Pick Up Time Window</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>cool shoes</td>
							<td>23-Nov-21</td>
							<td>Severus S.</td>
							<td>20-Dec-2021</td>
							<td>12AM - 4PM</td>
						</tr>

						{activeNonprofit
							? activeNonprofit.items_received
									.filter(item => item.donation_type == "donation")
									.map(item => {
										return (
											<tr key={item.id}>
												<th scope="row">1</th>
												<td>{item.category}</td>
												<td>{`${new Date(item.posted_date).getDate()}-${getMonthName(
													new Date(item.posted_date).getMonth() + 1
												)}-${new Date(item.posted_date).getFullYear()}`}</td>
												<td>
													{store.users
														? store.users.map(user => {
																if (user.id == item.donated_by) {
																	return user.name;
																}
														  })
														: ""}
												</td>
												<td>20-Dec-2021</td>
												<td>8AM - 12PM</td>
											</tr>
										);
									})
							: console.log("none")}
					</tbody>
				</table>
			</div>
		</div>
	);
};

ProfileDashboard.propTypes = {
	nonprofit: PropTypes.object
};
