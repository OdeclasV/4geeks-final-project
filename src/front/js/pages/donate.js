import React, { useContext } from "react";
import { DonateOrAuction } from "../component/donate-form/DonateOrAuction";
import { Context } from "../store/appContext";

export const Donate = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container text-center">
				<h1>Donate Page</h1>
				<DonateOrAuction />
			</div>
		</>
	);
};
