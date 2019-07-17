import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  max-height:275px;
  max-width:275px;
  height:auto;
  width:auto;
`;


const SingleCard = props => {
  const { image, description, link, price, shipping, source, title } = props.card;

  const goToPage = () => {
    window.open(link, '_blank')
  };

  const imageSrc = () => {
    if(image !== 'https://ir.ebaystatic.com/cr/v/c1/s_1x2.gif') {
      return image;
    }
    return 'https://i.ebayimg.com/thumbs/images/m/msWxl1l8LReUD0yf5qbKsDQ/s-l225.jpg';
  };

  const color = () => {
    switch(source) {
      case 'ebay':
        return 'red';
      case 'facebook':
        return 'blue';
      case 'offerUp':
        return 'green';
      case 'VarageSale':
        return 'pink';
      default:
        return 'grey';
    }
  };

  return (
    <Card onClick={goToPage}>
      <Card.Content>
        <Label as='a' color={color()} ribbon>
            {source}
        </Label>
        <StyledImage floated='right' size='medium' src={imageSrc()} />
        <Card.Header>{title}</Card.Header>
        <Label tag as='a'>{`$${price}`}</Label>
        <Card.Meta>{shipping}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  );
};

export default SingleCard;
