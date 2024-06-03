import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/actions/searchActions';

const AutocompleteInput = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      dispatch(fetchSearch(e.target.value));
    }
  };

  return (
    <Input
      placeholder="Search places"
      value={query}
      onChange={handleChange}
    />
  );
};

export default AutocompleteInput;