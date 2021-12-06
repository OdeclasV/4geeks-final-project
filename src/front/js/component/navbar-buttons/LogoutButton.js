import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const LogoutButton = () => {
	const { store, actions } = useContext(Context);
	return (
		<Link className="form-inline my-2 my-lg-0 d-flex" to="/">
			<button className="btn btn-primary mx-2" type="button" onClick={() => actions.logout()}>
				Log Out
			</button>
		</Link>
	);
};
