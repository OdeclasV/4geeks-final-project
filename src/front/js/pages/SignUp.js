import React from "react";

import { Link } from "react-router-dom";
import Proptypes from "prop-types";

export const SignUp = () => {
	return (
		<>
			<div className="container card px-5 py-5">
				<form className="justify-content-md-center ">
					<h1 className="text-center pb-2">Sign Up</h1>
					<div className="mb-3">
						<label className="form-label">First Name</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
					</div>
					<div className="mb-3">
						<label className="form-label">Last Name</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
					</div>
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							Well never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
					</div>
					<button type="submit" className="btn btn-primary container-fluid">
						Submit
					</button>
				</form>
				<p className="pt-3">Nonprofit? Contact us to join</p>
			</div>
		</>
	);
};

SignUp.propTypes = {
	match: Proptypes.object
};
