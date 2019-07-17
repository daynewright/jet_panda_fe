import React from 'react';
import { Input } from 'semantic-ui-react'
import styled from 'styled-components';

const SearchWrapper = styled.div`
  width: 100%:
  max-width: 500px;
  text-align: center;
`;

const Search = props => (
  <SearchWrapper>
    <Input
      action={{ color: 'blue', content: 'Search' }}
      icon='search'
      iconPosition='left'
      placeholder='Item'
    />
  </SearchWrapper>
);

export default Search;

