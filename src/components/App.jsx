import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { Container, Title, TitleSpan, Wrapper } from './App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleSpan>Contacts</TitleSpan>
      {contacts.length > 0 ? (
        <ContactFilter />
      ) : (
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && (
        <ContactList />
      )}
    </Container>
  );
};

export default App;