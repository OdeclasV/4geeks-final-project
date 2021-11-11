import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DonationType = () => {
	const { store, actions } = useContext(Context);

	return(
        <>
            <div className="text-center mt-5">
                <h1>Let's Get Started!</h1>
                    <Link to="/DonationClothingForm">
                        <button className="btn btn-primary m-3">Clothing</button>
                    </Link>
                    <Link to="/DonationFurnitureForm">
                        <button className="btn btn-primary m-3">Furniture</button>
                    </Link>
                    <Link to="/DonationCarForm">
                        <button className="btn btn-primary m-3">Car</button>
                    </Link>
                    <Link to="/DonationArtForm">
                        <button className="btn btn-primary m-3">Art</button>
                    </Link>
            </div>
        </>
    )
};