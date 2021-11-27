import React, { useState, useContext } from "react";

import { useParams, useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import "../../styles/index.scss";
import { SignUp } from "./SignUp";

export const LoginSignup = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	console.log(params);

	const [loginTab, showloginTab] = useState(true); // set this to true so it shows up when user gets to page
	const [signupTab, showsignupTab] = useState(false);

	// flag variables to set class values
	let showLogin = "";
	let showSignup = "";

	// checks if loginTab's state is True
	if (loginTab) {
		showLogin = "show active";
	}

	// checks if signupTab's state is True
	if (signupTab) {
		showSignup = "show active";
	}

	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form">
					<div className="card-top text-center py-3">
						<h2 className="">Returning Customers</h2>
					</div>

					<div className="tab-content" id="pills-tabContent">
						<div className="form px-4">
							<input type="e-mail" className="form-control" placeholder="Email" />
							<input type="password" className="form-control" placeholder="Password" />
							<Link to="/profile/nonprofit">
								<button type="button" className="btn btn-primary btn-lg px-4 container-fluid">
									Login
								</button>
							</Link>
						</div>

						<div className="new-users text-center px-4">
							<h4>
								New User?
								<Link to="/signup">
									<button type="button" className="btn btn-success btn-lg px-4 container-fluid my-2">
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
	match: Proptypes.object
};
