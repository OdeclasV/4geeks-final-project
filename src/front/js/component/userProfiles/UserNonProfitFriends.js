import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const UserNonProfitFriends = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid ">
				<div className="h-100 p-5 bg-light border rounded-3">
					<div className="m-2 page-title d-flex justify-content-between">
						{/* title */}
						<h1 className="">Non Profit Friends</h1>
					</div>
					<div className="d-flex justify-content-between">{/* info area */}</div>
				</div>
			</div>
		</>
	);
};
