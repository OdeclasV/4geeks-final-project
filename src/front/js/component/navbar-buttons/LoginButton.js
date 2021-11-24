import React from "react";

import { Link } from "react-router-dom";

export const LoginButton = () => {
	return (
		<Link className="form-inline my-2 my-lg-0 d-flex" to="/login">
			<button className="btn btn-primary mx-2" type="button">
				Log In
			</button>
		</Link>
	);
};
