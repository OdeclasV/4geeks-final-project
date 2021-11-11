import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ItemFilter } from "../component/ItemFilter";
import { ShopItem } from "../component/ShopItem";

export const Shop = () => {
	const { store, actions } = useContext(Context);
	const [filterOption, setfilterOption] = useState("");

	// list of dropdowns and their options to render
	const dropdowns = [
		{ name: "Type", options: ["clothing", "books", "furniture"] },
		{ name: "Buy Options", options: ["Final Sale", "Bid"] },
		{ name: "More Options", options: ["Recently Posted", "Option 1", "Option 2"] },
		{ name: "Sort By", options: ["Low To High", "Buy", "Bid"] }
	];

	console.log(filterOption);

	return (
		<>
			<div className="shop-title">
				<h1 style={shopStyles}>Sale Items</h1>
			</div>
			<div className="d-flex">
				{dropdowns.map(dropdown => {
					// adds state to each mapped dropdown menu
					// so when clicked, the state of one dropdown changes
					// and not all of them at once
					const [dropdownMenu, setDropdownMenu] = useState(false);

					return (
						<div className="dropdown m-1" key={dropdown.name}>
							<button
								className="btn btn-secondary dropdown-toggle"
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
										<a
											className="dropdown-item"
											href="#"
											key={option}
											onClick={() => {
												setfilterOption(option);
											}}>
											{option}
										</a>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<div className="shop-items">
				<ul className="d-flex justify-content-around flex-wrap">
					{/* filter en base a lo que la persona clickea */

					store.items
						// .filter(item => {
						// 	if (filterOption == item.category) {
						// 		return true;
						// 	}
						// })
						.map(item => {
							return <ShopItem key={item.id} item={item} />;
						})}
				</ul>
			</div>
		</>
	);
};

const shopStyles = {
	textAlign: "center"
};

//object con clothe: true or clothe: false
// cada propiedad nombre de lo que quieres filtrear
// user clicks on clothe, pasa de false a true
// y muestra solo los true
// filter chqeuea clothe:true/false y solo muestra lo que el user clikeo
