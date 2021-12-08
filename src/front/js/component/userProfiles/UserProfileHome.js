import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

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
	return (
		<>
			<div className="container">
				<div className="h-100 p-5 rounded-3">
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
												<td>cool shirt</td>
												<td>Good Company</td>
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
									<h3>Current Bids</h3>
									<div className="items-carousel container-fluid d-flex flex-wrap">
										<div className="card">
											<img
												className="card-img-top"
												src="https://i.ibb.co/w4SD762/products-03.jpg"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h5 className="card-title">Tesla Cyberquad</h5>
											</div>
											<Link to="/shop/2">
												<button type="button" className="btn btn-two py-2 my-2">
													View item
												</button>
											</Link>
										</div>
										<div className="card">
											<img
												className="card-img-top"
												src="https://i.ibb.co/ZMx5t3R/Goku-shirt-01.jpg"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h5 className="card-title">Dragon Ball Z Shirt</h5>
											</div>
											<Link to="/">
												<button type="button" className="btn btn-two py-2 my-2">
													View item
												</button>
											</Link>
										</div>
										<div className="card ">
											<img
												className="card-img-top"
												src="https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h5 className="card-title">Awesome Shirt</h5>
											</div>
											<Link to="/">
												<button type="button" className="btn btn-two py-2 my-2">
													View item
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
