const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			//hardcoding these items here for the moment
			items: [
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
					needs: [],
					totalfunds: 0.0
				}
			]
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addToShoppingCart: (item, price, image) => {
				let { shoppingCartItems } = getStore();
				let items = { name: item, price: price, image: image };
				shoppingCartItems.push(items);
				setStore({ shoppingCartItems: shoppingCartItems });
			},

			addAuctionItem: item => {
				let { items } = getStore();
				items.push(item);
				setStore({ items: items });
			}
		}
	};
};

export default getState;
