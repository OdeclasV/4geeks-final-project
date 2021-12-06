import React, { useState, useContext } from "react";

import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const AuctionClothing = () => {
	const [typeOfClothes, setTypeOfClothes] = useState("Select a value");
	const [condition, setCondition] = useState("Select a value");
	const [nonprofit, setNonProfit] = useState("Select a NonProfit");
	const [itemName, setItemName] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);
	const [itemDescription, setItemDescription] = useState("");

	const { store, actions } = useContext(Context);
	const [auctionItem, setAuctionItem] = useState({
		bid_count: 0,
		category: "clothing",
		condition: null,
		item_name: null,
		item_description: null,
		donate_to: null,
		donated_by: null,
		donation_type: "auction",
		image: null,
		item_type: null,
		original_price: null,
		posted_date: null,
		end_date: null,
		num_of_bids: 0
	});

	const imageUploader = async the_image => {
		const data = new FormData();
		data.append("image", the_image);
		data.append("key", "d05f626f3e944b28f9d8dff843aafe2c");
		let response = await fetch("https://api.imgbb.com/1/upload", {
			method: "POST",
			body: data
		});
		let image_info = await response.json();
		setAuctionItem({ ...auctionItem, image: image_info.data.url });
	};

	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form overview-block">
					<div className="form-group">
						<label htmlFor="type of clothing" className="control-label mt-3">
							Type of Clothing
						</label>

						<select
							required
							className="form-select"
							aria-label="Default select clothes"
							value={typeOfClothes}
							onChange={e => {
								setTypeOfClothes(e.target.value);
								setAuctionItem({ ...auctionItem, itemType: e.target.value });
							}}>
							<option value="Select a value">Select a value</option>
							<option value="t-shirt">T-shirt</option>
							<option value="jacket">Jacket</option>
							<option value="pants">Pants</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="condition" className="control-label mt-3">
							Condition
						</label>

						<select
							required
							className="form-select"
							aria-label="Default select condition"
							value={condition}
							onChange={e => {
								setCondition(e.target.value);
								setAuctionItem({ ...auctionItem, condition: e.target.value });
							}}>
							<option value="Select a value">Select a value</option>
							<option value="like new">Like New</option>
							<option value="used">Used - Good</option>
							<option value="fair">Fair</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="name" className="control-label mt-3">
							Name
						</label>

						<div className="">
							<input
								required
								type="text"
								className="form-control"
								name="name"
								id="name"
								placeholder="Invisibility Cloak"
								value={itemName}
								onChange={e => {
									setItemName(e.target.value);
									setAuctionItem({ ...auctionItem, item_name: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group mt-3">
						<label htmlFor="price" className="control-label">
							Price
						</label>
						<div className="">
							<input
								required
								type="text"
								className="form-control"
								name="price"
								id="clothing-price"
								value={auctionItem.original_price}
								onChange={e => {
									setAuctionItem({ ...auctionItem, original_price: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group mt-3">
						<label htmlFor="description" className="control-label">
							Description
						</label>

						<div className="">
							<textarea
								required
								className="form-control"
								value={itemDescription}
								onChange={e => {
									setItemDescription(e.target.value);
									setAuctionItem({ ...auctionItem, item_description: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group mt-1">
						<label htmlFor="type of clothing" className="control-label mt-3 pr-3">
							Upload Image
						</label>
						<div>
							{selectedImage && (
								<div>
									<img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
									<br />
									<button onClick={() => setSelectedImage(null)}>Remove</button>
								</div>
							)}
							<input
								required
								type="file"
								name="myImage"
								onChange={event => {
									// console.log(event.target.files[0]); why index 0?
									setSelectedImage(event.target.files[0]);
									imageUploader(event.target.files[0]);
								}}
							/>
						</div>
					</div>

					{/* <ChooseNonProfit /> */}
					<div className="form-group">
						<label htmlFor="description" className="control-label mt-3">
							Choose Nonprofit
						</label>
						<select
							required
							className="form-select"
							aria-label="Default select example"
							value={nonprofit}
							onChange={e => {
								setNonProfit(e.target.value);
								setAuctionItem({ ...auctionItem, donate_to: e.target.value });
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
							<Link
								to="/donation-placed"
								type="submit"
								className="btn btn-two container mt-3"
								onClick={() => {
									console.log(auctionItem);
									actions.addAuctionItem(auctionItem);
								}}>
								Add Item
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
