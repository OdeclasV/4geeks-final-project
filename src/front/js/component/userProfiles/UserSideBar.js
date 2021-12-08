import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const UserSideBar = ({ username }) => {
	const history = useHistory();

	const [dropdown, setDropdown] = useState(false);
	const [active, setActive] = useState(false);
	const { store, actions } = useContext(Context);

	let show = "";
	let activeOption = "";

	if (dropdown) {
		show = "show";
	}

	if (active) {
		activeOption = "active";
	}

	return (
		<div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark col-2">
			<Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<svg className="bi me-2" width="40" height="32" />
				<span className="fs-4">{username}</span>
			</Link>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li
					className="m-2 p-2"
					// onClick={() => {
					// 	setActive(!active);
					// }}
				>
					<Link
						to="/profile/user/"
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}
						aria-current="page">
						<i className="fa fa-home" />
						<span className="ms-2">Dashboard</span>
					</Link>
				</li>
				<li
					className="m-2 p-2"
					// onClick={() => {
					// 	setActive(!active);
					// }}
				>
					<Link
						to={`/profile/user/${store.user.id}/donations`}
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}>
						<i className="fa fa-columns" />
						<span className="ms-2">Donations</span>
					</Link>
				</li>
				<li className="m-2 p-2">
					<Link to="/profile/user/my-orders" className="nav-link text-white">
						<i className="fa fa-clipboard-list" />
						<span className="ms-2">Orders</span>
					</Link>
				</li>
				<li className="m-2 p-2">
					<Link to="/profile/user/myaccount" className="nav-link text-white">
						<i className="fa fa-cog" />
						<span className="ms-2">My Account</span>
					</Link>
				</li>
				<li className="m-2 p-2">
					<Link to="/" className="nav-link text-white">
						<i className="fas fa-sign-out-alt" />
						<span className="ms-2">Log Out</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

UserSideBar.propTypes = {
	username: PropTypes.string
};
