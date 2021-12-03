import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const AuctionFurniture = () => {
	const [typeOfFurniture, settypeOfFurniture] = useState("Select a value");
	const [condition, setCondition] = useState("Select a value");
	const [nonprofit, setNonProfit] = useState("Select a NonProfit");
	const { store, actions } = useContext(Context);
	const [selectedImage, setSelectedImage] = useState(null);

	const [auctionItem, setAuctionItem] = useState({
		bid_count: 0,
		category: "furniture",
		condition: null,
		donate_to: nonprofit,
		donated_by: null,
		donation_type: 2,
		image: "https://bit.ly/3kHj3PT",
		name: null,
		item_type: null,
		original_price: null,
		posted_date: null,
		end_date: null,
		num_of_bids: 0
	});

	console.log(auctionItem);

	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form overview-block">
					<div className="form-group">
						<label htmlFor="type of furniture" className="control-label mt-3">
							Type of Furniture
						</label>

						<select
							className="form-select"
							aria-label="Default select type"
							value={typeOfFurniture}
							onChange={e => {
								settypeOfFurniture(e.target.value);
								setAuctionItem({ ...auctionItem, item_type: e.target.value });
							}}>
							<option value="Select a value">Select a value</option>
							<option value="dining table">Dining Table</option>
							<option value="chair">Chair</option>
							<option value="sofa">Sofa</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="condition" className="control-label mt-3">
							Condition
						</label>

						<select
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
								type="text"
								className="form-control"
								name="name"
								id="name"
								placeholder="Restoration Hardware Dining Table"
								onChange={e => {
									setAuctionItem({ ...auctionItem, name: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="price" className="control-label mt-3">
							Price
						</label>
						<div className="">
							<input
								type="text"
								className="form-control"
								name="price"
								id="furniture-price"
								value={auctionItem.original_price}
								onChange={e => {
									setAuctionItem({ ...auctionItem, original_price: e.target.value });
								}}
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="description" className="control-label mt-3">
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
							{/* <option value="Select a NonProfit">Select a NonProfit</option>
							<option value="the-cat-network">The Cat Network</option>
							<option value="universal-aid-for-children">Universal Aid for Children</option>
							<option value="global-empowerment-mission">Global Empowerment Mission</option>
							<option value="camillus-house">Camillus House</option> */}
						</select>
					</div>

					<div className="form-group">
						<div className="submit-button">
							<Link
								to="/"
								type="submit"
								className="btn btn-two container mt-3"
								onClick={() => {
									setAuctionItem({ ...auctionItem, posted_date: new Date() });
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
