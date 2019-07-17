import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, Dimmer, Loader } from 'semantic-ui-react';
import SingleCard from './SingleCard';
import { fetchAll } from '../../../services/vendersService';
import { API_ROOT_URL } from '../../../utils/constants';

const Wrapper = styled.div`
  margin-top: 25px;
`;

const CardGroupWrapper = styled(Card.Group)`
  display: flex;
  justify-content: space-between;
`;

const CardList = props => {
  const [items, setItems ] = useState([]);

  useEffect(() => {

    fetch(`${API_ROOT_URL}/all?search=2ds`)
    .then(res => res.json())
    .then(
      (result) => {
        const { FACEBOOK, EBAY, VARAGESALE, OFFERUP } = result;
        setItems([...FACEBOOK, ...EBAY, ...VARAGESALE, ...OFFERUP].sort((a,b) => a.price - b.price));
      },
      (error) => {
        return error;
      }
    )
  }, []);

  return (
    <Wrapper>
      <CardGroupWrapper>
        {items.length === 0 ?
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>
        :
          items.map(c => <SingleCard KEY={c.image} card={c} />)
        }
      </CardGroupWrapper>
    </Wrapper>
  );
};

export default CardList;
