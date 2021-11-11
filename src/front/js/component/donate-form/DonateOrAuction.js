import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

export const DonateOrAuction = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Let's Get Started!</h1>
			<Link to="/DonationType">
				<button className="btn btn-primary m-3">Donate to a Non-Profit</button>
			</Link>
			<Link to="/AuctionType">
				<button className="btn btn-primary">Auction Something For a Non-Profit</button>
			</Link>
		</div>
	);
};
