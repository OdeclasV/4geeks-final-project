import React from "react";
import { ItemFilter } from "../component/ItemFilter";
import { ShopItem } from "../component/ShopItem";

export const Shop = () => {
	return (
		<>
			<div className="shop-title">
				<h1 style={shopStyles}>Sale Items</h1>
			</div>
			<ItemFilter />
			<div className="shop-items">
				<ul className="d-flex justify-content-around flex-wrap">
					<ShopItem />
				</ul>
			</div>
		</>
	);
};

const shopStyles = {
	textAlign: "center"
};
