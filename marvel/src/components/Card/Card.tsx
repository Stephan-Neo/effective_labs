import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import appStore from '../../stores/AppStore';
import { Card } from '../../types/card';

function CardLayout(data: Card): ReactElement {
  const { name, description, id, thumbnail, title } = data;

  const Image = styled.div`
    height: 200px;
    background: url(${`${thumbnail.path}.${thumbnail.extension}`}) 5% / cover
      no-repeat;
    display: flex;
    flex-direction: column;
  `;

  return (
    <LinkDetails to={`${id}`} key={id} isDark={appStore.isDark}>
      <Image />
      <Info>
        <Title>{name || title}</Title>
        <Description isDark={appStore.isDark}>{description}</Description>
      </Info>
    </LinkDetails>
  );
}

const LinkDetails = styled(Link)<{ isDark: boolean }>`
  background-color: ${({ isDark }) => (isDark ? '#21262f' : 'white')};
  display: flex;
  height: 400px;
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

const Info = styled.div`
  padding: 20px;
  overflow: scroll;
  height: 200px;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const Description = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};
`;

export default observer(CardLayout);
