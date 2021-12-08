import React, { useContext } from "react";
import { Context } from "../../store/appContext";

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

	let { id } = useParams();
	//console.log(index);

	const { store, actions } = useContext(Context);

	// setting logged in nonprofit in order to
	// use its info in the dashboard
	let activeNonprofit;

	// filters nonprofit array and selects
	// nonprofit based on id
	store.nonprofits &&
		store.nonprofits.filter(nonprofit => {
			if (nonprofit.id == id) {
				activeNonprofit = nonprofit;
			}
		});

	const clickedProfile = profile => {
		if (profile == "donations") {
			return <ProfileDashboard nonprofit={activeNonprofit} />;
		} else if (profile == "wishlist") {
			return <ProfileWishlist />;
		} else if (profile == "myaccount") {
			return <ProfileMyAccount nonprofit={activeNonprofit} />;
		} else {
			return <ProfileHome />;
		}
	};

	return (
		<div className="d-flex">
			<SideBar nonprofit={activeNonprofit} nonprofitId={id} />
			{clickedProfile(params.profileoption)}
		</div>
	);
};

NonProfitProfile.propTypes = {
	match: PropTypes.object
};
