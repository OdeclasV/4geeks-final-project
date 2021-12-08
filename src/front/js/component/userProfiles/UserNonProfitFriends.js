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
					{/* open orders table*/}

					<div className="open-orders mb-5">
						<h1>Open Orders</h1>
						<h4 className="giveblue-font">Items you are currently bidding on!</h4>
						{/* Row 1 */}
						<div className="row-one d-flex justify-content-between">
							<div className="overview-block m-2 p-1 bg-light border rounded-3 col-6 d-flex">
								<img
									className="col-4"
									src="https://i.ibb.co/w4SD762/products-03.jpg"
									alt="Card image cap"
								/>
								<div className="mx-2 col-8">
									<h3>Tesla Cyberquad</h3>
									<p>
										<strong>Auction Ends:</strong> 13-Dec-2021
									</p>
									<h5>Current Bid: $950</h5>
									<h5 className="text-danger">Your Bid: $700</h5>
									<Link to="/shop/2">
										<button type="button" className="btn btn-two py-2 my-2">
											View item
										</button>
									</Link>
								</div>
							</div>

							<div className="overview-block m-2 p-1 bg-light border rounded-3 col-6 d-flex">
								<img
									className="col-4"
									src="https://i.ibb.co/qYMb1h2/227888-002-PRM-1-7deec36c-3490-4ce6-8a4c-311fdf792d1f-695x695.jpg"
									alt="Card image cap"
								/>
								<div className="mx-2 col-8">
									<h3>Iron Throne</h3>
									<p>
										<strong>Auction Ends:</strong> 11-Dec-2021
									</p>
									<h5>Current Bid: $500</h5>
									<h5 className="text-success">Your Bid: $500</h5>
									<button type="button" className="btn btn-two py-2 my-2">
										View item
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Closed Orders */}

					<div className="closed-orders">
						<h1>Closed Orders</h1>
						<h4 className="giveblue-font">Bids you&apos;ve won and the Non-Profits you&apos;ve funded!</h4>

						<div className="row-one d-flex justify-content-between">
							<div className="overview-block m-2 p-1 bg-light border rounded-3 col-6 d-flex">
								<img
									className="col-4"
									src="https://i.ibb.co/qYMb1h2/227888-002-PRM-1-7deec36c-3490-4ce6-8a4c-311fdf792d1f-695x695.jpg"
									alt="Card image cap"
								/>
								<div className="mx-2 col-8">
									<h3>Wood Dining Table</h3>
									<h4>Final Bid: $670</h4>
									<p>
										<strong>Non-Profit Funded:</strong> Gotham Clean Water
									</p>
									<button type="button" className="btn btn-two py-2 my-2">
										View item
									</button>
								</div>
							</div>

							<div className="overview-block m-2 p-1 bg-light border rounded-3 col-6 d-flex">
								<img
									className="col-4"
									src="https://i.ibb.co/qYMb1h2/227888-002-PRM-1-7deec36c-3490-4ce6-8a4c-311fdf792d1f-695x695.jpg"
									alt="Card image cap"
								/>
								<div className="mx-2 col-8">
									<h3>Iron Throne</h3>
									<h4>Final Bid: $980</h4>
									<p>
										<strong>Non-Profit Funded:</strong> Pokemon Guys
									</p>
									<button type="button" className="btn btn-two py-2 my-2">
										View item
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
