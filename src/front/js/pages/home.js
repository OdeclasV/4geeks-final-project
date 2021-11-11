import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello, this is our Final Project</h1>
			<h3>If you&apos;re seeing this, our homepage is under construction</h3>
			<Link to="/Shop">
				<button className="btn btn-primary m-3">Go to online store</button>
			</Link>
			<Link to="/donate">
				<button className="btn btn-success">Donate</button>
			</Link>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
