import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import CardLayout from '../../components/Card';
import cardsStore from '../../stores/CardsStore';
import Error from '../../components/Error';

function Favorites(): ReactElement {
  return (
    <>
      {cardsStore.likesCard.length !== 0 ? (
        <Wrapper>
          {cardsStore.likesCard.map((card) => (
            <CardLayout {...card} />
          ))}
        </Wrapper>
      ) : (
        <Error text="Add cards to favorites" />
      )}
    </>
  );
}

const Wrapper = styled.div`
  height: 85%;
  padding: 20px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export default observer(Favorites);
