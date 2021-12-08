import React, { useState } from "react";

import { Link } from "react-router-dom";
import { LoginSignup } from "../../pages/LoginSignup";
// import { ModalBFG } from "../ModalBFG";

export const LoginButton = () => {
	const [openModal, setOpenModal] = useState(false);

	const toggleModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<>
			<div>
				{/* {!openModal ? (
					<button type="button" className="btn btn-one btn-md mx-2" onClick={toggleModal}>
						Login
					</button>
				) : (
					<LoginSignup handler={toggleModal} />
				)} */}
				<Link className="form-inline my-2 my-lg-0 d-flex text-decoration-none" to="/login">
					<button className="btn btn-one btn-md mx-2" type="button">
						Log In
					</button>
				</Link>
			</div>
		</>
	);
};
