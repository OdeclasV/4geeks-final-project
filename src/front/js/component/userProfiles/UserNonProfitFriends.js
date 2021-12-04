import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const UserNonProfitFriends = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid ">
				<div className="h-100 p-5 bg-light border rounded-3">
					<div className="closed-orders">
						<h1>Closed Orders</h1>
						<h4 className="giveblue-font">Bids you&apos;ve won and the Non-Profits you&apos;ve funded!</h4>
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
									<td>11-Dec-21</td>
									<td>Gotham City Cleaners</td>
									<td>$320</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>cool pants</td>
									<td>12-Dec-21</td>
									<td>Real Good Company</td>
									<td>$60</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* open orders table*/}

					<div className="closed-orders">
						<h1>Open Orders</h1>
						<h4 className="giveblue-font">Items you are currently bidding on!</h4>
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
									<td>cool shirt</td>
									<td>10-Dec-21</td>
									<td>Gotham City Cleaners</td>
									<td>$320</td>
									<td className="text-success">$320</td>
									<td>You have the highest bid</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Iron Throne</td>
									<td>12-Dec-21</td>
									<td>Real Good Company</td>
									<td>$1010</td>
									<td className="text-danger">$825</td>
									<td>
										<Link to="/shop/5">
											<button type="button" className="btn btn-two py-2 my-2">
												View item
											</button>
										</Link>
									</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>cool shoes</td>
									<td>16-Dec-21</td>
									<td>Really Real Good Company</td>
									<td>$200</td>
									<td className="text-danger">$140</td>
									<td>
										<Link to="/shop/5">
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
			</div>
		</>
	);
};
