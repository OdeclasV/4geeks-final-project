import React from "react";

export const Shop = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="shop-title">
					<h1 style={shopStyles}>Sale Items</h1>
				</div>
				<div className="shop-items">
					<ul>
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">This an awesome t-shirt</h5>
								<p className="card-text">Take it, it&apos;s yours do it do it</p>
								<a href="#" className="btn btn-primary">
									Add to cart
								</a>
								<a href="#" className="btn btn-warning">
									Bid
								</a>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</>
	);
};

const shopStyles = {
	textAlign: "center"
};
