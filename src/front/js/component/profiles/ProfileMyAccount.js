import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileMyAccount = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	let { index } = useParams();

	console.log(index);
	return (
		<>
			<div className="container-fluid ">
				<div className="h-100 p-5 bg-light border rounded-3">
					<div className="m-2 page-title d-flex justify-content-between">
						{/* title */}
						<h1 className="">My Account Profile</h1>
						<button type="submit" className="btn btn-one float-right">
							Edit Profile
						</button>
					</div>
					<div className="d-flex justify-content-between">
						{/* info area */}
						<div className="p-2 m-2 border rounded-3 col-9">
							<h4>
								<strong>Company Name:</strong>
							</h4>
							<h4>{store.nonprofits[index] ? store.nonprofits[index].name : ""}</h4>
							<br />
							<h4>
								<strong>Email:</strong>
							</h4>
							<p>{store.nonprofits[index] ? store.nonprofits[index].email : ""}</p>
							<h4>
								<strong>Description:</strong>
							</h4>
							<p>{store.nonprofits[index] ? store.nonprofits[index].description : ""}</p>
							<h4>
								<strong>Address:</strong>
							</h4>
							<p>{store.nonprofits[index] ? store.nonprofits[index].address : ""}</p>
							<button type="submit" className="btn btn-one">
								Change Password
							</button>
						</div>
						<div className="non-profit-logo p-2 m-2 border rounded-3">
							<img className="card-img-top" src={store.currentnonprofit.logo} alt="Card image cap" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
