import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function Main(): ReactElement {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {t('mainText')}
      <Image src="./imageCards/Characters/SpiderMan.webp" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  padding: 30px;
  font-weight: 800;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-top: 50px;
`;
export default Main;
