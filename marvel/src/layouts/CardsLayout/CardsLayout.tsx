import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

function CardsLayout(): ReactElement {
  const Wrapper = styled.div`
    height: 85%;
    padding: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `;

  const Search = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px 20px 0 30px;
    justify-content: space-between;
  `;

  const Input = styled.input`
    width: 100%;
    -webkit-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    padding: 10px;
    margin-right: 20px;
    font-size: 20px;
    ::placeholder {
      color: gray;
    }
  `;

  const Button = styled.button`
    width: 200px;
    text-align: center;
    padding: 15px;
    font-size: 20px;
    font-weight: 700;
    background: red;
    -webkit-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
  `;
  return (
    <>
      <Search>
        <Input />
        <Button placeholder="">
          <p>Search</p>
        </Button>
      </Search>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default CardsLayout;
