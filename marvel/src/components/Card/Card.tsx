import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Side } from '../../types/side';

function Card(character: Side): ReactElement {
  const { title, description, urlImage, id } = character;

  const WrapperCard = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0 5px 8px 10px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0 5px 8px 10px rgba(34, 60, 80, 0.2);
    box-shadow: 0 5px 8px 10px rgba(34, 60, 80, 0.2);
  `;

  const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    margin-bottom: 10px;
    color: rgb(255, 0, 0);
    font-weight: 800;
  `;

  const Image = styled.div`
    height: 60%;
    background: url(${urlImage}) 100% 5% / cover no-repeat;
    display: flex;
    flex-direction: column;
  `;

  const Info = styled.div`
    padding: 20px;
  `;

  const Description = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <WrapperCard key={id}>
      <Image />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </WrapperCard>
  );
}

export default Card;
