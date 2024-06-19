import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faLocationDot, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'



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


	let urlImage1 = "https://picsum.photos/id/"
	let urlImage2 = "/200/200"


	return (

		<div>
			{store.Contacts.length === 0 && <span className="m-5 p-5">No hay contactos agregados</span>}
			{store.Contacts.map((contact) => {
				return (
					<div key={contact.id} className="row border rounded m-2">
						<div className="col-3 col-lg-2 p-2 mx-4 my-auto">
							<img src={urlImage1 + contact.id + urlImage2} className="card-img rounded-circle" alt="..." />
						</div>
						<div className="col p-2 my-auto">
							<div className="row d-flex">
								<div className="col-12 py-3">
									<h5 className="pt-2">{contact.name}</h5>
								</div>
								<div className="col text-secondary">
									<div className="d-flex align-items-center">
										<FontAwesomeIcon className="pe-2" icon={faLocationDot} /><p className="pt-3">{contact.address}</p>
									</div>
									<div className="d-flex align-items-center">
										<FontAwesomeIcon className="pe-2" icon={faPhoneAlt} /><p className="pt-3">{contact.phone}</p>
									</div>
									<div className="d-flex align-items-center">
										<FontAwesomeIcon className="pe-2" icon={faEnvelope} /><p className="pt-3">{contact.email}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-2 p-2 ms-auto me-2 d-flex d-inline">
							<div className="d-flex align-items-start mt-3">
								<Link to="/updateContact"><button onClick={() => idUpdateContact(contact.id, contact.name, contact.address, contact.phone, contact.email)} className="btn"><FontAwesomeIcon className="px-2" icon={faPencil} /></button></Link>
							</div>
							<div className="d-flex align-items-start mt-3">
								<button onClick={() => deleteOneContact(contact.id)} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" ><FontAwesomeIcon className="px-2" icon={faTrash} /></button>
							</div>
						</div>
					</div>
				)
			})}

			{/* <!-- Modal --> */}
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							If you delete this thing the entire uneverse will go down!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
							<button onClick={() => confirmDelete()} type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes Baby!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};