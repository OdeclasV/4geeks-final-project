import React, { useState, useContext } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Timer } from "./Timer";

// passign item as the only props of this component
// item's information is coming from the ShopItem page

export const ShopItem = ({ item }) => {
	const [bid, setBid] = useState(item.price + 1);
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
					<p className="card-text item-price">Number of Bids: {numberOfBids}</p>
					<label htmlFor="price" className="col-sm-3 control-label">
						Bid
					</label>
					<div className="col-sm-9">
						<input
							type="number"
							className="form-control"
							name="price"
							id="bid"
							value={bid}
							onChange={e => {
								if (e.target.value <= bid) {
									console.log("can't be lower");
								}
								setBid(e.target.value);
							}}
						/>
					</div>
					<div className="bid-button">
						<a
							href="#"
							className="btn btn-warning m-1"
							onClick={() => {
								SetNumberOfBids(numberOfBids + 1);
								item.price = bid;
								setBid(parseInt(item.price, 10) + 1);
							}}>
							Bid
						</a>
					</div>
					<div>
						Time left to bid
						<Timer />
					</div>
				</div>
			</div>
		</>
	);
};

ShopItem.propTypes = {
	item: PropTypes.object
};
