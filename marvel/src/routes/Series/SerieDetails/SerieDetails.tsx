import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

function SerieDetails(): ReactElement {
  const { id } = useParams();

  return <></>;
}

export default observer(SerieDetails);
