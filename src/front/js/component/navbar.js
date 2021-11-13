import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ShoppingCart } from "./navbar-buttons/ShoppingCart";
import { SignInModal } from "./navbar-buttons/SignInSignUp";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto m-1">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
				<ShoppingCart />
				<Link to="/signinsignup">
					<div className="text-center">
						<button className="btn btn-primary" data-toggle="modal" data-target="#modalLRForm">
							Sign In / Sign Up
						</button>
					</div>
				</Link>
			</div>
		</nav>
	);
};
