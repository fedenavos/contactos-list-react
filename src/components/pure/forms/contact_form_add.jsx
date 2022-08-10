import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({ add, editedContact }) => {

    const nameRef = useRef('');
    const emailRef = useRef('');

    useEffect(() => {
        console.log('ContactsList State has been modified.')
        if (editedContact) {
            nameRef.current.value = editedContact.name;
            emailRef.current.value = editedContact.email;
        }
    }, [editedContact]);

    function addContact(e) {
        e.preventDefault();
        if(editedContact) {
            editedContact.name = nameRef.current.value;
            editedContact.email = emailRef.current.value;
            add(editedContact, true);
        } else {
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const connected = false;
            const newContact = new Contact(name, email, connected);
            add(newContact);
        }
        nameRef.current.value = '';
        emailRef.current.value = '';
    }


    return (
        <form className='mt-5 mb-5' onSubmit={(e) => addContact(e)}>
            <h3>{editedContact ? 'Modificar' : 'Agregar nuevo'} contacto</h3>
            <div>
                <table className='table table-striped'>

                    <thead>
                        <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>
                                <input ref={nameRef} type='text' className='form-control' placeholder='Nombre' required autoFocus/>
                            </th>   
                            <td>
                                <input ref={emailRef} type='email' className='form-control' placeholder='Email' required/>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>  
            <button type='submit' className='btn btn-primary btn-block'>{editedContact ? 'Modificar' : 'Agregar'}</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
    editedContact: PropTypes.instanceOf(Contact),
};


export default ContactForm;
