import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import heromockURL from "../../img/project-hero-mock.png";
import taglineURL from "../../img/tagline.png";
import palettesURL from "../../img/palettes.png";
import "../../styles/home.scss";
import { NonProfitPartners } from "./NonProfitPartners";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container col-xxl-10">
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
						<h1 className="display-5 fw-bold lh-1 mb-3 giveblue-font"> Time To Give Back</h1>
						<p className="lead">
							some short decription of our project and why it is so awesome will go here, get ready!
						</p>
						{!store.loggedin ? (
							<div className="d-grid gap-2 d-md-flex justify-content-md-start">
								<Link to="/donate">
									<button type="button" className="btn btn-two btn-lg px-4 me-md-2">
										Donate
									</button>
								</Link>
								<Link to="/shop">
									<button type="button" className="btn btn-one btn-lg px-4 me-md-2">
										Shop
									</button>
								</Link>
							</div>
						) : (
							<div className="d-grid gap-2 d-md-flex justify-content-md-start">
								<Link to="/donate">
									<button type="button" className="btn btn-two btn-lg px-4 me-md-2">
										Donate
									</button>
								</Link>
								<Link to="/shop">
									<button type="button" className="btn btn-one btn-lg px-4 me-md-2">
										Shop
									</button>
								</Link>
							</div>
						)}
					</div>
				</div>
				<div className="row flex-lg-row align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img
							src={palettesURL}
							className="d-block mx-lg-auto img-fluid"
							width="700"
							height="500"
							loading="lazy"
						/>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3 giveblue-font">Bid.Shop.Give</h1>
						<p className="lead">
							Bids on items you want. Donate items you don&apos;t want directly to your preferred
							nonprofit. Give back, do your part.
						</p>
						<button type="button" className="btn btn-two btn-lg px-4 me-md-2">
							Learn more about us
						</button>
					</div>
				</div>
				<div className="nonprofit-partners m-1">
					<h1 className="display-5 fw-bold lh-1 mb-3" style={{ textAlign: "center" }}>
						Nonprofit Partners
					</h1>
					<NonProfitPartners />
				</div>
			</div>
		</>
	);
};
