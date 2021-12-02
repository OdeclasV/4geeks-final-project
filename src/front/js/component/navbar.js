import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoginButton } from "./navbar-buttons/LoginButton";
import { SignUpButton } from "./navbar-buttons/SignUpButton";
import PropTypes from "prop-types";
import { LogoutButton } from "./navbar-buttons/LogoutButton";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);

	return (
		<div className="navbar">
			<nav className="container-fluid navbar-expand-lg navbar-light py-3">
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
					<ul className="navbar-nav">
						{props.loggedIn ? (
							""
						) : (
							<li className="nav-button-1">
								<LoginButton />
							</li>
						)}
						{props.loggedIn ? (
							""
						) : (
							<li className="nav-button-2">
								<SignUpButton />
							</li>
						)}

						{props.loggedIn ? (
							<li className="nav-button-1">
								<LogoutButton />
							</li>
						) : (
							""
						)}
					</ul>
					{/* 
				<LoginButton />
				<SignUpButton /> */}
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
