import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ContactList } from "./views/contactList.jsx";
import { AddContact } from "./views/addContact.jsx";
import { UpdateContact } from "./views/updateContact.jsx";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";


const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<ContactList />} />
					<Route path="/addContact" element={<AddContact />} />
					<Route path="/updateContact" element={<UpdateContact />} />
					<Route path="*" element={<h1>No Encontrado!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

