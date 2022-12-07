import React, { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CardLayout from '../../components/Card';
import appStore from '../../stores/AppStore';

function Characters(): ReactElement {
  useEffect(() => {
    appStore?.getCards('v1/public/characters');
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
