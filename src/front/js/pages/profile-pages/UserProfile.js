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

// import { BarGraph } from "../../component/BarGraph";

export const UserProfile = props => {
	const params = useParams();
	const history = useHistory();

	const { store, actions } = useContext(Context);

	const clickedProfile = profile => {
		if (profile == "donations") {
			return <UserProfileDonations />;
		} else if (profile == "myaccount") {
			return <UserProfileMyAccount />;
		} else if (profile == "nonprofit-friends") {
			return <UserNonProfitFriends />;
		} else {
			return <UserProfileHome />;
		}
	};

	return (
		<div className="d-flex">
			<UserSideBar username="User" />
			{/* <BarGraph /> */}
			{clickedProfile(params.profileoption)}
		</div>
	);
};

UserProfile.propTypes = {
	match: PropTypes.object
};
