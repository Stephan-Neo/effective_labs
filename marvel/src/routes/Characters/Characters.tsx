import React, { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CardLayout from '../../components/Card';
import appStore from '../../stores/AppStore';
import { ApiLink } from '../../types/apiLink';

function Characters(): ReactElement {
  useEffect(() => {
    appStore?.getCards(ApiLink.characters, 0);
  }, []);
  return (
    <>
      {appStore.cards.map((data) => (
        <CardLayout {...data} />
      ))}
    </>
  );
}

export default observer(Characters);
