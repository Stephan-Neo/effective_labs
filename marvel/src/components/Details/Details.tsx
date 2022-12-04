import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Side } from '../../types/side';
import AppStore from '../../stores/AppStore';

function Details(ob: Side): ReactElement {
  const { t } = useTranslation();
  const { title, urlImage, description } = ob;

  const Wrapepr = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `;

  const Image = styled.div`
    width: 100%;
    height: 60%;
    background: url(${`.${urlImage}`}) 100% 5% / cover no-repeat;
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
  `;

  const Description = styled.div<{ isDark: boolean }>`
    margin-top: 20px;
    font-size: 25px;
    color: ${({ isDark }) => (isDark ? 'white' : 'black')};
  `;

  const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `;

  const CLink = styled(Link)`
    color: #0984e3;
    margin-bottom: 15px;
    font-size: 20px;
  `;
  return (
    <Wrapepr>
      <Image />
      <Container>
        <MainPart>
          <TitleMain>{title}</TitleMain>
          <Description isDark={AppStore.isDark}>{description}</Description>
        </MainPart>
        <div>
          <Title>{t('comics')}</Title>
          <LinkContainer>
            <CLink to="/comics/1">Star Wars</CLink>
            <CLink to="/comics/2">Fantastic Four</CLink>
            <CLink to="/comics/3">The Amazing Spider-Man</CLink>
            <CLink to="/comics/4">X-Men</CLink>
          </LinkContainer>
        </div>
        <div>
          <Title>{t('series')}</Title>
          <LinkContainer>
            <CLink to="/series/1">Black Panther: Wakanda Forever</CLink>
            <CLink to="/series/2">Spider-Man: No Way Home</CLink>
            <CLink to="/series/3">
              Doctor Strange in the Multiverse of Madness
            </CLink>
            <CLink to="/series/4">Thor: Love and Thunder</CLink>
          </LinkContainer>
        </div>
      </Container>
    </Wrapepr>
  );
}

export default observer(Details);
