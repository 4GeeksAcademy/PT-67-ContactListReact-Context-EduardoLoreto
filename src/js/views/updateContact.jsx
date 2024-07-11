import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
export const UpdateContact = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(store.contact2.name);
    const [phone, setPhone] = useState(store.contact2.phone);
    const [email, setEmail] = useState(store.contact2.email);
    const [address, setAddress] = useState(store.contact2.address);
    useEffect(() => {
        setName(store.contact2.name);
        setPhone(store.contact2.phone);
        setEmail(store.contact2.email);
        setAddress(store.contact2.address);
    }, [store.contact2]);
    function handleSubmit(e) {
        e.preventDefault();
        actions.putContact(name, phone, email, address);
    }
    return (
        <form className="container-fluid" onSubmit={handleSubmit}>
            <h1 className="mt-5 mx-auto p-3 text-center">Editar contacto</h1>
            <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="fullName" aria-describedby="Full Name" placeholder="Nombre Completo" />
            </div>
            <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="email" placeholder="Introduce tu E-mail" />
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="phone" aria-describedby="phone" placeholder="Introduce tu Telefono" />
            </div>
            <div className="mb-3">
                <label className="form-label">Direccion</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" aria-describedby="address" placeholder="Direccion Completa" />
            </div>
            <div className="mb-3">
                <button className="btn btn-warning w-100" type="submit">Save</button>
            </div>
            <Link to="/">Lista de Contactos</Link>
        </form>
    );
};