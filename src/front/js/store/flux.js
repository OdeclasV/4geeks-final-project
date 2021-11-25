const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			//hardcoding these items here for the moment
			items: [],
			shoppingCartItems: [],
			nonprofits: [],
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
			getItems: () => {
				fetch("https://3001-aqua-anteater-lbzo25xi.ws-us17.gitpod.io/api/items")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ items: data });
					});
			},
			getNonprofits: () => {
				fetch("https://3001-aqua-anteater-lbzo25xi.ws-us17.gitpod.io/api/nonprofit")
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
				//shoppingCartItems.push(items);
				if (!shoppingCartItems.filter(element => element.name == item).length) {
					setStore({ shoppingCartItems: [...shoppingCartItems, items] });
				} // change to item.id
			},

			addAuctionItem: item => {
				fetch("https://3001-aqua-anteater-lbzo25xi.ws-us17.gitpod.io/api/items", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(item)
				})
					.then(response => {
						if (response.ok) {
							fetch("https://3001-aqua-anteater-lbzo25xi.ws-us17.gitpod.io/api/items")
								.then(response => {
									if (!response.ok) {
										throw new Error(response.statusText);
									}
									return response.json();
								})
								.then(data => {
									console.log(data);
									setStore({ items: data });
								});
						}
					})
					.catch(err => console.error("Error:", err));
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
