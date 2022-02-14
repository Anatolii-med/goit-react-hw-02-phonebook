import React from 'react';
import Section from './section/section';

class App extends React.Component {
    state = {
        contacts: [],
        name: '',
    };

    render() {
        return (
            <>
                <Section title="Phonebook">
                    <form>
                        <label htmlFor="name">
                            <input
                                type="text"
                                name="name"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required
                            />
                        </label>
                        <button type="submit">Add contact</button>
                    </form>
                </Section>
                <Section title="Contacts">
                    <ul>
                        <li></li>
                    </ul>
                </Section>
            </>
        );
    }
}

export default App;
