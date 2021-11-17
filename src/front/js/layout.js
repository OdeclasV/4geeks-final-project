import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Shop } from "./pages/Shop";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Donate } from "./pages/donate";
import { DonationType } from "./component/donate-form/DonationType";
import { AuctionType } from "./component/donate-form/AuctionType";
import { ChooseNonProfit } from "./component/donate-form/ChooseNonProfit";
import { ClothingDonation } from "./component/donate-form/ClothingDonation";
import { ClothingAuction } from "./component/donate-form/ClothingAuction";
import { ItemFilter } from "./component/ItemFilter";
import { SignInModal, SignInSignUp } from "./component/navbar-buttons/SignInSignUp";
import { NonProfitProfile } from "./pages/profile-dashboards/NonProfitProfile";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container-fluid">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/shop">
							<Shop />
						</Route>
						<Route exact path="/donate">
							<Donate />
						</Route>
						<Route exact path="/donationtype">
							<DonationType />
						</Route>
						<Route exact path="/auctiontype">
							<AuctionType />
						</Route>
						<Route exact path="/choosenonprofit">
							<ChooseNonProfit />
						</Route>
						<Route exact path="/profile/nonprofit">
							<NonProfitProfile />
						</Route>
						<Route exact path="/donateclothes">
							<ClothingDonation />
						</Route>
						<Route exact path="/auctionclothes">
							<ClothingAuction />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/signinsignup">
							<SignInSignUp />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
