import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { selectFilteredContacts } from '../redux/selectors';
import { deleteContacts } from '../redux/operations';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
export default ContactList;