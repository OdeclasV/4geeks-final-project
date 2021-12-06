import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const DonateFurniture = () => {
	const [typeOfFurniture, setTypeOfFurniture] = useState("Select a value");
	const [nonprofit, setNonProfit] = useState("Select a value");
	const [selectedImage, setSelectedImage] = useState(null);
	const { store, actions } = useContext(Context);

	const [donationItem, setDonationItem] = useState({
		bid_count: 0,
		category: "furniture",
		condition: null,
		donate_to: nonprofit,
		donated_by: null,
		donation_type: "donation",
		image: null,
		item_name: null,
		item_type: null,
		item_description: null,
		original_price: 0,
		posted_date: null,
		end_date: null
	});

	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form overview-block">
					<div className="form-group">
						<label htmlFor="name" className="control-label mt-3">
							Type of Furniture
						</label>

						<select
							className="form-select"
							aria-label="Default select type"
							value={typeOfFurniture}
							onChange={e => {
								setTypeOfFurniture(e.target.value);
								setDonationItem({ ...donationItem, item_type: e.target.value });
							}}>
							<option value="Select a value">Select a value</option>
							<option value="dining table">Dining Table</option>
							<option value="chair">Chair</option>
							<option value="sofa">Sofa</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="name" className="control-label mt-3">
							Name
						</label>

						<div className="">
							<input
								type="text"
								className="form-control"
								name="name"
								id="name"
								placeholder="The Iron Throne"
								onChange={e => {
									setDonationItem({ ...donationItem, item_name: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="about" className="control-label mt-3">
							Description
						</label>

						<div className="">
							<textarea
								className="form-control"
								onChange={e => {
									setDonationItem({ ...donationItem, item_description: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group mt-1">
						{selectedImage && (
							<div>
								<img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
								<br />
								<button onClick={() => setSelectedImage(null)}>Remove</button>
							</div>
						)}
						<input
							type="file"
							name="myImage"
							onChange={event => {
								console.log(event.target.files[0]);
								setSelectedImage(event.target.files[0]);
							}}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="description" className="control-label mt-3">
							Choose Nonprofit
						</label>
						<select
							className="form-select"
							aria-label="Default select example"
							value={nonprofit}
							onChange={e => {
								setNonProfit(e.target.value);
								setDonationItem({ ...donationItem, donate_to: e.target.value });
							}}>
							<option value="Select a NonProfit">Select a NonProfit</option>
							{store.nonprofits.map(nonprofit => {
								return (
									<option value={nonprofit.id} key={nonprofit.id}>
										{nonprofit.name}
									</option>
								);
							})}
						</select>
					</div>

					<div className="form-group">
						<div className="submit-button">
							<Link to="/donation-placed">
								<button
									type="submit"
									className="btn btn-two container mt-3"
									onClick={() => actions.addAuctionItem(donationItem)}>
									Donate Item
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
