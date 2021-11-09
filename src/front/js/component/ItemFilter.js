import React from "react";

export const ItemFilter = () => {
	// list of dropdowns and their options to render
	const dropdowns = [
		{ name: "Type", options: ["clothes", "books", "furniture"] },
		{ name: "Buy Options", options: ["Final Sale", "Bid"] },
		{ name: "More Options", options: ["Recently Posted", "Option 1", "Option 2"] },
		{ name: "Sort By", options: ["Low To High", "Buy", "Bid"] }
	];

	return (
		<div className="d-flex">
			{dropdowns.map(dropdown => {
				return (
					<div className="dropdown m-1" key={dropdown}>
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							{dropdown.name}
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{// this map is necessary to render each dropddown's options from the options
							// inside dropdowns object, above
							dropdown.options.map((option, index) => {
								return (
									<a className="dropdown-item" href="#" key={index}>
										{option}
									</a>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};
