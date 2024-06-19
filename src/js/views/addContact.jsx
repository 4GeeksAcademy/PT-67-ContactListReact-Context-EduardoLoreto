import React, { useState, useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";





export const AddContact = () => {
	const { actions } = useContext(Context);

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		actions.postContact(name, phone, email, address)
	}

	return (
		<form className="container" onSubmit={handleSubmit}>
			<h1 className="mt-5 mx-auto p-3 text-center">Add new Contact</h1>
			<div className="mb-3">
				<label className="form-label">Full Name</label>
				<input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="fullName" aria-describedby="Full Name" placeholder="Full Name" />
			</div>
			<div className="mb-3">
				<label className="form-label">Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" />
			</div>
			<div className="mb-3">
				<label className="form-label">Phone</label>
				<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="phone" aria-describedby="phone" placeholder="Enter phone" />
			</div>
			<div className="mb-3">
				<label className="form-label">Address</label>
				<input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" aria-describedby="address" placeholder="Enter address" />
			</div>
			<div className="mb-3">
				<button className="btn btn-primary w-100" type="submit">Save</button>
			</div>
			<Link to="/">back to contact List</Link>
		</form>
	);
};