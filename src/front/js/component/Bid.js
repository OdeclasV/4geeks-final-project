import React, { useContext, useState } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Bid = ({ item, bid, numberOfBids }) => {
	const [currentBid, setCurrentBid] = useState(item.originalPrice + 1);
	const [currentNumberOfBids, SetCurrentNumberOfBids] = useState(0);

	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="col-sm-9">
				<input
					type="number"
					className="form-control"
					name="price"
					id="bid"
					value={item.originalPrice}
					onChange={e => {
						if (e.target.value <= bid) {
							console.log("can't be lower");
						}
						setCurrentBid(e.target.value);
					}}
				/>
			</div>
			<div className="bid-button">
				<button
					className="btn btn-warning m-1"
					onClick={() => {
						SetCurrentNumberOfBids(numberOfBids + 1);
						item.originalPrice = bid;
						setCurrentBid(parseInt(item.price, 10) + 1);
						actions.itemBidding(item.id, currentBid);
					}}>
					Bid
				</button>
			</div>
		</>
	);
};

Bid.propTypes = {
	bid: PropTypes.number,
	numberOfBids: PropTypes.number
};
