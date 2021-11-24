import React, { useState } from "react";
import { ChooseNonProfit } from "../../pages/ChooseNonProfit";

export const DonateFurniture = () => {
	const [typeOfFurniture, setTypeOfFurniture] = useState("Select a value");

	return (
		<>
			<div className="form-group">
				<label htmlFor="name" className="col-sm-3 control-label">
					Type of Furniture
				</label>

				<select
					className="form-select"
					aria-label="Default select example"
					value={typeOfFurniture}
					onChange={e => {
						setTypeOfFurniture(e.target.value);
					}}>
					<option value="Select a value">Select a value</option>
					<option value="dining table">Dining Table</option>
					<option value="chairs">Chairs</option>
					<option value="sofa">Sofa</option>
				</select>
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
