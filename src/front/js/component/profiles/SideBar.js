import React, { useState, useContext } from "react";

import { useHistory } from "react-router";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const SideBar = ({ nonprofit, id }) => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const [dropdown, setDropdown] = useState(false);
	const [active, setActive] = useState(false);

	let show = "";
	let activeOption = "";

	if (dropdown) {
		show = "show";
	}

	if (active) {
		activeOption = "active";
	}

	return (
		<div className="d-flex flex-column  flex-shrink-0 p-3 text-white bg-dark" style={{ width: "20%" }}>
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<svg className="bi me-2" width="40" height="32" />
				<span className="fs-4">{nonprofit ? nonprofit.name : ""}</span>
			</a>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="m-2 p-2">
					<a
						href=""
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}
						aria-current="page"
						onClick={() => {
							history.push(`/profile/nonprofit/${id}`);
						}}>
						<i className="fa fa-home" />
						<span className="ms-2">Dashboard</span>
					</a>
				</li>
				<li className="m-2 p-2">
					<a
						href=""
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}
						onClick={() => {
							history.push(`/profile/nonprofit/${id}/donations`);
						}}>
						<i className="fa fa-columns" />
						<span className="ms-2">Donations</span>
					</a>
				</li>
				{/* <li className="m-2 p-2">
					<a
						href=""
						className="nav-link text-white"
						onClick={() => {
							history.push(`/profile/nonprofit/${id}/wishlist`);
						}}>
						<i className="fa fa-clipboard-list" />
						<span className="ms-2">Wishlist</span>
					</a>
				</li> */}
				<li className="m-2 p-2">
					<a
						href=""
						className="nav-link text-white"
						onClick={() => {
							history.push(`/profile/nonprofit/${id}/myaccount`);
						}}>
						<i className="fa fa-cog" />
						<span className="ms-2">My Account</span>
					</a>
				</li>
				<li className="m-2 p-2">
					<a
						href="#"
						className="nav-link text-white"
						onClick={() => {
							history.push("/");
						}}>
						<i className="fas fa-sign-out-alt" />
						<span className="ms-2">Log Out</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

SideBar.propTypes = {
	nonprofit: PropTypes.object,
	id: PropTypes.number
};
