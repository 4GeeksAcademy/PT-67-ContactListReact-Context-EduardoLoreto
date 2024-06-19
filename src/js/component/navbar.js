import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn btn-primary">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};