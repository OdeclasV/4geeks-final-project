import React from "react";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
	return (
		<Link className="form-inline my-2 my-lg-0 d-flex" to="/">
			<button className="btn btn-primary mx-2" type="button">
				Log Out
			</button>
		</Link>
	);
};
