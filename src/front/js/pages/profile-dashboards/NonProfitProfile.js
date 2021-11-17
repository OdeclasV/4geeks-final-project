import React from "react";

import { useHistory } from "react-router";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { ProfileContent } from "../../component/profiles/ProfileContent";
import { SideBar } from "../../component/profiles/SideBar";

export const NonProfitProfile = props => {
	const params = useParams();
	const history = useHistory();

	return (
		<div className="d-flex">
			<SideBar username="Non-profit" />
			<ProfileContent profileOption={params.profileOption} />
		</div>
	);
};

NonProfitProfile.propTypes = {
	match: PropTypes.object
};
