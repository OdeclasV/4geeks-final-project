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
	let userSignIn = userEmail.includes(allowedNonprofitEmails);
	//let nonProfitSignIn = userEmail.includes("");

	let allowednonProfit;
	let allowedNonprofitEmails = store.nonprofits.map(nonprofit => {
		return nonprofit.email;
	});

	if (allowedNonprofitEmails.includes(userEmail)) {
		allowednonProfit = store.nonprofits[allowedNonprofitEmails.indexOf(userEmail)];
	}

	//console.log(allowednonProfit);

	// store.nonprofits[allowedNonprofit[0]]
	// 	? console.log(store.nonprofits[allowedNonprofit[0]].name)
	// 	: console.log("none");

	// let allowedNonprofit = store.nonprofits.filter(nonprofit => {
	// 	if (nonprofit.email.includes(userEmail)) {
	// 		return nonprofit;
	// 	}
	// });

	//console.log(allowedNonprofit[0]);

	//allowedNonprofit.includes(userEmail) ? console.log(store.nonprofits.indexOf(userEmail)) : console.log("none");

	//colocar include para hacer comprobacion de nonprofit
	//verifica allowed.Nonprofit.includes(e.target.value) u otro metodo que te devuelve 1 o -1 dependiendo del usuario
	// utiliza indexOf
	//si es asi, approved
	//extiende al user

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
								// cambiar esto a nonprofit.id
								<Link to={`/profile/nonprofit/${allowedNonprofitEmails.indexOf(userEmail)}`}>
									<button type="button" className="btn btn-one btn-lg px-4 container-fluid">
										Login Non Profit
									</button>
								</Link>
							) : (
								<Link to="/">
									<button
										type="button"
										className="btn btn-one btn-lg px-4 container-fluid"
										onClick={() => actions.login()}>
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
