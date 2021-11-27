import React from "react";

import { Link } from "react-router-dom";
import Proptypes from "prop-types";

export const SignUp = () => {
	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div className="login-form">
					{/* Tabs */}
					<ul className="nav nav-tabs  justify-content-center nav-justified" role="tablist">
						<li className="nav-item" role="presentation">
							<button
								className="nav-link active"
								id="pills-signup-user"
								data-bs-toggle="tab"
								data-bs-target="#pills-signup-user"
								href="#pills-signup-user"
								type="button"
								role="tab"
								aria-controls="pills-signup-user"
								aria-selected="true">
								Users
							</button>
						</li>

						<li className="nav-item" role="presentation">
							<button
								className="nav-link"
								id="pills-signup-nonprofit"
								data-bs-toggle="pill"
								data-bs-target="#pills-signup-nonprofit"
								href="#pills-signup-nonprofit"
								type="button"
								role="tab"
								aria-controls="pills-signup-nonprofit"
								aria-selected="false">
								Non-Profits
							</button>
						</li>
					</ul>
					{/* Tabs Content */}
					<div className="tab-content" id="pills-tabContent">
						{/* User Tab */}
						<div
							className="tab-pane container fade show active"
							id="pills-signup-user"
							role="tabpanel"
							aria-labelledby="pills-home-tab">
							<form className="justify-content-md-center ">
								<h1 className="text-center pb-2 py-3">User Sign Up</h1>
								<div className="mb-3 px-4">
									<label className="form-label">First Name</label>
									<input type="password" className="form-control" id="exampleInputPassword1" />
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Last Name</label>
									<input type="password" className="form-control" id="exampleInputPassword1" />
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
									<div id="emailHelp" className="form-text">
										Well never share your email with anyone else.
									</div>
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Password</label>
									<input type="password" className="form-control" id="exampleInputPassword1" />
								</div>
								<div className="text-center px-4">
									<Link to="/signup">
										<button
											type="submit"
											className="btn btn-primary btn-lg px-4 container-fluid my-5">
											Submit
										</button>
									</Link>
								</div>
							</form>
						</div>
						{/* Non Profit Tab */}
						<div
							className="tab-pane container fade"
							id="pills-signup-nonprofit"
							role="tabpanel"
							aria-labelledby="pills-signup-nonprofit-tab">
							<form className="justify-content-md-center ">
								<h1 className="text-center pb-2 py-3">Non Profit Sign Up</h1>
								<div className="mb-3 px-4">
									<label className="form-label">NonProfit Name</label>
									<input type="password" className="form-control" id="exampleInputPassword1" />
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Last Name</label>
									<input type="password" className="form-control" id="exampleInputPassword1" />
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
									<div id="emailHelp" className="form-text">
										Well never share your email with anyone else.
									</div>
								</div>
								<div className="mb-3 px-4">
									<label className="form-label">Password</label>
									<input type="password" className="form-control" id="exampleInputPassword1" />
								</div>
								<div className="text-center px-4">
									<Link to="/signup">
										<button
											type="submit"
											className="btn btn-primary btn-lg px-4 container-fluid my-5">
											Submit
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

SignUp.propTypes = {
	match: Proptypes.object
};
