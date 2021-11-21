import React, { useState, useContext } from "react";

import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
export const AuctionClothing = () => {
	const [typeOfClothes, setTypeOfClothes] = useState("Select a value");
	const [condition, setCondition] = useState("Select a value");
	const { store, actions } = useContext(Context);

	const generateId = max => {
		let newId = Math.floor(Math.random() * max);
		return newId;
	};

	const [auctionItem, setAuctionItem] = useState({
		id: generateId(999),
		category: null,
		saleType: "bid",
		condition: null,
		itemType: null,
		price: 20,
		image: "https://bit.ly/3kHj3PT"
	});

	console.log(auctionItem);
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
				<label htmlFor="name" className="col-sm-12 control-label">
					Upload Image (Use.jpg, .png)
				</label>

				<div className="col-sm-3">
					<label className="control-label small" htmlFor="file_img">
						Primary Image(Max File size 5 MB):
					</label>
					<input type="file" name="file_img_primary" />
				</div>

				<div className="col-sm-3">
					<label className="control-label small" htmlFor="file_img">
						Secondary Image(Max File size 5 MB):
					</label>
					<input type="file" name="file_img_secondary" />
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="tech" className="col-sm-3 control-label">
					Times Available For Pick Up
				</label>

				<div className="col-sm-3">
					<select className="form-control">
						<option value="pickuptimes1"> 8AM to 8PM </option>
						<option value="pickuptimes2"> 8AM to 10AM</option>
						<option value="pickuptimes3"> 10AM to 12PM</option>
						<option value="pickuptimes4"> 12PM to 2PM </option>
						<option value="pickuptimes5"> 2PM to 4PM</option>
						<option value="pickuptimes6"> 4PM to 6PM</option>
						<option value="pickuptimes6"> 6PM to 8PM</option>
					</select>
				</div>
			</div>
			<div className="row g-3">
				<div className="form-group">
					<label htmlFor="inputAddress">Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
				</div>
				<div className="form-group">
					<label htmlFor="inputAddress2">Address 2</label>
					<input
						type="text"
						className="form-control"
						id="inputAddress2"
						placeholder="Apartment, studio, or floor"
					/>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputCity">City</label>
						<input type="text" className="form-control" id="inputCity" />
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="inputState">State</label>
						<select id="inputState" className="form-control">
							<option>Choose...</option>
							<option>FL</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label htmlFor="inputZip">Zip</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
				</div>
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
