import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { setLanguage } from '../../localization';

function MainLayout(): ReactElement {
  const { t } = useTranslation();
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const Header = styled.div`
    padding: 20px 30px;
    background: rgb(255, 0, 0);
    font-size: 30px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const Content = styled.div`
    height: 100%;
    width: 100%;
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
  \` ;
  `;

  const Navigate = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const LogoFooter = styled.img`
    width: 200px;
  `;

  const Footer = styled.div`
    background: rgb(136, 136, 136);
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
  return (
    <Wrapper>
      <Header>
        <div>
          <Link to="/">
            <LogoHeader src="/marvel_logo.svg" alt="" />
          </Link>
        </div>
        <Navigate>
          <HeaderLink to="characters">{t('characters')}</HeaderLink>
          <HeaderLink to="comics">{t('comics')}</HeaderLink>
          <HeaderLink to="series">{t('series')}</HeaderLink>
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
        </Navigate>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <LogoFooter src="/marvel_logo.svg" alt="" />
        <div>
          <p>{t('byMarvel')}</p>
          <p>
            © {new Date().getFullYear()} {t('marvel')}
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

export default MainLayout;
