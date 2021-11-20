import React from "react";

import { useHistory } from "react-router";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { SideBar } from "../../component/profiles/SideBar";
import { ProfileDashboard } from "../../component/profiles/ProfileDashboard";
import { ProfileWishlist } from "../../component/profiles/ProfileWhislist";
import { ProfileHome } from "../../component/profiles/ProfileHome";

export const NonProfitProfile = props => {
	const params = useParams();
	const history = useHistory();

	const clickedProfile = profile => {
		if (profile == "dashboard") {
			return <ProfileDashboard />;
		} else if (profile == "wishlist") {
			return <ProfileWishlist />;
		} else {
			return <ProfileHome />;
		}
	};

	return (
		<div className="d-flex">
			<SideBar username="Non-profit" />
			{clickedProfile(params.profileOption)}
		</div>
	);
};

NonProfitProfile.propTypes = {
	match: PropTypes.object
};
