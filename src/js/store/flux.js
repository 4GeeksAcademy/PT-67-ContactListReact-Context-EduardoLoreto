const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            Contacts: [],
            contact: {
                id: "",
                name: "",
                phone: "",
                email: "",
                address: ""
            },
            contact2: {
                id: "",
                name: "",
                phone: "",
                email: "",
                address: ""
            },
        },
        actions: {
            createContactList: async () => {
                const actions = getActions();
                await fetch("https://playground.4geeks.com/contact/agendas/EduardoLoreto", {
                    method: "POST",
                });
                actions.getContacts();
            },
            getContacts: async () => {
                const actions = getActions();
                const response = await fetch("https://playground.4geeks.com/contact/agendas/EduardoLoreto");
                if (!response.ok) {
                    actions.createContactList();
                }
                const data = await response.json();
                setStore({
                    Contacts: data.contacts,
                });
            },
            postContact: async (inputName, inputPhone, inputEmail, inputAddress) => {
                const actions = getActions();
                const response = await fetch("https://playground.4geeks.com/contact/agendas/EduardoLoreto/contacts", {
                    method: "POST",
                    body: JSON.stringify({
                        name: inputName,
                        phone: inputPhone,
                        email: inputEmail,
                        address: inputAddress
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    alert("contacto creado correctamente");
                    actions.getContacts();
                } else {
                    alert("no se puede crear");
                }
            },
            setIdForUpdate: (id, name, address, phone, email) => {
                setStore({
                    contact2: {
                        id: id,
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    },
                });
            },
            putContact: async (inputName, inputPhone, inputEmail, inputAddress) => {
                const actions = getActions();
                const store = getStore();
                const response = await fetch('https://playground.4geeks.com/contact/agendas/EduardoLoreto/contacts/' + `${store.contact2.id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        name: inputName,
                        phone: inputPhone,
                        email: inputEmail,
                        address: inputAddress
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    alert("contacto actualizado correctamente");
                    actions.getContacts();
                } else {
                    alert("no se puede actualizar");
                }
            },
            deleteContact: async (id) => {
                const actions = getActions();
                const response = await fetch('https://playground.4geeks.com/contact/agendas/EduardoLoreto/contacts/' + `${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    alert("no se puede eliminar");
                } else {
                    actions.getContacts();
                }
            },
        }
    };
};
export default getState;