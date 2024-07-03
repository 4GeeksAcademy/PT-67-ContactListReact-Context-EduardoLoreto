import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");


	function deleteOneContact(element) {
		setId(element)
	}

	function confirmDelete() {
		actions.deleteContact(id);
	}

	function idUpdateContact(id, name, address, phone, email) {
		actions.setIdForUpdate(id, name, address, phone, email)
	}

	return (

		<div>
			{store.Contacts.length === 0 && <span className="m-5 p-5 text-danger">No existe ningún contacto</span>}
			{store.Contacts.map((contact) => {
				return (
					<div key={contact.id} className="row border rounded m-2">
						<div className="col-3 col-lg-2 p-2 mx-4 my-auto">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8-7zKqxeqUgJ0SfeQ9jxZzFzU_6nTObmYQ&s" className="card-img rounded-circle" alt="..." />
						</div>
						<div className="col p-2 my-auto">
							<div className="row d-flex">
								<div className="col-12 py-3">
									<h2 className="pt-2">{contact.name}</h2>
								</div>
								<div className="col text-secondary">
									<div className="d-flex align-items-center">
										<i class="fa-solid fa-phone"></i> {contact.phone}
									</div>
									<div className="d-flex align-items-center">
										<i class="fa-solid fa-address-book"></i> {contact.address}
									</div>
									<div className="d-flex align-items-center">
										<i class="fa-solid fa-envelope"></i> {contact.email}
									</div>
								</div>
							</div>
						</div>
						<div className="container-fluid d-flex justify-content-end mb-2 mt-2">
							<div className="d-flex align-items-start mt-3">
								<Link to="/updateContact"><button onClick={() => idUpdateContact(contact.id, contact.name, contact.address, contact.phone, contact.email)} className="btn"></button><i class="fa-solid fa-pen-to-square"></i> </Link>
							</div>
							<div className="d-flex align-items-start mt-3">
								<button onClick={() => deleteOneContact(contact.id)} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-trash"></i></button>
							</div>
						</div>
					</div>
				)
			})}


			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Estas segur@?</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Si eliminas no se podra recuperar!!!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Mejor no</button>
							<button onClick={() => confirmDelete()} type="button" className="btn btn-warning" data-bs-dismiss="modal">Eliminar de todos modos!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};