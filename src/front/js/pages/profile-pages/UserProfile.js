import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useHistory } from "react-router";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { UserSideBar } from "../../component/userProfiles/UserSideBar";
import { UserProfileHome } from "../../component/userProfiles/UserProfileHome";
import { UserProfileDonations } from "../../component/userProfiles/UserProfileDonations";
import { UserProfileMyAccount } from "../../component/userProfiles/UserProfileMyAccount";
import { UserNonProfitFriends } from "../../component/userProfiles/UserNonProfitFriends";
import { SideBar } from "../../component/profiles/SideBar";

// import { BarGraph } from "../../component/BarGraph";

export const UserProfile = props => {
	const params = useParams();
	const history = useHistory();

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

	console.log(activeUser);

	const clickedProfile = profile => {
		if (profile == "donations") {
			return <UserProfileDonations />;
		} else if (profile == "myaccount") {
			return <UserProfileMyAccount />;
		} else if (profile == "my-orders") {
			return <UserNonProfitFriends />;
		} else {
			return <UserProfileHome />;
		}
	};

	return (
		<div className="d-flex">
			<SideBar user={activeUser} userId={id} />
			{/* <BarGraph /> */}
			{clickedProfile(params.profileoption)}
		</div>
	);
};

UserProfile.propTypes = {
	match: PropTypes.object
};
