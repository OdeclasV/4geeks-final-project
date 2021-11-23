import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileMyAccount = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div>
				{/* title */}
				<div className="">
					<h1>My Account Profile</h1>
				</div>
				{/* info area */}
				<div className="d-flex flex-wrap">
					<div className="bg-light p-2 m-2 border rounded-3">
						<h4>
							<strong>Name:</strong>
						</h4>
						<h4>{store.currentuser.name}</h4>
						<h4>Description:</h4>
						<p>{store.currentuser.description}</p>
					</div>

					<div className="bg-light borderrounded-3">
						<h4>
							<strong>Name:</strong>
						</h4>
						<h4>{store.currentuser.name}</h4>
					</div>

					<div className="bg-light borderrounded-3">
						<h4>
							<strong>Name:</strong>
						</h4>
						<h4>{store.currentuser.name}</h4>
					</div>
				</div>
			</div>
		</>
	);
};
