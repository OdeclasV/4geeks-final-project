import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";

export const ProfileWishlist = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const [newTask, setNewTask] = React.useState("");
	const [listOfTasks, setListOfTasks] = React.useState([]);

	React.useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/matthewcarpenter00")
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(data => setListOfTasks(data));
	}, []);

	React.useEffect(() => {}, [listOfTasks]);

	const addToList = () => {
		setListOfTasks([...listOfTasks, newTask]);
		setNewTask("");

		fetch("https://assets.breatheco.de/apis/fake/todos/user/matthewcarpenter00", {
			method: "PUT",
			body: JSON.stringify([...listOfTasks, { label: newTask, done: false }]),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(resp => {
			if (resp.ok) {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/matthewcarpenter00")
					.then(data => {
						if (!data.ok) {
							return new Error("There was a problem loading the info");
						} else {
							return data.json();
						}
					})
					.then(data => setListOfTasks(data));
			}
		});
	};

	const deleteTask = index => {
		const updatedList = listOfTasks.filter((item, i) => {
			return i !== index;
		});

		setListOfTasks(updatedList);
	};

	return (
		<div className="container-fluid ">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h1>Wishlist Items</h1>
				<p>{store.currentuser.needs}</p>
				<div className="notePad container-fluid">
					<input
						className="container inputfield"
						type="text"
						value={newTask}
						placeholder="Add an item here..."
						onChange={event => setNewTask(event.target.value)}
						onKeyUp={event => {
							if (event.key === "Enter") {
								if (newTask === "") {
									alert("Please enter an item");
								} else {
									addToList();
								}
							}
						}}
					/>
					{listOfTasks.length == 0 ? <p className="text-center">No items? add an item</p> : null}

					{listOfTasks.map((item, index) => {
						return (
							<div key={index} className="todo">
								{item.label}
								<p
									className="closebutton"
									onClick={() => {
										deleteTask(index);
									}}>
									X
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
