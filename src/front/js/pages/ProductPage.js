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
					<div className="row d-flex justify-content-between">
						{/* Product Image */}
						<div className="product-img-block card-img-left d-block mx-lg-auto npmcol-4 ">
							<img src={store.items[id] && store.items[id].image} />
						</div>

						<div className="product-info-box col-8 p-5">
							{/* Product Description  Top */}
							<div className="title-row">
								<h1 className="">{store.items[id] && store.items[id].item_name}</h1>
							</div>

							<div className="giveblue-font timer-row align-self-center">
								<p className="mb-1">Time left to bid</p>
								<TimerProductPage endDate={store.items[id] && store.items[id].end_date} />
								{/* </div> */}
							</div>

							<div className="price-row d-flex">
								<h3 className="col-4">Current Price</h3>
								<h3 className="card-text item-price">
									${store.items[id] && store.items[id].current_price}
								</h3>
							</div>

							<div className="bid-count-row d-flex">
								<p className="col-4">Number of Bids:</p>
								<p className="card-text item-price">{store.items[id] && store.items[id].bid_count}</p>
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
									//setNewBid(parseInt(e.target.value));
									//setPrice(parseInt(e.target.value));
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
											console.log(store.items[id].id);
											actions.updateBid(store.items[id].id, currentBid);
										}}>
										Place Bid
									</button>
								</Link>
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
							</div>
						</div>
						{/* <div
								className={show == "true" ? "modal fade show" : "modal fade"}
								id="placeBid"
								// tabindex="-1"
								aria-labelledby="placeBidLabel"
								aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title" id="placeBidLabel">
												Great Success!
											</h5>
										</div>
										<div className="modal-body">Horray! Your Bid has been placed.</div>
										<div className="modal-footer">
											<Link to="/profile/user">
												<button
													type="submit"
													className="btn btn-one btn-lg px-4 container-fluid my-5">
													Dashboard
												</button>
											</Link>
											<Link to="/shop">
												<button
													type="submit"
													className="btn btn-two btn-lg px-4 container-fluid my-5">
													Keep Shopping
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div> */}
					</div>
				</div>
			</div>
		</>
	);
};
