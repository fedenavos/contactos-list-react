import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import '../../styles/contact.css';


const ContactComponent = ({ contact, remove, disconnect, edit }) => {

    useEffect(() => {
        console.log(`Contact ${contact.name} created.`)
        
        return () => {
            console.log(`Contact ${contact.name} is going to unmount...`)
        };
    }, [contact]);

    function contactConnectedToogle() {
        if (contact.connected) {
            return <i className='bi bi-broadcast contact-action' onClick={() => disconnect(contact)} style={{ color: 'green' }}></i>;
        } else {
            return <i className='bi bi-broadcast contact-action' onClick={() => disconnect(contact)} style={{ color: 'grey' }}></i>;
        }
    }

    return (
        <tr>
            <th>
                { contact.name }
            </th>
            <td className='align-middle'>
                { contact.email }
            </td>
            <td className='align-middle'>
                { contact.connected ? 'Conectado' : 'Desconectado' }
            </td>
            <td className='align-middle'>
                { contactConnectedToogle() }
                <i className='bi bi-trash contact-action' onClick={() => remove(contact)} style={{color: 'red'}}></i>
                <i className="bi bi-pencil-square contact-action" onClick={() => edit(contact)}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired,
    disconnect: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
};


export default ContactComponent;