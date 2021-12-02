import React, { useState, useContext } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Timer } from "./Timer";
import { Link } from "react-router-dom";

// passign item as the only props of this component
// item's information is coming from the ShopItem page

export const ShopItem = ({ item, index }) => {
	let bidIncrement = 1;
	let itemPriceInt = parseInt(item.original_price, 10);

	console.log(item);

	// const [bid, setBid] = useState({
	// 	item_id: item.id,
	// 	bid_amount: null,
	// 	current_price: item.original_price
	// });
	const [bidAmount, setBidAmount] = useState(item.original_price);
	console.log();
	// const [currentPrice, setCurrentPrice] = useState(item.original_price);

	// const bidValidation = bidAmount => {
	// 	if (bidAmount > item.original_price) {
	// 		;
	// 	}
	// };

	//const [bid, setBid] = useState(itemPriceInt + bidIncrement); //after re-rendering, makes sure the price is a number and not a string
	const [numberOfBids, SetNumberOfBids] = useState(0);
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="card m-1 overview-block" style={{ width: "20rem" }}>
				<img className="card-img-top" src={item.image} alt="Card image cap" />
				<div className="card-body">
					<h3 className="card-title">{item.name}</h3>
					<h5 className="card-text giveblue-font item-price">Top Bid: ${item.original_price}</h5>
					{/* <p className="card-text item-price">Bid Increment: ${bidIncrement}</p> */}

					{/* <label htmlFor="price" className="control-label">
						Minimum Bid:
					</label>
					<div className="set-bid-amount">
						<input
							type="number"
							className="form-control"
							name="price"
							id="bid"
							value={bidAmount}
							min={bidAmount + 1}
							onChange={e => {
								setBidAmount(parseInt(e.target.value));
							}}
						/>
					</div>

					<div className="bid-button">
						<button
							className="btn btn-warning m-1"
							onClick={() => { */}
					{/* // if (bid > itemPriceInt) { */}
					{/* // 	//SetNumberOfBids(numberOfBids + 1);
								// 	setBid({ ...bid, num_of_bids: num_of_bids + 1 });
								// 	item.original_price = bid;
								// 	setBid(parseInt(item.original_price, 10) + bidIncrement); //makes sure the price is a number and not a string
								// }
								//bidValidation(bidAmount);
						// 		actions.createBid(item.id, bidAmount, item.original_price);
						// 	}}>
						// 	Bid
						// </button> */}
					{/* </div> */}
					<div className="text-center px-2">
						<Link to={`/shop/${index}`}>
							<button type="submit" className="btn btn-two btn-lg container-fluid my-2">
								View Item
							</button>
						</Link>
					</div>
					<div>
						Time left to bid
						<Timer endDate={item.end_date} />
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
