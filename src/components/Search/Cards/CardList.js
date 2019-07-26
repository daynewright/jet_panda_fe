import React from 'react';
import styled from 'styled-components';
import { Card, Message } from 'semantic-ui-react';
import SingleCard from './SingleCard';

const Wrapper = styled.div`
  margin-top: 25px;
`;

const CardGroupWrapper = styled(Card.Group)`
  display: flex;
  justify-content: space-between;
`;

const StyledMessage = styled(Message)`
  text-align: center;
`;

const CardList = ({ items }) => {
  const { data, error } = items;

  return (
    <Wrapper>
      <CardGroupWrapper>
        {(data.length > 0) && data.map((c, i) => <SingleCard key={i} card={c} />)}
      </CardGroupWrapper>
      {error ?
        <StyledMessage error>
          <Message.Header><span role="img" aria-label="jet-panda">🤔</span> Something went wrong with your search.</Message.Header>
          <p>Sorry! I wasn't able to find anything with your search.  Sometimes things don't work... Want to try again?</p>
        </StyledMessage>
      :
        <StyledMessage info>
          <Message.Header><span role="img" aria-label="jet-panda">👆</span> Search for something above <span role="img" aria-label="jet-panda">👆</span></Message.Header>
          <p>Use Jet Panda to search Facebook Marketplace, Ebay, VarageSale, OfferUp and more in one simple search!</p>
        </StyledMessage>
      }
    </Wrapper>
  );
};

export default CardList;
