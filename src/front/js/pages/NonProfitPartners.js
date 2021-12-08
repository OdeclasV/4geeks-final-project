import React, { useContext } from "react";

import { Context } from "../store/appContext";

export const NonProfitPartners = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="nonprofits d-flex justify-content-around flex-wrap">
			{store.nonprofits.map(nonprofit => {
				return (
					// <div className="card col-md-3 m-3" style={{ width: "30rem", height: "200px" }} key={nonprofit.id}>
					// 	<img
					// 		className="card-img-top"
					// 		src={nonprofit.nonprofit_logo}
					// 		style={{ width: "15%" }}
					// 		alt="Card image cap"
					// 	/>
					// 	{/* <div className="card-body">
					// 		<h5 className="card-title">{nonprofit.name}</h5>
					// 		<p className="card-text item-price">{nonprofit.description}</p>
					// 	</div> */}
					// </div>
					<div
						className="card mb-3 shadow-sm"
						style={{ maxWidth: "540px", height: "150px" }}
						key={nonprofit.id}>
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src={nonprofit.nonprofit_logo}
									className="img-fluid rounded-start"
									alt={nonprofit.name}
									style={{ height: "100px", width: "100px", marginTop: "15px" }}
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{nonprofit.name}</h5>
									<p className="card-text">{nonprofit.description}</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
