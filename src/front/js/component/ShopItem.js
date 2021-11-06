import React from "react";

export const ShopItem = () => {
	// hardcoding fake store items
	const items = [
		{
			id: 1,
			category: "clothing",
			saleType: "sale",
			condition: "good",
			itemType: "t-shirt",
			price: 10.0,
			image: "https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
		},
		{
			id: 2,
			category: "clothing",
			saleType: "sale",
			condition: "good",
			itemType: "pants",
			price: 15.0,
			image: "https://cdn.shopify.com/s/files/1/0559/6715/4340/products/360020_420x525.jpg?v=1636152457"
		},
		{
			id: 3,
			category: "household",
			saleType: "sale",
			condition: "good",
			itemType: "dining table",
			price: 20.0,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmYIRC351z7UHKLZFAEnEEjYTv04vycQSgA&usqp=CAU"
		},
		{
			id: 4,
			category: "other",
			saleType: "bid",
			condition: "good",
			itemType: "book",
			price: 5.0,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNWkhhnQFio8ncl4yGYNcZ-4LKmilmF76eA&usqp=CAU"
		}
	];

	// returning and rendering each item of items array above
	return (
		<>
			{items.map(item => {
				return (
					<div className="card col-md-3 m-3" style={{ width: "18rem" }} key={item.id}>
						<img className="card-img-top" src={item.image} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">This an awesome {item.itemType}</h5>
							<p className="card-text">{item.itemType}</p>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
							<a href="#" className="btn btn-warning">
								Bid
							</a>
						</div>
					</div>
				);
			})}
		</>
	);
};
