import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = React.useState(false);

	let totalCart = 0;
	let totalItems = store.shoppingCartItems.length;

	let show = "";
	if (dropdown) {
		show = "show";
	}
	return (
		<div className="dropdown" style={{ marginRight: "200px" }}>
			<button
				className="nav-link dropdown-toggle btn"
				onClick={() => {
					setDropdown(!dropdown);
				}}
				type="button"
				id="navbarDropdownMenuLink"
				role="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				<i className="fas fa-shopping-cart" />
				<span>({totalItems})</span>
			</button>
			<div
				className={totalItems > 0 ? "dropdown-menu" + show : "dropdown-menu"}
				aria-labelledby="navbarDropdownMenuLink">
				<div>
					<h5>Cart ({totalItems})</h5>
				</div>
				<div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col" colSpan="2">
									Item
								</th>
								<th scope="col">Price</th>
							</tr>
						</thead>
						<tbody>
							{store.shoppingCartItems.map(item => {
								totalCart += item.price;
								return (
									<tr key={item.name}>
										<td className="col-2">
											<img src={item.image} style={{ width: "100%" }} />
										</td>
										<td>{item.name}</td>
										<td>${item.price}</td>
									</tr>
								);
							})}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="2" style={{ textAlign: "right" }}>
									<strong>TOTAL</strong>
								</td>
								<td>${totalCart}</td>
							</tr>
							<tr>
								<td>
									<button type="button" className="btn btn-success">
										Checkout
									</button>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>
	);
};
