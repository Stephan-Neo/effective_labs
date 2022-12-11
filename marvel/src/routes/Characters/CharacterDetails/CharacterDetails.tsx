import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Details from '../../../components/Details/Details';
import { ApiLink } from '../../../types/apiLink';
import { getCard } from '../../../api/Card';
import cardsStore from '../../../stores/CardsStore';

function CharacterDetails(): ReactElement {
  const { id } = useParams();
  useEffect(() => {
    getCard(ApiLink.characters, Number(id))
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

export default observer(CharacterDetails);
