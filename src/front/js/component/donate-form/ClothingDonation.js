import React, { useState } from "react";

export const ClothingDonation = () => {
	const [typeOfClothes, setTypeOfClothes] = useState("Select a value");

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
										placeholder="Men's Patagonia Sweater / Dinning Table"
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
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="1234 Main St"
									/>
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
									<button type="submit" className="btn btn-primary">
										Add Item
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};