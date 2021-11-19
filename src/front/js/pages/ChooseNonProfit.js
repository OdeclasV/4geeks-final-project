import React, { useContext } from "react";

import { Context } from "../store/appContext";

export const ChooseNonProfit = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="nonprofits d-flex justify-content-around flex-wrap">
			{store.nonprofits.map(nonprofit => {
				return (
					<div className="card col-md-3 m-3" style={{ width: "18rem" }} key={nonprofit.id}>
						<img className="card-img-top" src={nonprofit.logo} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">{nonprofit.name}</h5>
							<p className="card-text item-price">{nonprofit.description}</p>
							<p className="card-text item-price">${nonprofit.totalfunds}</p>
							<a
								href="#"
								className="btn btn-primary m-1"
								onClick={() => {
									console.log("clicked!");
								}}>
								More information
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};
