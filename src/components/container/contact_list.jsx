import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/contact.class';
import ContactForm from '../pure/forms/contact_form_add';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact1 = new Contact('Juan Perez', 'juan@hotmail.com', false);
    const defaultContact2 = new Contact('Federico Navós', 'fedenavos@gmail.com', true);
    const defaultContact3 = new Contact('John Doe', 'john@gmail.com', false);
    const defaultContacts = [ defaultContact1, defaultContact2, defaultContact3 ];

    const [contacts, setContacts] = useState(defaultContacts);
    const [editedContact, setEditedContact] = useState(null);

    useEffect(() => {
        console.log('ContactsList State has been modified.')
        
        return () => {
            console.log('ContactsList Component is going to unmount...')
        };
    }, [contacts]);

    function removeContact(contact) {
        console.log(`Contact ${contact.name} is going to be removed.`);	
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function disconnectContact(contact) {
        console.log(`Contact ${contact.name} is going to be disconnected.`);	
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function addContact(contact, edit = false) {
        console.log(`Contact ${contact.name} is going to be added.`);	
        const tempContacts = [...contacts];
        if (edit) {
            const index = tempContacts.indexOf(contact);
            tempContacts[index] = contact;
            setEditedContact(null);
        } else {
            tempContacts.push(contact);
        }
        setContacts(tempContacts);
    }

    function editContactFormSet(contact) {
        console.log(`Contact ${contact.name} is going to be edited.`);
        setEditedContact(contact);
    }


    return (
        <div>
            <div className='card'>
                <div className='card-header p-3'>
                    <h3>Lista de contactos</h3>
                </div>                
                <div className='card-body p-3' data-mdb-perfect-scrollbar='true' style={ { position: 'relative' } }>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map(
                                (contact, index) => (
                                    <ContactComponent 
                                    key={index} 
                                    contact={contact} 
                                    remove={removeContact}
                                    disconnect={disconnectContact}
                                    edit={editContactFormSet}
                                    ></ContactComponent>
                                )
                            ) }
                        </tbody>
                    </table>
                    <ContactForm add={addContact} editedContact={editedContact}></ContactForm>
                </div>
            </div>
        </div>
    );
};


export default ContactListComponent;
