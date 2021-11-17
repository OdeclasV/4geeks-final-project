import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import heromockURL from "../../img/project-hero-mock.png";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img
						src={heromockURL}
						className="d-block mx-lg-auto img-fluid"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3"> Time To Give Back</h1>
					<p className="lead">
						some short decription of our project and why it is so awesome will go here, get ready!
					</p>

					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<Link to="/donate">
							<button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
								Donate
							</button>
						</Link>
						<Link to="/shop">
							<button type="button" className="btn btn-outline-secondary btn-lg px-4">
								Shop
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
