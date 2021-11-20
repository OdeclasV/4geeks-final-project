import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import { Context } from "../store/appContext";
import { AuctionClothes } from "../component/donate-form/AuctionClothes";
import { AuctionFurniture } from "../component/donate-form/AuctionFurniture";

export const AuctionType = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	const clickedType = type => {
		if (type == "clothing") {
			return <AuctionClothes />;
		} else if (type == "furniture") {
			return <AuctionFurniture />;
		}
	};

	return (
		<>
			<div className="text-center mt-5">
				<h1>Let&apos;s Get Started!</h1>
				<button
					className="btn btn-primary m-3"
					onClick={() => {
						history.push("/auctiontype/clothing");
					}}>
					Clothing
				</button>
				<button
					className="btn btn-primary m-3"
					onClick={() => {
						history.push("/auctiontype/furniture");
					}}>
					Furniture
				</button>
			</div>
			{clickedType(params.type)}
		</>
	);
};
