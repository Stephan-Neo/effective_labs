import React, { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cardsStore from '../../stores/CardsStore';
import { ApiLink } from '../../types/apiLink';
import CardLayout from '../../components/Card';
import { getCards } from '../../api/Card';

function Series(): ReactElement {
  const [offset, setOffeset] = useState(0);

  useEffect(() => {
    cardsStore.clearCards();
  }, []);

  useEffect(() => {
    getCards(ApiLink.series, offset)
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

export default observer(Series);
