import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import appStore from '../../stores/AppStore';
import { Card } from '../../types/card';
import cardsStore from '../../stores/CardsStore';

function Details(ob: Card): ReactElement {
  const { t } = useTranslation();
  const {
    id,
    name,
    description,
    thumbnail,
    title,
    series,
    comics,
    characters
  } = ob;

  const onLike = () => {
    cardsStore.setLikeCard(ob);
    appStore.setLikes(id);
  };

  const Image = styled.div`
    width: 100%;
    height: 600px;
    background: url(${`${thumbnail.path}.${thumbnail.extension}`}) 5% / cover
      no-repeat;
  `;

  return (
    <Wrapepr>
      <Image>
        <Like likeId={id} likes={appStore.likes} onClick={onLike} />
      </Image>
      <Container>
        <MainPart>
          <TitleMain>{name || title}</TitleMain>
          <Description isDark={appStore.isDark}>{description}</Description>
        </MainPart>
        <LinkWrapper isPage={!characters}>
          <Title>{t('comics')}</Title>
          <LinkContainer>
            {comics?.items?.map((item) => (
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              <CLink to={`/comics/${item.resourceURI.split('/').slice(-1)}`}>
                {item.name}
              </CLink>
            ))}
          </LinkContainer>
        </LinkWrapper>
        <LinkWrapper isPage={!characters}>
          <Title>{t('series')}</Title>
          <LinkContainer>
            {series?.items?.map((item) => (
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              <CLink to={`/series/${item.resourceURI.split('/').slice(-1)}`}>
                {item.name}
              </CLink>
            ))}
          </LinkContainer>
        </LinkWrapper>

        <LinkWrapper isPage={!comics}>
          <Title>{t('characters')}</Title>
          <LinkContainer>
            {characters?.items?.map((item) => (
              <CLink
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                to={`/characters/${item.resourceURI.split('/').slice(-1)}`}
              >
                {item.name}
              </CLink>
            ))}
          </LinkContainer>
        </LinkWrapper>
        <LinkWrapper isPage={!comics}>
          <Title>{t('series')}</Title>
          <LinkContainer>
            {series?.items?.map((item) => (
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              <CLink to={`/series/${item.resourceURI.split('/').slice(-1)}`}>
                {item.name}
              </CLink>
            ))}
          </LinkContainer>
        </LinkWrapper>

        <LinkWrapper isPage={!series}>
          <Title>{t('characters')}</Title>
          <LinkContainer>
            {characters?.items?.map((item) => (
              <CLink
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                to={`/characters/${item.resourceURI.split('/').slice(-1)}`}
              >
                {item.name}
              </CLink>
            ))}
          </LinkContainer>
        </LinkWrapper>
        <LinkWrapper isPage={!series}>
          <Title>{t('comics')}</Title>
          <LinkContainer>
            {comics?.items?.map((item) => (
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              <CLink to={`/comics/${item.resourceURI.split('/').slice(-1)}`}>
                {item.name}
              </CLink>
            ))}
          </LinkContainer>
        </LinkWrapper>
      </Container>
    </Wrapepr>
  );
}

const Wrapepr = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleMain = styled.div`
  font-size: 40px;
  color: red;
  font-weight: 800;
`;

const Title = styled.div`
  font-size: 30px;
  color: red;
  font-weight: 800;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
`;

const MainPart = styled.div`
  width: 50%;
  margin-right: 30px;
`;

const Description = styled.div<{ isDark: boolean }>`
  margin-top: 20px;
  font-size: 25px;
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};
  line-height: 40px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 30px;
`;

const LinkWrapper = styled.div<{ isPage: boolean }>`
  display: ${({ isPage }) => (isPage ? 'block' : 'none')};
`;

const CLink = styled(Link)`
  color: #0984e3;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Like = styled.div<{ likeId: number; likes: number[] }>`
  z-index: 100;
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  margin: 20px 20px 0 0;
  :hover {
    cursor: pointer;
  }
  background: ${({ likeId, likes }) => {
    if (likes.includes(likeId)) {
      return 'url(/like.ico) 50% / cover no-repeat';
    }
    return 'url(/heart-default.ico) 50% / cover no-repeat';
  }};
`;

export default observer(Details);
