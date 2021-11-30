import React, { useState, useContext } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ShopItem } from "../component/ShopItem";

export const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container d-flex col-md-3 m-3">
				<div className="leftside col-6">
					{/* <img className="card-img-top col-6" src={} alt="Card image cap" /> */}
				</div>

				<div className="rightside card-body col-6">
					<h1>{store.items.item_type}</h1>
				</div>
			</div>
		</>
	);
};

ProductPage.propTypes = {
	item: PropTypes.object
};
