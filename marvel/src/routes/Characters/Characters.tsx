import React, { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CardLayout from '../../components/Card';
import cardsStore from '../../stores/CardsStore';
import { getCards } from '../../api/Card';
import { ApiLink } from '../../types/apiLink';

function Characters(): ReactElement {
  const [offset, setOffeset] = useState(0);

  useEffect(() => {
    cardsStore.clearCards();
  }, []);

  useEffect(() => {
    getCards(ApiLink.characters, offset)
      .then((res) => {
        cardsStore.setCards(res);
      })
      .catch((e) => {
        console.log(e);
      });

    const handlerScroll = () => {
      const { scrollHeight } = document.documentElement;
      const currentHeight =
        document.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffeset(offset + 10);
      }
    };
    window.addEventListener('scroll', handlerScroll);
    return () => window.removeEventListener('scroll', handlerScroll);
  }, [offset]);
  return (
    <>
      {cardsStore.cards.map((card) => (
        <CardLayout {...card} />
      ))}
    </>
  );
}

export default observer(Characters);
