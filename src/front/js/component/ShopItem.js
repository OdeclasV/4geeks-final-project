import React, { useState, useContext } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Timer } from "./Timer";

// passign item as the only props of this component
// item's information is coming from the ShopItem page

export const ShopItem = ({ item }) => {
	let bidIncrement = 1;
	let itemPriceInt = parseInt(item.price, 10);

	const [bid, setBid] = useState(itemPriceInt + bidIncrement); //after re-rendering, makes sure the price is a number and not a string
	const [numberOfBids, SetNumberOfBids] = useState(0);
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="card col-md-3 m-3" style={{ width: "18rem" }}>
				<img className="card-img-top" src={item.image} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Awesome {item.itemType}</h5>
					<p className="card-text item-price">condition: {item.condition}</p>
					<p className="card-text item-price">Highest Bid: ${item.price}</p>
					<p className="card-text item-price">Bid Increment: ${bidIncrement}</p>
					<p className="card-text item-price">Number of Bids: {numberOfBids}</p>
					<label htmlFor="price" className="col-sm-3 control-label">
						Minimum Bid:
					</label>
					<div className="col-sm-9">
						<input
							type="number"
							className="form-control"
							name="price"
							id="bid"
							value={bid}
							min={itemPriceInt + bidIncrement}
							onChange={e => {
								setBid(e.target.value);
							}}
						/>
					</div>
					<div className="bid-button">
						<a
							href="#"
							className="btn btn-warning m-1"
							onClick={() => {
								if (bid > itemPriceInt) {
									SetNumberOfBids(numberOfBids + 1);
									item.price = bid;
									setBid(parseInt(item.price, 10) + 1); //makes sure the price is a number and not a string
								}
							}}>
							Bid
						</a>
					</div>
					<div>
						Time left to bid
						<Timer endDate={item.endDate} />
					</div>
				</div>
			</div>
		</>
	);
};

ShopItem.propTypes = {
	item: PropTypes.object
};
