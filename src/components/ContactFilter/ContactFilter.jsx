import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../redux/selectors';
import { setFilter } from '../redux/filterSlice';
import { FilterList, Input, Text } from './ContactFilter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <FilterList>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Name"
        disabled={useSelector(selectContacts).length === 0}
      />
    </FilterList>
  );
};

export default Filter;
