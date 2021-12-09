import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const UserProfileMyAccount = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	let { id } = useParams();

	// setting logged in nonprofit in order to
	// use its info in the dashboard
	let activeUser;

	// filters nonprofit array and selects
	// nonprofit based on id
	store.users &&
		store.users.filter(user => {
			if (user.id == id) {
				activeUser = user;
			}
		});

	return (
		<>
			<div className="container">
				<div className="h-100 p-5 bg-light border rounded-3">
					<div className="m-2 page-title d-flex justify-content-between">
						{/* title */}
						<h1 className="">My Account Profile</h1>
						<button type="submit" className="btn btn-one float-right">
							Edit Profile
						</button>
					</div>
					<div className="d-flex justify-content-between">
						{/* info area */}
						<div className="p-2 m-2 border rounded-3 col-9">
							<h4>
								<strong>Name:</strong>
							</h4>
							<h4>{activeUser ? `${activeUser.name} ${activeUser.last_name}` : ""}</h4>
							<br />
							<h4>
								<strong>Email:</strong>
							</h4>
							<p>{activeUser ? activeUser.email : ""}</p>
							<br />
							<h4>
								<strong>Non Profit Friends:</strong>
							</h4>
							<p>
								{activeUser
									? activeUser.nonprofit_friends != null
										? activeUser.nonprofit_friends
										: "No friends yet"
									: ""}
							</p>
							<button type="submit" className="btn btn-one">
								Change Password
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
