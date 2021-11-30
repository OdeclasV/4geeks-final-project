import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
// import { ShopItem } from "../component/ShopItem";

export const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const { store, actions } = useContext(Context);

	let { id } = useParams();
	console.log(store.items[id] && store.items[id].condition);

	return (
		<>
			<div className="container-fluid">
				<div className="h-100 p-5 bg-light border rounded-3">
					<div className="row-one d-flex justify-content-between">
						{/* Product Image */}
						<div className="product-img-block col-6 m-4">
							<img src="https://bit.ly/3kHj3PT" />
						</div>

						{/* Product Description */}
						<div className="m-2 page-title col-6 m-4">
							<h1 className="">Awesome Shirt</h1>
							<h3>Description</h3>
							<p>{store.items[id].description}</p>
							<h3>Condition:</h3>
							<p className="card-text item-condition">{store.items[id].condition}</p>
							<h3>Highest Bid:</h3>
							<p className="card-text item-price">${store.items[id].original_price}</p>
							<h3>Number of Bids:</h3>
							<p className="card-text item-price">{store.items[id].bid_count}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// ProductPage.propTypes = {
// 	item: PropTypes.object
// };
