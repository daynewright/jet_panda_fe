import React, { useState } from "react";
import { Modal, Button, Header, Icon, Checkbox } from "semantic-ui-react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  &&& {
    margin: 10px;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  &&& {
    margin-top: 5px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const OptionsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 30px;
`;

const FilterModal = props => {
  const [filterValues, setFilterValues] = useState({
    sortLowHigh: true,
    showFacebook: true,
    showOfferUp: true,
    showVarageSale: true,
    showEbay: true
  });

  return (
    <Modal
      closeIcon
      size="small"
      dimmer="blurring"
      trigger={
        <StyledButton disabled={props.loading} color="blue" size="medium">
          <Icon name="options" />
          Filter Results
        </StyledButton>
      }
    >
      <Modal.Header>
        <Header as="h2">
          Filter Results
          <Header.Subheader>Manage your results settings</Header.Subheader>
        </Header>
      </Modal.Header>
      <Modal.Content>
        <OptionsContainer>
          <OptionsGroup>
            <Header as="h3" icon="settings" content="Viewing Options" />
            <StyledCheckbox
              checked={filterValues.sortLowHigh}
              onClick={() =>
                setFilterValues({
                  ...filterValues,
                  sortLowHigh: !filterValues.sortLowHigh
                })
              }
              label="Sort lowest price to highest"
            />
          </OptionsGroup>
          <OptionsGroup>
            <Header as="h3" icon="settings" content="Result Options" />
            <StyledCheckbox
              checked={filterValues.showFacebook}
              onClick={() =>
                setFilterValues({
                  ...filterValues,
                  showFacebook: !filterValues.showFacebook
                })
              }
              label="Show Facebook results"
            />
            <StyledCheckbox
              checked={filterValues.showOfferUp}
              onClick={() =>
                setFilterValues({
                  ...filterValues,
                  showOfferUp: !filterValues.showOfferUp
                })
              }
              label="Show OfferUp results"
            />
            <StyledCheckbox
              checked={filterValues.showVarageSale}
              onClick={() =>
                setFilterValues({
                  ...filterValues,
                  showVarageSale: !filterValues.showVarageSale
                })
              }
              label="Show VarageSale results"
            />
            <StyledCheckbox
              checked={filterValues.showEbay}
              onClick={() =>
                setFilterValues({
                  ...filterValues,
                  showEbay: !filterValues.showEbay
                })
              }
              label="Show Ebay results"
            />
          </OptionsGroup>
        </OptionsContainer>
      </Modal.Content>
      <Modal.Actions>
        <Button
          primary
          onClick={e => console.warn(e.target)}
          labelPosition="right"
          icon="checkmark"
          content="Save"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default FilterModal;
