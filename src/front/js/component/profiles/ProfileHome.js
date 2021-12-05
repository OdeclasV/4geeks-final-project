import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import { LineGraph } from "../Graphs/LineGraph";

export const ProfileHome = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	let { index } = useParams();

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0
	});

	//console.log(store.nonprofits[0] && store.nonprofits[0].items_received.filter(item => item.donation_type == 1));

	//console.log(store.nonprofits[index] && store.nonprofits[index].items_received);

	return (
		<>
			<div className="container">
				<div className="h-100 p-5 rounded-3">
					<div className="dashboard-page">
						{/* title section */}
						<div className="title-area container-fluid p-2">
							<h1>
								<strong>Welcome back, </strong>
								{store.nonprofits[index] ? store.nonprofits[index].name : ""}
							</h1>
						</div>
						{/* Dashboard content */}
						<div className="">
							{/* First Row */}
							<div className="row-one d-flex justify-content-between">
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-6">
									<h3>Total Funds Raised:</h3>
									<h2>{formatter.format(store.currentnonprofit.totalfunds)}</h2>
									<h4 className="text-success">
										{" "}
										<i className="fas fa-arrow-up" />
										5.27%
									</h4>
									<p>Since last month</p>
								</div>
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-6">
									<h3>Total Donations Recieved:</h3>
									<h2>
										{store.nonprofits[index]
											? store.nonprofits[index].items_received.filter(
													item => item.donation_type == 1
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
							<div className="row-one d-flex justify-content-between">
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-6">
									<h3>Funds Compared to last Month</h3>
									<LineGraph />
								</div>
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-6">
									<h3>Last Weeks Donations:</h3>
									{/* <LineGraph /> */}
								</div>
							</div>
							{/* Third Row */}
							<div className="row-two d-flex justify-content-between">
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-4">
									<h3>Wishlist Items</h3>
									<p>{store.nonprofits[index] ? store.nonprofits[index].wish_list_items : ""}</p>
								</div>
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-8">
									<h3>Recent Items Recieved</h3>
									<div className="items-carousel container-fluid d-flex flex-wrap">
										<div className="card">
											<img
												className="card-img-top"
												src="https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h5 className="card-title">Awesome Shirt</h5>
											</div>
										</div>
										<div className="card">
											<img
												className="card-img-top"
												src="https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h5 className="card-title">Awesome Shirt</h5>
											</div>
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
