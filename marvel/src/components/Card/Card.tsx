import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import appStore from '../../stores/AppStore';
import { Card } from '../../types/card';
import cardsStore from '../../stores/CardsStore';

function CardLayout(data: Card): ReactElement {
  const [linkDetails, setLinkDetails] = useState('');
  const {
    name,
    description,
    id,
    thumbnail,
    title,
    series,
    comics,
    characters
  } = data;

  useEffect(() => {
    if (!characters) {
      setLinkDetails('../characters');
    }

    if (!comics) {
      setLinkDetails('../comics');
    }

    if (!series) {
      setLinkDetails('../series');
    }
  }, []);

  const onLike = () => {
    cardsStore.setLikeCard(data);
    appStore.setLikes(id);
  };

  return (
    <Wrapper>
      <Like onClick={onLike} likeId={id} likes={appStore.likes} />
      <LinkDetails
        to={`${linkDetails}/${id}`}
        key={id}
        isDark={appStore.isDark}
      >
        <Image path={thumbnail.path} extension={thumbnail.extension} />
        <Info>
          <Title>{name || title}</Title>
          <Description isDark={appStore.isDark}>{description}</Description>
        </Info>
      </LinkDetails>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LinkDetails = styled(Link)<{ isDark: boolean }>`
  background-color: ${({ isDark }) => (isDark ? '#21262f' : 'white')};
  display: flex;
  width: 100%;
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

const Image = styled.div<{ path: string; extension: string }>`
  height: 200px;
  background: ${({ path, extension }) =>
      `url(${path}.${extension}) 5% / cover no-repeat`}
    no-repeat;
  display: flex;
  flex-direction: column;
`;

const Like = styled.div<{ likeId: number; likes: number[] }>`
  z-index: 100;
  width: 50px;
  height: 50px;
  position: absolute;
  margin: 10px 10px 0 0;
  :hover {
    cursor: pointer;
  }
  background: ${({ likeId, likes }) => {
    if (likes.includes(likeId)) {
      return 'url(./like.ico) 50% / cover no-repeat';
    }
    return 'url(./heart-default.ico) 50% / cover no-repeat';
  }};
`;

export default observer(CardLayout);
