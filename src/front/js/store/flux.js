const getState = ({ getStore, getActions, setStore }) => {
	const currentURL = "https://3001-aqua-anteater-lbzo25xi.ws-us21.gitpod.io";

	return {
		store: {
			items: [],
			bids: [],
			shoppingCartItems: [],
			nonprofits: [],
			users: [],
			currentnonprofit: {
				id: 1,
				name: "good non-profit",
				logo: "https://bit.ly/3n6N8tC",
				description: "Good company is focused on healthy pokemon living",
				email: "good@nonprofit.org",
				needs: ["clothes"],
				totalfunds: 10000.0,
				donations: 64
			},
			currentuser: {
				id: 1,
				name: "Jane",
				last_name: "Doe",
				email: "jane@doe.com",
				totalfundsdonated: 385.0,
				donations: 12,
				nonprofitfriends: "good non-profit, gooder non-profit"
			}
		},
		actions: {
			getItems: () => {
				fetch(`${currentURL}/api/items`)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						//console.log(data);
						let shopOnlyItems = [];
						data.filter(item => {
							item.donation_type == 2 ? shopOnlyItems.push(item) : shopOnlyItems;
						});
						setStore({ items: shopOnlyItems });
						//console.log(getStore().items);
						//console.log(shopOnlyItems);
						// setStore({ items: data });
					})
					.catch(err => console.error("Error:", err));
			},

			getBids: () => {
				fetch(`${currentURL}/api/items`)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						//console.log(data);
						setStore({ bids: data });
					});
			},
			getNonprofits: () => {
				fetch(`${currentURL}/api/nonprofit`)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ nonprofits: data });
					});
			},

			addToShoppingCart: (item, price, image) => {
				let { shoppingCartItems } = getStore();
				let items = { name: item, price: price, image: image };
				// shoppingCartItems.push(items);
				if (!shoppingCartItems.filter(element => element.name == item).length) {
					setStore({ shoppingCartItems: [...shoppingCartItems, items] });
				} // change to item.id
			},

			addAuctionItem: item => {
				fetch(`${currentURL}/api/items`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(item)
				})
					.then(response => response.json())
					.then(data => {
						setStore({ items: data });
						// setStore({ bids: [...bids, data[1]] });
						// console.log(getStore().bids);
					})
					.catch(err => console.error("Error:", err));
			},

			// donateItem: item => {

			// },

			updateBid: (id, currentBid) => {
				fetch(`${currentURL}/api/items/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						current_price: currentBid
					})
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						let shopOnlyItems = [];
						data.filter(item => {
							item.donation_type == 2 ? shopOnlyItems.push(item) : shopOnlyItems;
						});
						setStore({ items: shopOnlyItems });
						//console.log(getStore().items);
						//console.log(shopOnlyItems);
						// setStore({ items: data });
					})
					.catch(err => console.error("Error:", err));
			},

			createBid: (id, minimunBid, currentPrice, numOfBids) => {
				fetch(`${currentURL}/api/bid`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						item_id: id,
						current_price: currentPrice,
						num_of_bids: numOfBids
					})
				})
					.then(response => {
						if (response.ok) {
							fetch(`${currentURL}/api/items`)
								.then(response => {
									if (!response.ok) {
										throw new Error(response.statusText);
									}
									return response.json();
								})
								.then(data => {
									//console.log(data);
									setStore({ items: data });
								});
						}
					})
					.catch(err => console.error("Error:", err));
			},

			// updateBid: bid => {
			// 	fetch(`${currentURL}/api/bid/${bid.id}`, {
			// 		method: "PUT",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify(bid)
			// 	})
			// 		.then(response => {
			// 			if (response.ok) {
			// 				fetch(`${currentURL}/api/bid`)
			// 					.then(response => {
			// 						if (!response.ok) {
			// 							throw new Error(response.statusText);
			// 						}
			// 						return response.json();
			// 					})
			// 					.then(data => {
			// 						console.log(data);
			// 						setStore({ bids: data });
			// 					});
			// 			}
			// 		})
			// 		.catch(err => console.error("Error:", err));
			// },

			addWishlistItem: item => {
				let { items } = getStore();

				setStore({ items: [...items, item] });
			}
		}
	};
};

export default getState;
