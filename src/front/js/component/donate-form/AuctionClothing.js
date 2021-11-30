import React, { useState, useContext } from "react";

import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { ChooseNonProfit } from "../../pages/ChooseNonProfit";
export const AuctionClothing = () => {
	const [typeOfClothes, setTypeOfClothes] = useState("Select a value");
	const [condition, setCondition] = useState("Select a value");
	const [nonProfit, setNonProfit] = useState("Select a NonProfit");
	const { store, actions } = useContext(Context);
	const [selectedImage, setSelectedImage] = useState(null);

	const [auctionItem, setAuctionItem] = useState({
		category: "clothing",
		donation_type: "bid",
		condition: null,
		item_type: null,
		original_price: 20,
		image: "https://bit.ly/3kHj3PT",
		donate: null
	});

	return (
		<>
			<div className="form-group">
				<label htmlFor="type of clothing" className="control-label mt-3">
					Type of Clothing
				</label>

				<select
					className="form-select"
					aria-label="Default select example"
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
					className="form-select"
					aria-label="Default select example"
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
				<label htmlFor="size" className="control-label mt-3">
					Size
				</label>
				<div className="">
					<input
						type="text"
						className="form-control"
						name="size"
						id="clothe-size"
						placeholder="Small, Medium, Large / 72 inches x 36 inches"
					/>
				</div>
			</div>

			<div className="form-group mt-3">
				<label htmlFor="price" className="control-label">
					Price
				</label>
				<div className="">
					<input
						type="text"
						className="form-control"
						name="price"
						id="clothing-price"
						value={auctionItem.price}
						onChange={e => {
							setAuctionItem({ ...auctionItem, price: e.target.value });
						}}
					/>
				</div>
			</div>

			<div className="form-group mt-3">
				<label htmlFor="description" className="control-label">
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
					value={nonProfit}
					onChange={e => {
						setNonProfit(e.target.value);
						setAuctionItem({ ...auctionItem, donate: e.target.value });
					}}>
					<option value="Select a NonProfit">Select a NonProfit</option>
					<option value="the-cat-network">The Cat Network</option>
					<option value="universal-aid-for-children">Universal Aid for Children</option>
					<option value="global-empowerment-mission">Global Empowerment Mission</option>
					<option value="camillus-house">Camillus House</option>
				</select>
				{/* <ChooseNonProfit /> */}
			</div>

			<div className="form-group">
				<div className="submit-button">
					<Link
						to="/"
						type="submit"
						className="btn btn-two container mt-3"
						onClick={() => {
							actions.addAuctionItem(auctionItem);
						}}>
						Add Item
					</Link>
				</div>
			</div>
		</>
	);
};
