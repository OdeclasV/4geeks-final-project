import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { Timer } from "../component/Timer";
import { TimerProductPage } from "../component/TimerProductPage";
// import { ShopItem } from "../component/ShopItem";

export const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [show, setShow] = useState("false");
	let { id } = useParams();

	const [newBid, setNewBid] = useState(0);
	//console.log(store.items);

	const [currentBid, setCurrentBid] = useState(store.items[id] && store.items[id].current_price + 1);
	const [price, setPrice] = useState(store.items[id] && store.items[id].current_price);

	id > store.items.length - 1 ? console.log("true") : console.log("false");

	return (
		<>
			<div className="container-fluid">
				<div className="h-100 p-4 bg-light border rounded-3">
					<div className="row d-flex mb-3">
						{id != 0 ? (
							<p
								className="text-start giveblue-font col"
								onClick={() => {
									history.push(`/shop/${parseInt(id) - 1}`);
									setCurrentBid(store.items[id] && store.items[id - 1].current_price + 1);
								}}>
								PREVIOUS ITEM
							</p>
						) : (
							//empty p tag on purpose to prevent NEXT ITEM from taking whole width
							<p className="text-start giveblue-font col" />
						)}

						{//id less than last item index in list
						id < store.items.length - 1 ? (
							<p
								className="text-end giveblue-font col"
								onClick={() => {
									history.push(`/shop/${parseInt(id) + 1}`);
									setCurrentBid(store.items[id] && store.items[parseInt(id) + 1].current_price + 1);
								}}>
								NEXT ITEM
							</p>
						) : (
							//empty p tag on purpose to prevent NEXT ITEM from taking whole width
							<p className="text-start giveblue-font col" />
						)}
					</div>
					<div className="row">
						<div className="d-flex justify-content-center">
							{/* Product Image */}
							<div className="product-img-block card-img-left d-block p-2 mx-lg-auto col-4 ">
								<img className="w-100 h-auto" src={store.items[id] && store.items[id].image} />
							</div>

							<div className="col-1" />

							<div className="product-info-box col-7 p-5">
								{/* Product Description  Top */}
								<div className="title-row">
									<h1 className="">{store.items[id] && store.items[id].item_name}</h1>
								</div>

								<div className="giveblue-font timer-row align-self-center">
									<p className="mb-1">Time left to bid</p>
									<TimerProductPage endDate={store.items[id] && store.items[id].end_date} />
									{/* </div> */}
								</div>

								<div className="bid-count-row d-flex">
									<p className="col-4">Number of Bids:</p>
									<p className="card-text item-price">
										{store.items[id] && store.items[id].bid_count}
									</p>
								</div>

								<div className="price-row d-flex">
									<h3 className="col-4">Current Price</h3>
									<h3 className="card-text item-price">
										${store.items[id] && store.items[id].current_price}
									</h3>
								</div>

								<div className="place-bid-row d-flex mb-2">
									<label htmlFor="minimum-bid" className="control-label col-4">
										Minimum Bid:
									</label>

									<input
										type="number"
										className="form-control"
										name="price"
										id="bid"
										value={parseInt(currentBid)}
										min={parseInt(currentBid)}
										onChange={e => {
											setCurrentBid(e.target.value);
										}}
									/>
								</div>
								<div>
									<Link to="/bid-placed">
										<button
											type="button"
											className="btn btn-two container-fluid col-8 py-2 my-2"
											data-bs-toggle="modal"
											data-bs-target="#placeBid"
											onClick={() => {
												setShow("true");
												actions.updateBid(store.items[id].id, currentBid);
											}}>
											Place Bid
										</button>
									</Link>
									{/* 											
									{store.loggedin != 0 ? (
										<Link to="/bid-placed">
											<button
												type="button"
												className="btn btn-two container-fluid col-8 py-2 my-2"
												data-bs-toggle="modal"
												data-bs-target="#placeBid"
												onClick={() => {
													setShow("true");
													console.log(store.items[id].id);
													actions.updateBid(store.items[id].id, currentBid);
												}}>
												Place Bid
											</button>
										</Link>
									) : (
										<Link to="/login">
											<button
												type="button"
												className="btn btn-two container-fluid col-8 py-2 my-2"
												data-bs-toggle="modal">
												Login to Place a Bid
											</button>
										</Link>
									)} */}
								</div>
							</div>
						</div>
					</div>

					{/* Product Description bottom */}
					<div className="product-details-box p-4 mt-5 shadow-sm row">
						<div className="col">
							<h4 className="giveblue-font">Description</h4>
							<p>{store.items[id] && store.items[id].item_description}</p>
						</div>
						<div className="col">
							<h4 className="giveblue-font">Condition:</h4>
							<p className="card-text item-condition">{store.items[id] && store.items[id].condition}</p>
						</div>
						<div className="col">
							<h4 className="giveblue-font">Funds going to:</h4>
							<p className="card-text item-condition">
								{store.items[id] && store.items[id].donate_to.name}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
