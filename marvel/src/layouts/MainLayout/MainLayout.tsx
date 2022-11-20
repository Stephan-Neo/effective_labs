import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

function MainLayout(): ReactElement {
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
  `;

  const HeaderLink = styled(NavLink)`
    font-size: 25px;
    margin-right: 25px;
    text-transform: uppercase;
    font-weight: 800;
  `;

  const LogoHeader = styled.img`
    width: 150px;
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
          <LogoHeader src="/marvel_logo.svg" alt="" />
        </div>
        <div>
          <HeaderLink to="characters">Characters</HeaderLink>
          <HeaderLink to="comics">Comics</HeaderLink>
          <HeaderLink to="series">Series</HeaderLink>
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <LogoFooter src="/marvel_logo.svg" alt="" />
        <div>
          <p>Data provided by Marvel.</p>
          <p>© {new Date().getFullYear()} MARVEL</p>
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
