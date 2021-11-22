import React from "react";

import { useHistory } from "react-router";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { SideBar } from "../../component/profiles/SideBar";
import { ProfileDashboard } from "../../component/profiles/ProfileDashboard";
import { ProfileWishlist } from "../../component/profiles/ProfileWhislist";
import { ProfileHome } from "../../component/profiles/ProfileHome";
import { ProfileMyAccount } from "../../component/profiles/ProfileMyAccount";

export const NonProfitProfile = props => {
	const params = useParams();
	const history = useHistory();

	const clickedProfile = profile => {
		if (profile == "donations") {
			return <ProfileDashboard />;
		} else if (profile == "wishlist") {
			return <ProfileWishlist />;
		} else if (profile == "myaccount") {
			return <ProfileMyAccount />;
		} else {
			return <ProfileHome />;
		}
	};

	return (
		<div className="d-flex">
			<SideBar username="Non-profit" />
			{clickedProfile(params.profileoption)}
		</div>
	);
};

NonProfitProfile.propTypes = {
	match: PropTypes.object
};
