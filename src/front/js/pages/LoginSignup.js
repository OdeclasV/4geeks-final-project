import React, { useState, useContext } from "react";

import { useParams, useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import "../../styles/index.scss";
import { SignUp } from "./SignUp";

export const LoginSignup = ({ match, index }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	const [userEmail, setUserEmail] = useState("");
	// let userSignIn = userEmail.includes(allowedNonprofitEmails);
	// //let nonProfitSignIn = userEmail.includes("");

	// nonprofit and user validation for login
	let allowednonProfit;
	let allowedUser;

	// creates array of all existing nonprofit emails
	let allowedNonprofitEmails = store.nonprofits.map(nonprofit => {
		return nonprofit.email;
	});

	// creates array of all existing user emails
	let allowedUserEmails = store.users.map(user => {
		return user.email;
	});

	// assigns index of specific nonprofit to allowedNonProfit
	// this is needed to render right info in nonprofit dashboard
	if (allowedNonprofitEmails.includes(userEmail)) {
		allowednonProfit = store.nonprofits[allowedNonprofitEmails.indexOf(userEmail)].id;
	}

	// assigns index of specific user to allowedUser
	// this is needed to render right info in user dashboard
	if (allowedUserEmails.includes(userEmail)) {
		allowedUser = store.users[allowedUserEmails.indexOf(userEmail)].id;
	}

	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form overview-block">
					<div className="card-top text-center py-3">
						<h2 className="">Log In</h2>
					</div>

					<div className="tab-content" id="pills-tabContent">
						<div className="form px-4">
							<input
								type="e-mail"
								className="form-control"
								placeholder="Email"
								value={userEmail}
								onChange={e => setUserEmail(e.target.value)}
								onKeyUp={e => setUserEmail(e.target.value)}
							/>
							<input type="password" className="form-control" placeholder="Password" />
							{/* some kind of validation here if email and password match then use that profile index in link below */}
							{allowednonProfit ? (
								// users is sent to specific nonprofit, per their id
								<Link to={`/profile/nonprofit/${allowednonProfit}`}>
									<button
										type="button"
										className="btn btn-one btn-lg px-4 container-fluid"
										onClick={() => actions.login("nonprofit", allowednonProfit)}>
										Login Non Profit
									</button>
								</Link>
							) : allowedUser ? (
								// users is sent to specific user, per their id
								// <Link to={`/profile/user/${allowedUser}`}>
								<Link to="/shop">
									<button
										type="button"
										className="btn btn-one btn-lg px-4 container-fluid"
										onClick={() => actions.login("user", allowedUser)}>
										Login User
									</button>
								</Link>
							) : (
								<Link to="/">
									<button type="button" className="btn btn-one btn-lg px-4 container-fluid">
										Login
									</button>
								</Link>
							)}
						</div>

						<div className="new-users text-center px-4">
							<h4>
								New User?
								<Link to="/signup">
									<button type="button" className="btn btn-two btn-lg px-4 container-fluid my-2">
										Sign Up Here
									</button>
								</Link>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

LoginSignup.propTypes = {
	match: Proptypes.object,
	index: Proptypes.number
};
