import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ShopItem } from "../component/ShopItem";

export const NonProfitsDonatedItems = () => {
	const { store, actions } = useContext(Context);
	const [filterOption, setfilterOption] = useState("");


	return (
		<>
			<div>
				<div className="heading">
					<h2>Donations Received</h2>
				</div>
				<div className="container">
					{/* Here we will filter array of donated items that have been donated to that non-profit */}
				</div>
			</div>
		</>
	);
};
