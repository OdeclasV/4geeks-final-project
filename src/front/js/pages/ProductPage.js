import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Timer } from "../component/Timer";
import { TimerProductPage } from "../component/TimerProductPage";
// import { ShopItem } from "../component/ShopItem";

export const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState("false");
	let { id } = useParams();

	const [newBid, setNewBid] = useState(0);
	console.log(store.items);

	const [currentBid, setCurrentBid] = useState(store.items[id] && store.items[id].current_price + 1);
	const [price, setPrice] = useState(store.items[id] && store.items[id].current_price);

	return (
		<>
			<div className="container-fluid">
				<div className="h-100 p-4 bg-light border rounded-3">
					<div className="row d-flex mb-3">
						<p className="text-start giveblue-font col">SHOP</p>
						<p className="text-end giveblue-font col">NEXT ITEM</p>
					</div>
					<div className="row">
						<div className="d-flex justify-content-between">
							{/* Product Image */}
							<div className="product-img-block card-img-left mx-lg-auto d-block p-2 col-4 shadow-sm">
								<img className="w-100 h-auto" src={store.items[id] && store.items[id].image} />
							</div>
							<div className="col-1" />
							<div className="product-info-box col-7 p-4 shadow-sm">
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

								<div className="bid-count-row d-flex">
									<p className="col-4">Number of Bids:</p>
									<p className="card-text item-price">
										{store.items[id] && store.items[id].bid_count}
									</p>
								</div>

								<div className="place-bid-row d-flex mb-2">
									<label htmlFor="minimum-bid" className="control-label col-4">
										Minimum Bid:
									</label>

<<<<<<< HEAD
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
										//setNewBid(parseInt(e.target.value));
										//setPrice(parseInt(e.target.value));
									/>
								</div>
								<div>
									{store.loggedin != 0 ? (
										<Link to="/bid-placed">
											<button
												type="button"
												className="btn btn-two container-fluid align-center col-6 py-2 my-2"
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
										<Link
											to="/login"
											type="button"
											className="btn btn-two container-fluid align-center col-6 py-2 my-2">
											Please Login To Bid
										</Link>
									)}
								</div>
=======
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
									//setNewBid(parseInt(e.target.value));
									//setPrice(parseInt(e.target.value));
								/>
							</div>
							<div>
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
								)}
							</div>
							{/* Product Description bottom */}
							<div className="product-details-row">
								<h4>Description</h4>
								<p>{store.items[id] && store.items[id].item_description}</p>
								<br />
								<h4>Condition:</h4>
								<p className="card-text item-condition">
									{store.items[id] && store.items[id].condition}
								</p>
								<h4>Funds going to:</h4>
								<p className="card-text item-condition">
									{store.items[id] && store.items[id].donate_to}
								</p>
>>>>>>> 3104f5b8b1fb68a9c53659e4bf88bf174313bf75
							</div>
						</div>
					</div>
					{/* Product Description bottom */}
					<div className="product-details-box p-4 mt-5 shadow-sm">
						<h4>Full Description</h4>
						<p>{store.items[id] && store.items[id].item_description}</p>
						<br />
						<h4>Condition:</h4>
						<p className="card-text item-condition">{store.items[id] && store.items[id].condition}</p>
						{/* <h4>Funds going to:</h4>
							<p className="card-text item-condition">{store.items[id] && store.items[id].donate_to}</p> */}
					</div>
				</div>
			</div>
		</>
	);
};
