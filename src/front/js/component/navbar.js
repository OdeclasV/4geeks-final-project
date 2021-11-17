import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ShoppingCart } from "./navbar-buttons/ShoppingCart";
import { SignInModal } from "./navbar-buttons/SignInSignUp";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = React.useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<Link className="navbar-brand" to="/">
				Shop To Give
			</Link>

			<button
				className="navbar-toggler"
				onClick={() => {
					setDropdown(dropdown);
				}}
				type="button"
				id="navbarToggler"
				data-toggle="collapse"
				aria-controls="navbarToggler"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse d-flex justify-content-end" aria-labelledby="navbarToggler">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-menu-item mx-2 active">
						<Link className="nav-menu-link" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-menu-item mx-2">
						<Link className="nav-menu-link" to="/shop">
							Shop
						</Link>
					</li>
					<li className="nav-menu-item mx-2">
						<Link className="nav-menu-link" to="/donate">
							Donate
						</Link>
					</li>
				</ul>

				<Link className="form-inline my-2 my-lg-0 d-flex" to="/signinsignup">
					<button className="btn btn-primary" type="button">
						Log In
					</button>
				</Link>
				<ShoppingCart />
			</div>
		</nav>
	);
};
