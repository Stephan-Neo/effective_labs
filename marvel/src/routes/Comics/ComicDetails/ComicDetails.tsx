import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Details from '../../../components/Details/Details';
import { Side } from '../../../types/side';
import ComicsStore from '../../../stores/ComicsStore';

function ComicDetails(): ReactElement {
  const { id } = useParams();

  const comic: Side = ComicsStore.getComic(id || '')[0];

  return <Details {...comic} />;
}

export default observer(ComicDetails);
