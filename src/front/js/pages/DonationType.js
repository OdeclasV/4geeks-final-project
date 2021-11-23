import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router";
import { DonateClothing } from "../component/donate-form/DonateClothing";
import { DonateFurniture } from "../component/donate-form/DonateFurniture";

export const DonationType = () => {
	const [category, setCategory] = useState("Select a category");
	const history = useHistory();
	return (
		<>
			<div className="container justify-content-center d-flex">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title"> Add an Item to Donate </h3>
					</div>

					<div className="panel-body">
						<form className="form-horizontal">
							<div className="form-group">
								<label htmlFor="type of clothing" className="col-sm-3 control-label">
									Category
								</label>

								<select
									className="form-select"
									aria-label="Default select example"
									value={category}
									onChange={e => {
										setCategory(e.target.value);
									}}>
									<option value="Select a value">Select a value</option>
									<option value="clothing">Clothes</option>
									<option value="furniture">Furniture</option>
									<option value="art">Art</option>
								</select>
							</div>
							{category == "clothing" ? (
								<DonateClothing />
							) : category == "furniture" ? (
								<DonateFurniture />
							) : (
								<hr />
							)}
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
