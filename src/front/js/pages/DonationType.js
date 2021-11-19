import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router";
import { DonateClothing } from "../component/donate-form/DonateClothing";
import { DonateFurniture } from "../component/donate-form/DonateFurniture";

export const DonationType = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	const donationType = type => {
		if (type == "clothing") {
			return <DonateClothing />;
		} else if (type == "furniture") {
			return <DonateFurniture />;
		}
	};

	return (
		<>
			<div className="text-center mt-5">
				<h1>Let&apos;s Get Started!</h1>
				<button
					className="btn btn-primary m-3"
					onClick={() => {
						history.push("/donationtype/clothing");
					}}>
					Clothing
				</button>
				<button
					className="btn btn-primary m-3"
					onClick={() => {
						history.push("/donationtype/furniture");
					}}>
					Furniture
				</button>
				{donationType(params.type)}
			</div>
		</>
	);
};
