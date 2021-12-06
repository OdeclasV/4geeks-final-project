import React, { useState, useContext } from "react";

import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const ProfileDashboard = props => {
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

	// activeNonprofit
	// 	? activeNonprofit.items_received.map(item => {
	// 			console.log(item.category);
	// 			console.log(item.item_name);
	// 			console.log(item.posted_date);
	// 			console.log(item.donated_by);
	// 	  })
	// 	: console.log("none");

	//let userDonation = store.users && store.users.filter(user => user.id == item.donated_by);

	const getUserNames = itemId => {
		// store.users && store.users.filter(user => user.id == itemId);
		store.users &&
			store.users.map(user => {
				if (user.id == itemId) {
					return user;
				}
			});
	};

	console.log(getUserNames(3));

	return (
		<div className="container-fluid ">
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
						</tr>
					</thead>
					<tbody>
						{activeNonprofit
							? activeNonprofit.items_received.map(item => {
									let itemCount = 0;
									return (
										<tr key={item.id}>
											<th scope="row">{(itemCount += 1)}</th>
											<td>{item.category}</td>
											<td>{item.posted_date}</td>
											<td>{getUserNames(item.donated_by)}</td>
											<td>20-Dec-2021</td>
										</tr>
									);
							  })
							: console.log("none")}
						{/* <tr>
							<th scope="row">1</th>
							<td>cool shirt</td>
							<td>21-Nov-21</td>
							<td>George</td>
							<td>15-Dec-2021</td> */}
						{/* <td>
								<label htmlFor="pickup-date">Select Date:</label>
								<input type="date" id="pickup-date" name="pickup-date" />
								<input type="submit" />
							</td> */}
						{/* </tr>
						<tr>
							<th scope="row">2</th>
							<td>cool pants</td>
							<td>22-Nov-21</td>
							<td>Gian</td>
							<td>20-Dec-2021</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>cool shoes</td>
							<td>23-Nov-21</td>
							<td>Gil</td>
							<td>20-Dec-2021</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</div>
	);
};
