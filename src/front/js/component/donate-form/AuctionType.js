import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const AuctionType = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5">
				<h1>Let&apos;s Get Started!</h1>
				<Link to="/AuctionClothingForm">
					<button className="btn btn-primary m-3">Clothing</button>
				</Link>
				<Link to="/AuctionFurnitureForm">
					<button className="btn btn-primary m-3">Furniture</button>
				</Link>
				<Link to="/AuctionCarForm">
					<button className="btn btn-primary m-3">Car</button>
				</Link>
				<Link to="/AuctionArtForm">
					<button className="btn btn-primary m-3">Art</button>
				</Link>
			</div>
			<div>
				<form>
					<div className="form-group">
						<label htmlFor="startingBidPrice">Starting Bid Price</label>
						<input type="currency" className="form-control" id="inputStartingBidPrice" placeholder="$500" />
						<small id="startingBidHelp" className="form-text text-muted">
							The minimum amount you would like for your donation.
						</small>
					</div>
					<button type="submit" className="btn btn-primary">
						NEXT Add Details of my Item
					</button>
				</form>
			</div>
		</>
	);
};