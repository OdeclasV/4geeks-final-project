import React, { useState } from "react";

export const ItemFilter = () => {
	// list of dropdowns and their options to render
	const dropdowns = [
		{ name: "Type", options: ["clothing", "books", "furniture"] },
		{ name: "Buy Options", options: ["Final Sale", "Bid"] },
		{ name: "More Options", options: ["Recently Posted", "Option 1", "Option 2"] },
		{ name: "Sort By", options: ["Low To High", "Buy", "Bid"] }
	];

	const [filterOption, setfilterOption] = useState("");

	console.log(filterOption);

	return (
		<>
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
		</>
	);
};
