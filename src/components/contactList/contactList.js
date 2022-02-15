import React from 'react';
import { Elements, Buttons } from './contactList.styled';
class ContactList extends React.Component {
    state = {};

    render() {
        return this.props.contList.map(cont => {
            return (
                <Elements key={cont.id}>
                    {cont.name}:{cont.number}
                    <button onClick={() => this.props.delete(cont.name)}>
                        Delete
                    </button>
                </Elements>
            );
        });
    }
}

export default ContactList;
