import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../redux/operations';
import { Item, ItemList, Button } from './ContactItem.styled';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const onDelete  = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <ItemList>
        <p>
          {name} : {number}
        </p>
      </ItemList>
      <Button type="button" onClick={onDelete}>
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
