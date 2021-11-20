import React from "react";

import { Link } from "react-router-dom";
import Proptypes from "prop-types";

export const SignUp = () => {
	return (
		<>
			<form>
				<div className="mb-3">
					<label className="form-label">Nonprofit Name</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					<div id="emailHelp" className="form-text">
						Well never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
};

SignUp.propTypes = {
	match: Proptypes.object
};
