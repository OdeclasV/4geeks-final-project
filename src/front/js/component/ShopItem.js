import React, { useState, useContext } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Timer } from "./Timer";
import { Link } from "react-router-dom";

export const ShopItem = ({ item, index }) => {
	let bidIncrement = 1;
	let itemPriceInt = parseInt(item.original_price, 10);
	const [bidAmount, setBidAmount] = useState(item.original_price);

	const [numberOfBids, SetNumberOfBids] = useState(0);
	const { store, actions } = useContext(Context);

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0
	});

	return (
		<>
			<div className="card m-1 overview-block" style={{ width: "20rem" }}>
				<img className="card-img-top" src={item.image} alt="Card image cap" />
				<div className="card-body">
					<h3 className="card-title">{item.item_name}</h3>
					<h5 className="card-text giveblue-font item-price">
						Top Bid: {formatter.format(item.current_price)}
					</h5>
					<div className="text-center px-2">
						<Link to={`/shop/${index}`}>
							<button type="submit" className="btn btn-two btn-lg container-fluid my-2">
								View Item
							</button>
						</Link>
					</div>
					<div className="timer">
						<h5 className="">Time left to bid:</h5>
						<Timer endDate={item.end_date} />
					</div>
					<div className="num-of-bids">
						<p className="card-text">
							<small className="text-muted">Number of bids: {item.bid_count}</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

ShopItem.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number
};
