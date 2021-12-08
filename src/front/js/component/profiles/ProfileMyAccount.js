import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileMyAccount = ({ nonprofit }) => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	let { id } = useParams();

	// setting logged in nonprofit in order to
	// use its info in the dashboard
	let activeNonprofit;

	// filters nonprofit array and selects
	// nonprofit based on id
	store.nonprofits &&
		store.nonprofits.filter(nonprofit => {
			if (nonprofit.id == id) {
				activeNonprofit = nonprofit;
			}
		});

	// actions.login(user, id);

	const loggedValue = React.useMemo(() => store.loggedin);
	console.log(store.loggedin);
	console.log(loggedValue);
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
							<h4>{activeNonprofit ? activeNonprofit.name : ""}</h4>
							<br />
							<h4>
								<strong>Email:</strong>
							</h4>
							<p>{activeNonprofit ? activeNonprofit.email : ""}</p>
							<h4>
								<strong>Description:</strong>
							</h4>
							<p>{activeNonprofit ? activeNonprofit.description : ""}</p>
							<h4>
								<strong>Address:</strong>
							</h4>
							<p>{activeNonprofit ? activeNonprofit.address : ""}</p>
							<button type="submit" className="btn btn-one">
								Change Password
							</button>
						</div>
						<div className="non-profit-logo p-2 m-2 border rounded-3">
							<img
								className="card-img-top"
								src={activeNonprofit ? activeNonprofit.nonprofit_logo : ""}
								alt="Card image cap"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

ProfileMyAccount.propTypes = {
	nonprofit: PropTypes.object
};
