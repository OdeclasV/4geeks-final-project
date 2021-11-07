import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ItemFilter } from "../component/ItemFilter";
import { ShopItem } from "../component/ShopItem";

export const Shop = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="shop-title">
				<h1 style={shopStyles}>Sale Items</h1>
			</div>
			<ItemFilter />
			<div className="shop-items">
				<ul className="d-flex justify-content-around flex-wrap">
					{store.items.map(item => {
						return <ShopItem key={item.id} item={item} />;
					})}
				</ul>
			</div>
		</>
	);
};

const shopStyles = {
	textAlign: "center"
};
