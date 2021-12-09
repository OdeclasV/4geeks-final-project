import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import bidSuccessImage from "../../img/Bid-For-Good-09.png";

export const BidPlaced = () => {
	const { store, actions } = useContext(Context);

	let userId = store.loggedin;

	return (
		<div className="container col-xxl-8">
			<div className="row flex-lg-row align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img
						src={bidSuccessImage}
						className="d-block mx-lg-auto img-fluid"
						width="300"
						height="200"
						loading="lazy"
					/>
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3 giveblue-font"> Your Bid Has Been Placed!</h1>
					<p className="lead">Feel free to kick back, relax. You&apos;ve done a great thing today!</p>

					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<Link to={`/profile/user/${userId}`}>
							<button type="button" className="btn btn-two btn-lg px-4 me-md-2">
								My Dashboard
							</button>
						</Link>
						<Link to="/shop">
							<button type="button" className="btn btn-one btn-lg px-4 me-md-2">
								Back to Shop
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
