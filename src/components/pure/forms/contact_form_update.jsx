import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const connected = false;
        const newContact = new Contact(name, email, connected);
        add(newContact);
        nameRef.current.value = '';
        emailRef.current.value = '';
    }


    return (
        <form className='mt-5 mb-5' onSubmit={addContact}>
            <h3>Agregar nuevo contacto</h3>
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
            <button type='submit' className='btn btn-primary btn-block'>Agregar</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired,

};


export default ContactForm;
