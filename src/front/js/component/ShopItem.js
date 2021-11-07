import React, { useContext } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

// passign item as the only props of this component
// item's information is coming from the ShopItem page

export const ShopItem = ({ item }) => {
	return (
		<>
			<div className="card col-md-3 m-3" style={{ width: "18rem" }}>
				<img className="card-img-top" src={item.image} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Awesome {item.itemType}</h5>
					<p className="card-text item-price">${item.price}</p>
					<a href="#" className="btn btn-primary">
						Add to cart
					</a>
					<a href="#" className="btn btn-warning">
						Bid
					</a>
				</div>
			</div>
		</>
	);
};

ShopItem.propTypes = {
	item: PropTypes.object
};
