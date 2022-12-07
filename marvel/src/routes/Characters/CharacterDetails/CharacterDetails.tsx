import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Details from '../../../components/Details/Details';
import appStore from '../../../stores/AppStore';

function CharacterDetails(): ReactElement {
  const { id } = useParams();
  useEffect(() => {
    appStore?.getCard('v1/public/characters', Number(id));
  }, []);

  return (
    <>
      {appStore.card.map((data) => (
        <Details {...data} />
      ))}
    </>
  );
}

export default observer(CharacterDetails);
