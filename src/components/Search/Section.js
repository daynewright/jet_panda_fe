import React from 'react';
import Search from './Form/Search';
import Heading from './Heading';
import CardList from './Cards/CardList';


const Section = ({ type }) => {
  switch(type) {
    case 'search':
      return <Search />;
    case 'heading':
      return <Heading />;
    case 'cards':
      return <CardList />;
    default:
      return <div></div>;
  }
};

export default Section;
