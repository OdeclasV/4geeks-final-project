import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import { BarGraph } from "../graphs/BarGraph";
import { LineGraph } from "../graphs/LineGraph";

export const ProfileHome = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="dashboard-page">
			{/* title section */}
			<div className="title-area container-fluid p-2">
				<h2>
					<strong>Welcome back, </strong>
					{store.currentuser.name}
				</h2>
			</div>
			{/* overview blocks section */}
			<div className="d-flex flex-wrap">
				{/* blocks */}
				<div className="overview-block p-2 m-2 bg-light border rounded-3">
					<h3>Total Funds Raised:</h3>
					<h2>{store.currentuser.totalfunds}</h2>
				</div>
				<div className="overview-block p-2 m-2 bg-light border rounded-3">
					<h3>Total Donations Recieved:</h3>
					<h2>{store.currentuser.donations}</h2>
				</div>
				<div className="overview-block p-2 m-2 bg-light border rounded-3">
					<h3>Wishlist Items</h3>
					<p>{store.currentuser.needs}</p>
				</div>
				<div className="overview-block p-2 m-2 bg-light border rounded-3">
					<h3>Recent Items Recieved</h3>
					<div className="items-carousel container-fluid d-flex flex-wrap">
						<div className="card col-md-3 m-3" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Awesome Shirt</h5>
							</div>
						</div>
						<div className="card col-md-3 m-3" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Awesome Shirt</h5>
							</div>
						</div>
						<div className="card col-md-3 m-3" style={{ width: "18rem" }}>
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
				<div className="graphs d-flex">
					<div className="bargraph" style={{ width: "50%" }}>
						<BarGraph />
					</div>
					<div className="linegraph" style={{ width: "50%" }}>
						<LineGraph />
					</div>
				</div>
			</div>
		</div>
	);
};
