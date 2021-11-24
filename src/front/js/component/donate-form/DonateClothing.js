import React, { useState } from "react";
import { ChooseNonProfit } from "../../pages/ChooseNonProfit";

export const DonateClothing = () => {
	const [typeOfClothes, setTypeOfClothes] = useState("Select a value");
	const [nonprofit, setNonprofit] = useState("Select a value");

	return (
		<>
			<div className="form-group">
				<label htmlFor="name" className="col-sm-3 control-label">
					Type of Clothing
				</label>

				<select
					className="form-select"
					aria-label="Default select example"
					value={typeOfClothes}
					onChange={e => {
						setTypeOfClothes(e.target.value);
					}}>
					<option value="Select a value">Select a value</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>

			<div className="form-group">
				<label htmlFor="name" className="col-sm-3 control-label">
					Name
				</label>

				<div className="col-sm-9">
					<input
						type="text"
						className="form-control"
						name="name"
						id="name"
						placeholder="Men's Patagonia Sweater"
					/>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="name" className="col-sm-3 control-label">
					Size
				</label>
				<div className="col-sm-9">
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
				<label htmlFor="nonprofit" className="col-sm-3 control-label">
					<h5>Choose Nonprofit</h5>
				</label>
				<ChooseNonProfit />
			</div>

			<div className="form-group">
				<div className="col-sm-offset-3 col-sm-9">
					<button type="submit" className="btn btn-primary">
						Add Item
					</button>
				</div>
			</div>
		</>
	);
};
