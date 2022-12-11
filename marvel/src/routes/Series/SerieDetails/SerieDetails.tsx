import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cardsStore from '../../../stores/CardsStore';
import { ApiLink } from '../../../types/apiLink';
import Details from '../../../components/Details/Details';
import { getCard } from '../../../api/Card';

function SerieDetails(): ReactElement {
  const { id } = useParams();
  useEffect(() => {
    getCard(ApiLink.series, Number(id))
      .then((res) => {
        cardsStore.setCard(res);
      })
      .catch((e) => {
        console.log(e);
      });
    document.documentElement.scroll(0, 0);
  }, []);

  return (
    <>
      {cardsStore.card.map((data) => (
        <Details {...data} />
      ))}
    </>
  );
}

export default observer(SerieDetails);
