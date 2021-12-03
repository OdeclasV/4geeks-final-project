import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const DonateClothing = () => {
	const [typeOfClothes, setTypeOfClothes] = useState("Select a value");
	const [nonprofit, setNonProfit] = useState("Select a NonProfit");
	const [selectedImage, setSelectedImage] = useState(null);
	const { store, actions } = useContext(Context);

	const [donationItem, setDonationItem] = useState({
		bid_count: 0,
		category: "clothing",
		condition: null,
		donate_to: nonprofit,
		donated_by: null,
		donation_type: 1,
		image: null,
		name: null,
		item_type: "1",
		original_price: 0,
		posted_date: null,
		end_date: null
	});

	console.log(donationItem);

	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form overview-block">
					<div className="form-group">
						<label htmlFor="name" className="control-label mt-3">
							Type of Clothing
						</label>

						<select
							className="form-select"
							aria-label="Default select clothes"
							value={typeOfClothes}
							onChange={e => {
								setTypeOfClothes(e.target.value);
								setDonationItem({ ...donationItem, item_type: e.target.value });
							}}>
							<option value="Select a value">Select a value</option>
							<option value="t-shirt">T-shirt</option>
							<option value="jacket">Jacket</option>
							<option value="pants">Pants</option>
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
								placeholder="Men's Patagonia Sweater"
								onChange={e => {
									setDonationItem({ ...donationItem, name: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="name" className="control-label mt-3">
							Size
						</label>
						<div className="">
							<input
								type="text"
								className="form-control"
								name="name"
								id="name"
								placeholder="Small, Medium, Large / 72 inches x 36 inches"
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="about" className="control-label mt-3">
							Description
						</label>

						<div className="">
							<textarea className="form-control" />
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
								<button type="submit" className="btn btn-two container mt-3">
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
