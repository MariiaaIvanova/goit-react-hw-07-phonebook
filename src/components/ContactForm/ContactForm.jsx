import { useState } from 'react';
import { Form, InputBlock, InputLabel, Input, Button } from './ContactForm.styled';
import { selectContacts } from '../redux/selectors';
import { addContact } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

   const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

const handleSubmit = event => {
    event.preventDefault();
     const contact = {
      name: name,
      number: number,
    };
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
    : dispatch(addContact(contact));
  
    reset();
  };
  
const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <Form onSubmit={handleSubmit}>
        <InputBlock>
          <InputLabel>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
          </InputLabel>

          <InputLabel>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleNumberChange}
              placeholder="+0-00-00-00"
            />
          </InputLabel>
        </InputBlock>

        <Button type="submit">Add contact</Button>
      </Form>
    );
}
