import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import { LineGraph } from "../Graphs/LineGraph";
import { LineGraphWeekly } from "../Graphs/LineGraphWeekly";

export const ProfileHome = () => {
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
	let activeNonprofit;

	// filters nonprofit array and selects
	// nonprofit based on id
	store.nonprofits &&
		store.nonprofits.filter(nonprofit => {
			if (nonprofit.id == id) {
				activeNonprofit = nonprofit;
			}
		});

	console.log(store.loggedin);
	console.log(store.userType);

	//activeNonprofit ? console.log(activeNonprofit.items_received) : console.log("none");
	activeNonprofit ? activeNonprofit.items_received.map(item => console.log(item.item_name)) : console.log("none");
	return (
		<>
			<div className="container">
				<div className="h-100 p-2 rounded-3">
					<div className="dashboard-page">
						{/* title section */}
						<div className="title-area container-fluid p-2">
							<h1>
								<strong>Welcome back, </strong>
								{activeNonprofit ? activeNonprofit.name : ""}
							</h1>
						</div>
						{/* Dashboard content */}
						<div className="">
							{/* First Row */}
							<div className="row-one d-flex row">
								<div className="overview-block p-4 m-2 bg-light border rounded-3 col">
									<div className="row">
										<h3 className="col">Total Funds Raised:</h3>
										<h2 className="col">
											{formatter.format(activeNonprofit ? activeNonprofit.total_profits : 0)}
										</h2>
									</div>
									<div className="row">
										<p className="col">Since last month</p>
										<h4 className="text-success col">
											{" "}
											<i className="fas fa-arrow-up m-2" />
											5.27%
										</h4>
									</div>
								</div>

								<div className="overview-block p-2 m-2 bg-light border rounded-3 col">
									<h3>Total Donations Recieved:</h3>
									<h2>
										{activeNonprofit
											? activeNonprofit.items_received.filter(
													item => item.donation_type == "donation"
											  ).length
											: 0}
									</h2>
									<h4 className="text-danger">
										{" "}
										<i className="fas fa-arrow-down m-2" />
										3.42%
									</h4>
									<p>Since last month</p>
								</div>
							</div>

							{/* Second Row */}
							<div className="row row-two d-flex">
								<div className="overview-block col m-2 p-2 bg-light border rounded-3">
									<h3>Funds Compared to last Month</h3>
									<LineGraph />
								</div>
								<div className="overview-block col m-2 p-2 bg-light border rounded-3">
									<h3>Last Weeks Donations:</h3>
									<LineGraphWeekly />
								</div>
							</div>

							{/* Third Row */}
							<div className="row row-three d-flex">
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-4">
									<h3>Wishlist Items</h3>
									<h4>{activeNonprofit ? activeNonprofit.wish_list_items : ""}</h4>
									{/* <div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckDefault"
											checked
										/>
										<label className="form-check-label" htmlFor="flexCheckDefault">
											Clothes
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckChecked"
											checked
										/>
										<label className="form-check-label" htmlFor="flexCheckChecked">
											Furniture
										</label>
									</div> */}
								</div>
								<div className="overview-block p-2 m-2 bg-light border rounded-3 col-7">
									<h3>Recent Items Recieved</h3>
									<div className="items-carousel container-fluid d-flex flex-wrap">
										{activeNonprofit
											? activeNonprofit.items_received.map(item => {
													return (
														<div className="card" key={item.id}>
															<img
																className="card-img-top"
																src={item.image}
																alt="Card image cap"
															/>
															<div className="card-body">
																<h5 className="card-title">{item.item_name}</h5>
															</div>
														</div>
													);
											  })
											: console.log("none")}
										{/* <div className="card">
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
										</div> */}
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
