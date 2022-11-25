import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Side } from '../../types/side';
import AppStore from '../../stores/AppStore';

function Card(character: Side): ReactElement {
  const { title, description, urlImage, id } = character;

  const LinkDetails = styled(Link)<{ isDark: boolean }>`
    background-color: ${({ isDark }) => (isDark ? '#21262f' : 'white')};
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
    color: red;
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

  const Description = styled.div<{ isDark: boolean }>`
    display: flex;
    flex-direction: column;
    color: ${({ isDark }) => (isDark ? 'white' : 'black')};
  `;
  return (
    <LinkDetails to={id} key={id} isDark={AppStore.isDark}>
      <Image />
      <Info>
        <Title>{title}</Title>
        <Description isDark={AppStore.isDark}>{description}</Description>
      </Info>
    </LinkDetails>
  );
}

export default observer(Card);
