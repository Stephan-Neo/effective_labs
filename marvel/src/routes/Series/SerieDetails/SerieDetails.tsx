import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Details from '../../../components/Details/Details';
import { Side } from '../../../types/side';
import SeriesStore from '../../../stores/SeriesStore';

function SerieDetails(): ReactElement {
  const { id } = useParams();

  const serie: Side = SeriesStore.getSerie(id || '')[0];

  return <></>;
}

export default observer(SerieDetails);
