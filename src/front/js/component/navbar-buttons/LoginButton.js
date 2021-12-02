import React from "react";

import { Link } from "react-router-dom";

export const LoginButton = () => {
	return (
		<Link className="form-inline my-2 my-lg-0 d-flex text-decoration-none" to="/login">
			<button className="btn btn-one btn-md mx-2" type="button">
				Log In
			</button>
		</Link>
	);
};
