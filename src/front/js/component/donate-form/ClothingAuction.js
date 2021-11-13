import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

export const ClothingAuction = props => {
	const location = useLocation();
	const { from } = location.state;
	console.log(location.state);

	return <div>Bid: </div>;
};

ClothingAuction.propTypes = {
	bid: PropTypes.string
};
