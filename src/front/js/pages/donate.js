import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Donate = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5">
				<h1>Donate Page</h1>
			</div>
		</>
	);
};
