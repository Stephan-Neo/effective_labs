import React, { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { setLanguage } from '../../localization';
import appStore from '../../stores/AppStore';
import cardsStore from '../../stores/CardsStore';

function MainLayout(): ReactElement {
  const { t } = useTranslation();

  useEffect(() => {
    appStore.uploadLikes(JSON.parse(localStorage.getItem('likes') || '[]'));
    cardsStore.uploadLikeCards(
      JSON.parse(localStorage.getItem('likeCards') || '[]')
    );
  }, []);
  return (
    <Wrapper isDark={appStore.isDark}>
      <Header isDark={appStore.isDark}>
        <div>
          <Link to="/">
            <LogoHeader src="/marvel_logo.svg" alt="" />
          </Link>
        </div>
        <Navigate>
          <HeaderLink to="characters">{t('characters')}</HeaderLink>
          <HeaderLink to="comics">{t('comics')}</HeaderLink>
          <HeaderLink to="series">{t('series')}</HeaderLink>
          <HeaderLink to="favorites">{t('favorites')}</HeaderLink>
          <ChangeLanguage>
            <ButtonLanguageRu
              type="button"
              onClick={() => setLanguage('ruRU')}
              isActive={localStorage.getItem('LOCALE') || ''}
            >
              RU
            </ButtonLanguageRu>
            <ButtonLanguageEu
              type="button"
              onClick={() => setLanguage('enUS')}
              isActive={localStorage.getItem('LOCALE') || ''}
            >
              EN
            </ButtonLanguageEu>
          </ChangeLanguage>
          <ChangeTheme
            isDark={appStore.isDark}
            onClick={() =>
              appStore.isDark
                ? appStore.setTheme(false)
                : appStore.setTheme(true)
            }
          />
        </Navigate>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer isDark={appStore.isDark}>
        <LogoFooter src="/marvel_logo.svg" alt="" />
        <div>
          <p>{t('byMarvel')}</p>
          <p>
            ?? {new Date().getFullYear()} {t('marvel')}
          </p>
          <a
            href="https://developer.marvel.com/"
            target="_blank"
            rel="noreferrer"
          >
            developer.marvel.com
          </a>
        </div>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isDark: boolean }>`
  width: 100%;
  min-height: 100%;
  background-color: ${({ isDark }) => (isDark ? '#303845' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div<{ isDark: boolean }>`
  padding: 20px 30px;
  background-color: ${({ isDark }) => (isDark ? '#303845' : 'red')};
  font-size: 30px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  min-height: 100ch;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderLink = styled(NavLink)`
  font-size: 25px;
  margin-right: 25px;
  text-transform: uppercase;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoHeader = styled.img`
  width: 150px;
`;

const ChangeLanguage = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonLanguageRu = styled.button<{ isActive: string }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: ${({ isActive }) => (isActive === 'ruRU' ? 'white' : 'black')};
  background: ${({ isActive }) => (isActive === 'ruRU' ? 'black' : 'white')};
`;

const ButtonLanguageEu = styled.button<{ isActive: string }>`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 10px;
  color: ${({ isActive }) => (isActive === 'enUS' ? 'white' : 'black')};
  background: ${({ isActive }) => (isActive === 'enUS' ? 'black' : 'white')};
`;

const Navigate = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChangeTheme = styled.div<{ isDark: boolean }>`
  display: flex;
  margin-left: 15px;
  flex-direction: row;
  width: 40px;
  height: 40px;
  background: url(${({ isDark }) =>
      isDark
        ? 'https://gtsk.fun/test/sun.ico'
        : 'https://gtsk.fun/test/moon.ico'})
    100% 5% / cover no-repeat;
  :hover {
    cursor: pointer;
  }
`;

const LogoFooter = styled.img`
  width: 200px;
`;

const Footer = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => (isDark ? '#303845' : 'red')};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  div {
    text-align: right;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
  }
`;

export default observer(MainLayout);
