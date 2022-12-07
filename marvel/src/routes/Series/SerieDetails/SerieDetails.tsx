import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import appStore from '../../../stores/AppStore';
import { ApiLink } from '../../../types/apiLink';
import Details from '../../../components/Details/Details';

function SerieDetails(): ReactElement {
  const { id } = useParams();
  useEffect(() => {
    appStore?.getCard(ApiLink.series, Number(id));
  }, []);

  return (
    <>
      {appStore.card.map((data) => (
        <Details {...data} />
      ))}
    </>
  );
}

export default observer(SerieDetails);
