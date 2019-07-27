import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Segment,
  Divider,
  Dimmer,
  Loader,
  Image,
  Card
} from "semantic-ui-react";
import Search from "../Search/Form/Search";
import Heading from "../Search/Heading";
import CardList from "../Search/Cards/CardList";
import { useInterval } from "../../utils/hooks";

const StyledContainer = styled(Container)`
  margin-top: 25px;
`;

const StyledCardGroup = styled(Card.Group)`
  dispay: flex;
  justify-content: space-around;
`;

const MainWrapper = () => {
  const [items, setItems] = useState({ error: false, data: [] });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    iteration: 0,
    text: "Starting up...🐌"
  });

  useInterval(
    () => {
      const messages = [
        "Searching Ebay & Facebook... 🤓",
        "Searching OfferUp & VarageSale...🧐",
        "This is a lot of work! It can take a bit! 😅",
        "Still crunching the numbers... 🖥",
        "I think I might be close!! 😃"
      ];

      const { iteration } = message;
      if (loading) {
        setMessage({ iteration: iteration + 1, text: messages[iteration] });
      } else {
        setMessage({ iteration: 0, text: "Starting another search..." });
      }
    },
    7000,
    loading
  );

  return (
    <StyledContainer>
      <Heading />
      <Segment>
        <Search setItems={setItems} setLoading={setLoading} loading={loading} />
        <Divider />
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="medium">
                <h3>{message.text}</h3>
              </Loader>
            </Dimmer>
            <StyledCardGroup>
              <Card key="0">
                <Card.Content>
                  <Image src="https://react.semantic-ui.com/images/wireframe/white-image.png" />
                </Card.Content>
              </Card>
              <Card key="1">
                <Card.Content>
                  <Image src="https://react.semantic-ui.com/images/wireframe/white-image.png" />
                </Card.Content>
              </Card>
              <Card key="2">
                <Card.Content>
                  <Image src="https://react.semantic-ui.com/images/wireframe/white-image.png" />
                </Card.Content>
              </Card>
            </StyledCardGroup>
          </Segment>
        ) : (
          <CardList items={items} />
        )}
      </Segment>
    </StyledContainer>
  );
};

export default MainWrapper;
