import React, { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import appStore from '../../stores/AppStore';
import { ApiLink } from '../../types/apiLink';
import CardLayout from '../../components/Card';

function Series(): ReactElement {
  useEffect(() => {
    appStore?.getCards(ApiLink.series);
  }, []);
  return (
    <>
      {appStore.cards.map((data) => (
        <CardLayout {...data} />
      ))}
    </>
  );
}

export default observer(Series);
