import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { ShopItem } from "../component/ShopItem";

export const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState("false");
	let { id } = useParams();

	const [newBid, setNewBid] = useState(0);

	const [currentBid, setCurrentBid] = useState(store.items[id] && store.items[id].current_price + 1);
	const [bidCount, setBidCount] = useState(0);
	const [price, setPrice] = useState(store.items[id] && store.items[id].current_price);

	return (
		<>
			<div className="container-fluid">
				<div className="h-100 p-5 bg-light border rounded-3">
					<div className="row-one d-flex justify-content-between">
						{/* Product Image */}
						<div className="product-img-block col-6 m-4">
							<img src={store.items[id] && store.items[id].image} />
						</div>

						{/* Product Description */}
						<div className="m-2 page-title col-6 m-4">
							<h1 className="">Awesome Shirt</h1>
							<h3>Id</h3>
							<p>{store.items[id] && store.items[id].id}</p>
							<h3>Description</h3>
							<p>{store.items[id] && store.items[id].description}</p>
							<h3>Condition:</h3>
							<p className="card-text item-condition">{store.items[id] && store.items[id].condition}</p>
							<h3>Current Price</h3>
							<p className="card-text item-price">${store.items[id] && store.items[id].current_price}</p>
							<h3>Number of Bids:</h3>
							<p className="card-text item-price">{bidCount}</p>
							<label htmlFor="minimum-bid" className="control-label">
								Minimum Bid:
							</label>
							<div className="set-bid-amount">
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

							{/* Modal Button Section */}

							<button
								type="button"
								className="btn btn-two"
								data-bs-toggle="modal"
								data-bs-target="#placeBid"
								onClick={() => {
									setShow("true");
									console.log(store.items[id].id);
									setBidCount(bidCount + 1);
									actions.updateBid(store.items[id].id, currentBid);
								}}>
								Place Bid
							</button>
							<div
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
