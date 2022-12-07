import React, { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CardLayout from '../../components/Card';
import appStore from '../../stores/AppStore';
import { ApiLink } from '../../types/apiLink';

function Comics(): ReactElement {
  useEffect(() => {
    appStore?.getCards(ApiLink.comics);
  }, []);
  return (
    <>
      {appStore.cards.map((data) => (
        <CardLayout {...data} />
      ))}
    </>
  );
}

export default observer(Comics);
