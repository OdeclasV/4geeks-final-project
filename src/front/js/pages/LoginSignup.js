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
	let userSignIn = userEmail.includes("user.com");
	let nonProfitSignIn = userEmail.includes("nonprofit.com");

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
							{userSignIn ? (
								<Link to="/profile/user">
									<button type="button" className="btn btn-one btn-lg px-4 container-fluid">
										Login User
									</button>
								</Link>
							) : nonProfitSignIn ? (
								<Link to={`/profile/nonprofit/${index}`}>
									<button type="button" className="btn btn-one btn-lg px-4 container-fluid">
										Login Non Profit
									</button>
								</Link>
							) : (
								<button type="button" className="btn btn-one btn-lg px-4 container-fluid">
									Login
								</button>
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
