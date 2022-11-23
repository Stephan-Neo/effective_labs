import React, { ReactElement } from 'react';
import styled from 'styled-components';

function Main(): ReactElement {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 50px;
    padding: 30px;
    font-weight: 800;
  `;

  return (
    <Wrapper>
      Website about the heroes of the comic book and the series from Marvel
    </Wrapper>
  );
}

export default Main;
