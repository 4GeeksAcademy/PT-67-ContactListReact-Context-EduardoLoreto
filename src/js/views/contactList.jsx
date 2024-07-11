import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../component/contactCard.jsx";

export const ContactList = () => {


	return (
		<div className="container-fluid justify-content-center">
			<h1 className="text-center align-items-center mt-5 text-warning">Lista de Contactos</h1>
			<div className="container-fluid d-flex justify-content-end">
				<Link className="w-0 text-decoration-none" to="/addContact">
					<button className="btn btn-warning m-3">Añadir contacto</button>
				</Link>
			</div>
			<div className="container-fluid">
				<Contact />
			</div>
		</div>
	);
};