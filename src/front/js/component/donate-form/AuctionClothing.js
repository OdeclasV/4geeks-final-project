import React, { useState, useContext } from "react";

import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { ChooseNonProfit } from "../../pages/ChooseNonProfit";
export const AuctionClothing = () => {
	const [typeOfClothes, setTypeOfClothes] = useState("Select a value");
	const [condition, setCondition] = useState("Select a value");
	const { store, actions } = useContext(Context);
	const [selectedImage, setSelectedImage] = useState(null);

	const generateId = max => {
		let newId = Math.floor(Math.random() * max);
		return newId;
	};

	const [auctionItem, setAuctionItem] = useState({
		id: generateId(999),
		category: "clothing",
		saleType: "bid",
		condition: null,
		itemType: null,
		price: 20,
		image: "https://bit.ly/3kHj3PT"
	});

	return (
		<>
			<div className="form-group">
				<label htmlFor="type of clothing" className="col-sm-3 control-label">
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
				<label htmlFor="condition" className="col-sm-3 control-label">
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
				<label htmlFor="size" className="col-sm-3 control-label">
					Size
				</label>
				<div className="col-sm-9">
					<input
						type="text"
						className="form-control"
						name="size"
						id="clothe-size"
						placeholder="Small, Medium, Large / 72 inches x 36 inches"
					/>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="price" className="col-sm-3 control-label">
					Price
				</label>
				<div className="col-sm-9">
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

			<div className="form-group">
				<label htmlFor="description" className="col-sm-3 control-label">
					Description
				</label>

				<div className="col-sm-9">
					<textarea className="form-control" />
				</div>
			</div>

			<div className="form-group">
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
				<label htmlFor="description" className="col-sm-3 control-label">
					Choose Nonprofit
				</label>

				<ChooseNonProfit />
			</div>

			<div className="form-group">
				<div className="col-sm-offset-3 col-sm-9">
					<Link
						to="/"
						type="submit"
						className="btn btn-primary"
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
