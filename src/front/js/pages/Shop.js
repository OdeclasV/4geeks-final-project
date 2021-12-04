import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ShopItem } from "../component/ShopItem";
import { Link } from "react-router-dom";

export const Shop = () => {
	const { store, actions } = useContext(Context);
	const [filterOption, setfilterOption] = useState("");

	// list of dropdowns and their options to render
	const dropdowns = [
		{ name: "Filter", options: ["clothing", "books", "furniture"] },
		{ name: "Sort By", options: ["Low To High", "Buy", "Bid"] }
	];

	return (
		<>
			<div className="shop-title text-center mb-3">
				<h1>Shop for Good</h1>
			</div>
			<div className="d-flex justify-content-center mb-2">
				{dropdowns.map(dropdown => {
					// adds state to each mapped dropdown menu
					// so when clicked, the state of one dropdown changes
					// and not all of them at once
					const [dropdownMenu, setDropdownMenu] = useState(false);
					const [open, setOpen] = React.useState(false);

					return (
						<div className="dropdown m-1" key={dropdown.name}>
							<button
								className="btn btn-one dropdown-toggle"
								onClick={() => {
									setDropdownMenu(!dropdownMenu);
								}}
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								value={dropdown.name}>
								{dropdown.name}
							</button>
							<div
								className={dropdownMenu ? "dropdown-menu show" : "dropdown-menu"}
								aria-labelledby="dropdownMenuButton1">
								{// this map is necessary to render each dropddown's options from the options
								// inside dropdowns object, above
								dropdown.options.map(option => {
									return (
										<button
											className="dropdown-item"
											key={option}
											onClick={() => {
												setfilterOption(option);
												setDropdownMenu(!dropdownMenu);
											}}>
											{option}
										</button>
									);
								})}
							</div>
						</div>
					);
				})}
				<div className="m-1">
					<button
						className="btn btn-one"
						onClick={() => {
							setfilterOption("");
						}}>
						Clear All
					</button>
				</div>
			</div>
			<div className="shop-items">
				<ul className="d-flex justify-content-around flex-wrap">
					{store.items
						.filter(item => {
							return filterOption ? filterOption == item.category : true;
						})
						.map((item, index) => {
							return <ShopItem key={item.id} item={item} index={index} />;
						})}
				</ul>
			</div>
		</>
	);
};
