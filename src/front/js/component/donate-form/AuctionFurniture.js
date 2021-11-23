import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { ChooseNonProfit } from "../../pages/ChooseNonProfit";

export const AuctionFurniture = () => {
	const [typeOfFurniture, settypeOfFurniture] = useState("Select a value");
	const [condition, setCondition] = useState("Select a value");
	const { store, actions } = useContext(Context);

	const generateId = max => {
		let newId = Math.floor(Math.random() * max);
		return newId;
	};

	const [auctionItem, setAuctionItem] = useState({
		id: generateId(999),
		category: "furniture",
		saleType: "bid",
		condition: null,
		itemType: null,
		price: 50,
		image: "https://bit.ly/3kHj3PT"
	});

	return (
		<>
			<div className="form-group">
				<label htmlFor="type of furniture" className="col-sm-3 control-label">
					Type of Furniture
				</label>

				<select
					className="form-select"
					aria-label="Default select example"
					value={typeOfFurniture}
					onChange={e => {
						settypeOfFurniture(e.target.value);
						setAuctionItem({ ...auctionItem, itemType: e.target.value });
					}}>
					<option value="Select a value">Select a value</option>
					<option value="dining table">Dining Table</option>
					<option value="chair">Chair</option>
					<option value="sofa">Sofa</option>
				</select>
				{typeOfFurniture == "chair" ? <h3>Hello</h3> : ""}
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
				<label htmlFor="price" className="col-sm-3 control-label">
					Price
				</label>
				<div className="col-sm-9">
					<input
						type="text"
						className="form-control"
						name="price"
						id="furniture-price"
						value={auctionItem.price}
						onChange={e => {
							setAuctionItem({ ...auctionItem, price: e.target.value });
						}}
					/>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="about" className="col-sm-3 control-label">
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
			</div>

			<div className="form-group">
				<label htmlFor="about" className="col-sm-3 control-label">
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
