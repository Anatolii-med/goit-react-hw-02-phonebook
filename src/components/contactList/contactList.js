import React from 'react';
import { Elements, Buttons } from './contactList.styled';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
    key: PropTypes.string,
    onClick: PropTypes.func,
};
