import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import { Context } from "../store/appContext";
import { AuctionFurniture } from "../component/donate-form/AuctionFurniture";
import { AuctionClothing } from "../component/donate-form/AuctionClothing";

export const AuctionType = props => {
	const [category, setCategory] = useState("Select a category");
	const history = useHistory();
	return (
		<>
			<div className="container justify-content-center d-flex">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title"> Add an Item to Auction </h3>
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
									<option value="clothing">Cars</option>
									<option value="furniture">Electronics</option>
									<option value="art">Jewelry and Watches</option>
									<option value="furniture">Books</option>
									<option value="art">Toys</option>
								</select>
							</div>
							{category == "clothing" ? (
								<AuctionClothing />
							) : category == "furniture" ? (
								<AuctionFurniture />
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
