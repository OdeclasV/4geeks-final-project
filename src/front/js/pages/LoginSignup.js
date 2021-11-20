import React, { useState, useContext } from "react";

import { useParams, useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import "../../styles/index.scss";
import { SignUp } from "../component/donate-form/SignUp";

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
				<div className="card">
					<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
						<li className="nav-item text-center">Returning Customers</li>
					</ul>

					<div className="tab-content" id="pills-tabContent">
						<div
							className={loginTab ? "tab-pane fade " + showLogin : "tab-pane fade"}
							id="pills-home"
							role="tabpanel"
							aria-labelledby="pills-home-tab">
							<div className="form px-4 pt-5">
								<input type="e-mail" className="form-control" placeholder="Email or Phone" />
								<input type="password" className="form-control" placeholder="Password" />
								<Link
									to="/"
									className={loginTab ? "nav-link active btl" : "nav-link btl"}
									id="pills-home-tab"
									data-toggle="pill"
									href="#pills-home"
									role="tab"
									aria-controls="pills-home"
									aria-selected="true">
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="new-users">
					<h4>
						New User? Sign up{" "}
						<button>
							<Link to="/signup">here</Link>
						</button>
					</h4>
				</div>
			</div>
		</>
	);
};

LoginSignup.propTypes = {
	match: Proptypes.object
};
