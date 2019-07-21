import React, { useState } from 'react';
import { Input } from 'semantic-ui-react'
import styled from 'styled-components';
import { fetchAll } from '../../../services/vendersService';

const SearchWrapper = styled.div`
  width: 100%:
  max-width: 500px;
  text-align: center;
`;

const Search = ({ setItems, setLoading, loading }) => {

  const changeHandler = event => {
    const { key, target } = event;

    if(key === 'Enter') {
      setLoading(true);
      fetchAll(target.value)
        .then(results => {
          const { FACEBOOK, EBAY, VARAGESALE, OFFERUP } = results;

          setItems({error: false, data: [...FACEBOOK, ...EBAY, ...VARAGESALE, ...OFFERUP].sort((a,b) => a.price - b.price) });
          setLoading(false);
        })
        .catch(err => {
          setItems({ error: true, data: [] });
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }

  return (
    <SearchWrapper>
      <Input
        icon='search'
        iconPosition='left'
        placeholder='Item'
        onKeyPress={changeHandler}
        loading={loading}
        disabled={loading}
      />      
    </SearchWrapper>
  );
};

export default Search;

