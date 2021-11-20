import React from "react";

import { Link } from "react-router-dom";

export const SignUpButton = () => {
	return (
		<Link className="form-inline my-2 my-lg-0 d-flex" to="/signup">
			<button className="btn btn-outline-primary mx-2 " type="button">
				SignUp
			</button>
		</Link>
	);
};
