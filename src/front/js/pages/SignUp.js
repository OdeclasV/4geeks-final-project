import React, { useState } from "react";

import { Link } from "react-router-dom";

export const SignUp = () => {
	const [selectedTab, setSelectedTab] = useState("user");

	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form overview-block">
					<div className="card-top text-center py-3">
						<h2>Sign Up</h2>
					</div>
					{/* Tabs */}
					<ul className="nav nav-tabs  justify-content-center nav-justified" role="tablist">
						<li className="nav-item" role="presentation">
							<button
								className={selectedTab == "user" ? "nav-link active" : "nav-link"}
								id="pills-signup-user"
								data-bs-toggle="tab"
								data-bs-target="#pills-signup-user"
								type="button"
								role="tab"
								aria-controls="pills-signup-user"
								aria-selected="true"
								onClick={() => {
									setSelectedTab("user");
								}}>
								Users
							</button>
						</li>

						<li className="nav-item" role="presentation">
							<button
								className={selectedTab == "non-profit" ? "nav-link active" : "nav-link"}
								id="pills-signup-nonprofit"
								data-bs-toggle="pill"
								data-bs-target="#pills-signup-nonprofit"
								type="button"
								role="tab"
								aria-controls="pills-signup-nonprofit"
								aria-selected="false"
								onClick={() => {
									setSelectedTab("non-profit");
								}}>
								Non-Profits
							</button>
						</li>
					</ul>
					{/* Tabs Content */}
					<div className="tab-content" id="pills-tabContent">
						{/* User Tab */}
						<div
							className={
								selectedTab == "user"
									? "tab-pane container fade show active"
									: "tab-pane container fade"
							}
							id="pills-signup-user"
							role="tabpanel"
							aria-labelledby="pills-signup-user">
							<form className="justify-content-md-center ">
								<div className="mb-3 px-4">
									<label className="form-label">First Name</label>
									<input type="string" className="form-control" id="FirstNameUser" />
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Last Name</label>
									<input type="string" className="form-control" id="LastNameUser" />
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										id="EmailUser"
										aria-describedby="emailHelp"
									/>
									<div id="emailHelp" className="form-text">
										Well never share your email with anyone else.
									</div>
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Password</label>
									<input type="password" className="form-control" id="PasswordUser" />
								</div>
								<div className="text-center px-4">
									<Link to="/profile/user">
										<button type="submit" className="btn btn-two btn-lg px-4 container-fluid my-5">
											Sign Up
										</button>
									</Link>
								</div>
							</form>
						</div>
						{/* Non Profit Tab */}
						<div
							className={
								selectedTab == "non-profit"
									? "tab-pane container fade show active"
									: "tab-pane container fade"
							}
							id="pills-signup-nonprofit"
							role="tabpanel"
							aria-labelledby="pills-signup-nonprofit">
							<form className="justify-content-md-center ">
								<div className="mb-3 px-4">
									<label className="form-label">NonProfit Name</label>
									<input type="string" className="form-control" id="NonProfitName" />
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										id="NonProfitEmail"
										aria-describedby="emailHelp"
									/>
									<div id="emailHelp" className="form-text">
										Well never share your email with anyone else.
									</div>
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Password</label>
									<input type="password" className="form-control" id="NonProfitPassword" />
								</div>
								<div className="text-center px-4">
									<Link to="/profile/nonprofit">
										<button type="submit" className="btn btn-two btn-lg px-4 container-fluid my-5">
											Sign Up
										</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
