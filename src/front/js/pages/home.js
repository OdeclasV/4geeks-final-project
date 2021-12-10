import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import heromockURL from "../../img/project-hero-mock.png";
import taglineURL from "../../img/tagline.png";
import palettesURL from "../../img/palettes.png";
import BidForGoodHands from "../../img/Bid-For-Good-09.png";

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
				{/* <div className="mx-auto align-items-center text-bubble giveblue-font shadow-md ">
					<h4>A New Kind of Marketplace</h4>
				</div> */}
			</div>
			<div className="index-two">
				<div className="row p-5 align-items-center">
					<div className="col">
						<div className="card-body p-5">
							<i className="fas fa-store fa-3x m-3 text-white" />
							<h2 className="text-white services-title m-3">shop</h2>
							<p className="text-white card-text m-3">
								Shop for items and fund non-profits in the process.
							</p>
						</div>
					</div>
					<div className="col">
						<div className="card-body p-5">
							<i className="fas fa-dollar-sign fa-3x m-3 text-white" />
							<h2 className="text-white services-title m-3">bid</h2>
							<p className="text-white card-text m-3">
								Fund a Non Profit by auctioning items to our shop.
							</p>
						</div>
					</div>
					<div className="col">
						<div className="card-body p-5">
							<i className="fas fa-hand-holding-heart fa-3x m-3 text-white" />
							<h2 className="text-white services-title m-3">give</h2>
							<p className="text-white card-text m-3">
								Donate to Local NonProfits. Items will be picked up at your house.
							</p>
						</div>
					</div>
					{/* <div className="col-10 col-sm-8 col-lg-6">
						<img
							src={BidForGoodHands}
							className="d-block mx-lg-auto img-fluid"
							width="300"
							height="200"
							loading="lazy"
						/>
					</div>
					<div className="col-lg-6">
						<h2 className="display-5 fw-bold lh-1 mb-3 giveblue-font">Bid.Shop.Give</h2>
						<p className="lead">
							Bids on items you want. Donate items you don&apos;t want directly to your preferred nonprofit.
							Give back, do your part.
						</p>
						<button type="button" className="btn btn-two btn-lg px-4 me-md-2">
							Learn more about us
						</button>
					</div> */}
				</div>
			</div>
			<div className="row align-items-center py-5 nonprofit-partners">
				<h3 className=" giveblue-font text-center display-5 fw-bold lh-1 mb-3">Nonprofit Friends</h3>
				<div className="p-5">
					<NonProfitPartners />
				</div>
			</div>
		</>
	);
};
