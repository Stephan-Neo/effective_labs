import React, { ReactElement } from 'react';
import Card from '../../components/Card';
import ComicsStore from '../../stores/ComicsStore';

function Comics(): ReactElement {
  return (
    <>
      {ComicsStore.comics.map((comics) => (
        <Card {...comics} />
      ))}
    </>
  );
}

export default Comics;
