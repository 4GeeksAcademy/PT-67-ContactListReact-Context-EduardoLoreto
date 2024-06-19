import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../component/contactCard.jsx";

export const ContactList = () => {


	return (
		<div className="container">
			<h1 className="text-center align-items-center mt-5 text-success text-decoration-underline">Lista de Contactos</h1>
			<Link className="d-flex align-items-end text-decoration-none" to="/addContact">
				<button className="btn btn-success ms-auto m-3">Añadir contacto</button>
			</Link>
			<div className="container">
				<Contact />
			</div>
        </div>
	);
};