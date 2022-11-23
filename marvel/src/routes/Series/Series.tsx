import React, { ReactElement } from 'react';
import Card from '../../components/Card';
import SeriesStore from '../../stores/SeriesStore';

function Series(): ReactElement {
  return (
    <>
      {SeriesStore.series.map((series) => (
        <Card {...series} />
      ))}
    </>
  );
}

export default Series;
