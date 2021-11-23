const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			//hardcoding these items here for the moment
			items: [
				{
					id: 1,
					category: "clothing",
					saleType: "sale",
					condition: "good",
					itemType: "t-shirt",
					price: 10.0,
					endDate: "11/27/2021",
					image: "https://cdn.shopify.com/s/files/1/0559/6715/4340/products/365354_420x525.jpg?v=1633403005"
				},
				{
					id: 2,
					category: "clothing",
					saleType: "sale",
					condition: "good",
					itemType: "pants",
					price: 15.0,
					endDate: "11/26/2021",
					image: "https://cdn.shopify.com/s/files/1/0559/6715/4340/products/360020_420x525.jpg?v=1636152457"
				},
				{
					id: 3,
					category: "furniture",
					saleType: "sale",
					condition: "good",
					itemType: "dining table",
					price: 20.0,
					endDate: "11/25/2021",
					image:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmYIRC351z7UHKLZFAEnEEjYTv04vycQSgA&usqp=CAU"
				},
				{
					id: 4,
					category: "books",
					saleType: "bid",
					condition: "good",
					itemType: "book",
					price: 5.0,
					endDate: "11/24/2021",
					image:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNWkhhnQFio8ncl4yGYNcZ-4LKmilmF76eA&usqp=CAU"
				}
			],
			shoppingCartItems: [],
			nonprofits: [
				{
					id: 1,
					name: "good non-profit",
					logo: "https://bit.ly/3n6N8tC",
					description: "Good company is focused on healthy pokemon living",
					needs: ["clothes"],
					totalfunds: 1000.0
				},
				{
					id: 2,
					name: "gooder non-profit",
					logo: "https://bit.ly/3n84p5W",
					description: "Gooder company is focused on sustainability",
					needs: ["furniture"],
					totalfunds: 0.0
				}
			],
			currentuser: {
				id: 1,
				name: "good non-profit",
				logo: "https://bit.ly/3n6N8tC",
				description: "Good company is focused on healthy pokemon living",
				needs: ["clothes"],
				totalfunds: 10000.0,
				donations: 64
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			addToShoppingCart: (item, price, image) => {
				let { shoppingCartItems } = getStore();
				let items = { name: item, price: price, image: image };
				//shoppingCartItems.push(items);
				if (!shoppingCartItems.filter(element => element.name == item).length) {
					setStore({ shoppingCartItems: [...shoppingCartItems, items] });
				} // change to item.id
			},

			addAuctionItem: item => {
				let { items } = getStore();
				// items.push(item);

				setStore({ items: [...items, item] });
			},

			// arrow functions to update contacts
			getContacts: () => {
				// get contacts from API
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/matthewcarpenter")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ contacts: data });
					});
			},

			addContact: contact => {
				// add contact details to API
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/matthewcarpenter")
								.then(response => {
									if (!response.ok) {
										throw new Error(response.statusText);
									}
									return response.json();
								})
								.then(data => {
									setStore({ contacts: data });
								});
						}
					})
					.catch(err => console.error("Error:", err));
			},

			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(response => {
						if (response.ok) {
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/matthewcarpenter")
								.then(response => {
									if (!response.ok) {
										throw new Error(response.statusText);
									}
									return response.json();
								})
								.then(data => {
									setStore({ contacts: data });
								});
						}
					})
					.catch(err => console.error("Error:", err));
			},

			editContact: contact => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/matthewcarpenter")
								.then(response => {
									if (!response.ok) {
										throw new Error(response.statusText);
									}
									return response.json();
								})
								.then(data => {
									setStore({ contacts: data });
								});
						}
					})
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
