import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  text-align: center;

  @media only screen and (min-width: 600px) {
    font-size: 5rem;
  }
`;

const Heading = () => (
  <div>
    <StyledHeader>
      JET PANDA{" "}
      <span role="img" aria-label="jet-panda">
        ✈️ 🐼
      </span>
    </StyledHeader>
  </div>
);

export default Heading;
