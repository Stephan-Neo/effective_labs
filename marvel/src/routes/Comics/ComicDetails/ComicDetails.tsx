import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import appStore from '../../../stores/AppStore';
import { Card } from '../../../types/card';

function ComicDetails(): ReactElement {
  const { id } = useParams();
  useEffect(() => {
    appStore?.getCard('v1/public/characters', Number(id));
  }, []);

  // return <Details {...comic} />;
  return <></>;
}

export default observer(ComicDetails);
