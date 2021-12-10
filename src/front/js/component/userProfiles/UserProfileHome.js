import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const UserProfileHome = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	let { id } = useParams();

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0
	});

	// setting logged in nonprofit in order to
	// use its info in the dashboard
	let activeUser;

	// filters nonprofit array and selects
	// nonprofit based on id
	store.users &&
		store.users.filter(user => {
			if (user.id == id) {
				activeUser = user;
			}
		});

	// console.log(activeUser);

	const boxes = [
		{
			id: "funds",
			title: "Total Funds Donated:"
		},
		{
			id: "donations",
			title: "Total number of donations:"
		}
	];

	return (
		<>
			<div className="d-flex p-4">
				<div className="h-100 p-2 rounded-3">
					<div className="dashboard-page">
						{/* title section */}
						<div className="title-area container-fluid p-2">
							<h1>
								<strong>Welcome back, </strong>
								{activeUser ? activeUser.name : ""}!
							</h1>
						</div>
						{/* Dashboard content */}
						<div className="">
							<DragDropContext>
								{/* First Row */}
								<div className="row-one d-flex justify-content-between">
									<div className="overview-block p-2 m-2 bg-light border rounded-3 col-6">
										<h3>Total Funds Donated:</h3>
										<h2>{formatter.format(store.currentuser.totalfundsdonated)}</h2>
										<h4 className="text-success">
											{" "}
											<i className="fas fa-arrow-up" />
											5.27%
										</h4>
										<p>Since last month</p>
									</div>
									<div className="overview-block p-2 m-2 bg-light border rounded-3 col-6">
										<h3>Total Number of Donations:</h3>
										<h2>
											{activeUser
												? activeUser.donations.filter(
														donation => donation.donation_type == "donation"
												  ).length
												: 0}
										</h2>
										<h4 className="text-danger">
											{" "}
											<i className="fas fa-arrow-down" />
											3.42%
										</h4>
										<p>Since last month</p>
									</div>
								</div>
								{/* Second Row */}
								<div className="row-two d-flex justify-content-between">
									<div className="overview-block p-2 m-2 bg-light border rounded-3 col-4">
										<h3>Recent Donations</h3>
										<table className="table">
											<thead className="thead-dark">
												<tr>
													<th scope="col">#</th>
													<th scope="col">Item</th>
													<th scope="col">Non Profit</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Iron Throne</td>
													<td>Gotham City Cleaners</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>cool pants</td>
													<td>Real Good Company</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>cool shoes</td>
													<td>Really Real Good Company</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="overview-block p-2 m-2 bg-light border rounded-3 col-8">
										<h3>Your Bids</h3>
										<table className="table">
											<thead className="thead-dark">
												<tr>
													<th scope="col">#</th>
													<th scope="col">Item</th>
													<th scope="col">Closing Date</th>
													<th scope="col">Non Profit Funded</th>
													<th scope="col">Current Bid</th>
													<th scope="col">Your Bid</th>
													<th scope="col">Bid Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Dragon Ball Z Shirt</td>
													<td>14-Dec-21</td>
													<td>Dragon Ball Finders</td>
													<td>$300</td>
													<td className="text-success">$300</td>
													<td>You have the highest bid</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Yezzy</td>
													<td>15-Dec-21</td>
													<td>Muggles 4 Inclusion</td>
													<td>$753</td>
													<td className="text-danger">$680</td>
													<td>
														<Link to="/shop/3">
															<button type="button" className="btn btn-two py-2 my-2">
																View item
															</button>
														</Link>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Dining table set</td>
													<td>16-Dec-21</td>
													<td>Kakariko Village Society</td>
													<td>$500</td>
													<td className="text-danger">$350</td>
													<td>
														<Link to="/shop/4">
															<button type="button" className="btn btn-two py-2 my-2">
																View item
															</button>
														</Link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								{/* Third Row */}
								<div className="container-fluid overview-block p-2 m-2 bg-light border rounded-3 ">
									<h3>Open Orders</h3>
									{/* <h4 className="giveblue-font">Items you are currently bidding on!</h4> */}
									{/* Row 1 */}
									<div className="row justify-content-between">
										<div className="overview-block m-2 p-4 bg-light border rounded-3 col d-flex">
											<img
												className="col-4"
												src="https://i.ibb.co/qYMb1h2/227888-002-PRM-1-7deec36c-3490-4ce6-8a4c-311fdf792d1f-695x695.jpg"
												alt="Card image cap"
											/>
											<div className="mx-2 col-8">
												<h3>Dragon Ball Z Shirt</h3>
												<p>
													<strong>Auction Ends:</strong> 14-Dec-2021
												</p>
												<h5>Current Bid: $300</h5>
												<h5 className="text-succes">Your Bid: $300</h5>
												<p>
													<strong>Non-Profit Funded:</strong> Dragon Ball Finders
												</p>
												<button type="button" className="btn btn-two py-2 my-2">
													View item
												</button>
											</div>
										</div>

										<div className="overview-block m-2 p-4 bg-light border rounded-3 col d-flex">
											<img
												className="col-4"
												src="https://i.ibb.co/qYMb1h2/227888-002-PRM-1-7deec36c-3490-4ce6-8a4c-311fdf792d1f-695x695.jpg"
												alt="Card image cap"
											/>
											<div className="mx-2 col-8">
												<h3>Yezzy</h3>
												<p>
													<strong>Auction Ends:</strong> 15-Dec-2021
												</p>
												<h5>Current Bid: $753</h5>
												<h5 className="text-danger">Your Bid: $980</h5>
												<p>
													<strong>Non-Profit Funded:</strong> Muggles 4 Inclusion
												</p>
												<button type="button" className="btn btn-two py-2 my-2">
													View item
												</button>
											</div>
										</div>
									</div>
								</div>
							</DragDropContext>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
