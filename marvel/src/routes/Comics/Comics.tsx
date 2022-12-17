import React, { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import CardLayout from '../../components/Card';
import cardsStore from '../../stores/CardsStore';
import { getCardsV } from '../../api/Card';
import { ApiLink } from '../../types/apiLink';
import Error from '../../components/Error';

function Comics(): ReactElement {
  const { t } = useTranslation();

  const [offset, setOffset] = useState(0);
  const [startSearch, setStartSearch] = useState(0);
  const [search, setSearch] = useState('');
  const [isRemoteCards, setIsRemoteCards] = useState(true);
  const [countCards, setCountCards] = useState(0);
  const [error, setError] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = debounce((data) => {
    setSearch(data);
    setOffset(0);
    cardsStore.clearCards();
    setStartSearch(startSearch + 1);
    setCountCards(0);
  }, 500);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    cardsStore.clearCards();
  }, []);

  useEffect(() => {
    setIsRemoteCards(true);
    setError('');
    if (search) {
      getCardsV(ApiLink.comics, offset, search)
        .then((res) => {
          cardsStore.setCards(res);
          if (!res.length && countCards === 0) {
            setIsRemoteCards(false);
          }
          if (res.length) {
            setCountCards(countCards + 10);
          }
        })
        .catch((e: RangeError) => {
          setError(e.message);
        });
    } else {
      getCardsV(ApiLink.comics, offset)
        .then((res) => {
          cardsStore.setCards(res);
          if (!res.length && countCards === 0) {
            setIsRemoteCards(false);
          }
          if (res.length) {
            setCountCards(countCards + 10);
          }
        })
        .catch((e: RangeError) => {
          setError(e.message);
        });
    }

    const handlerScroll = () => {
      const { scrollHeight } = document.documentElement;
      const currentHeight =
        document.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + 10);
      }
    };
    window.addEventListener('scroll', handlerScroll);
    return () => window.removeEventListener('scroll', handlerScroll);
  }, [offset, startSearch]);
  return (
    <>
      {!error ? (
        <>
          <Input
            type="text"
            onChange={handleChange}
            placeholder={`${t('search')}`}
          />
          {isRemoteCards ? (
            <Wrapper>
              {cardsStore.cards.map((card) => (
                <CardLayout {...card} />
              ))}
            </Wrapper>
          ) : (
            <Error text={`Nothing was found for the ${search} query!`} />
          )}
        </>
      ) : (
        <Error text={error} />
      )}
    </>
  );
}

const Wrapper = styled.div`
  height: 85%;
  padding: 20px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Input = styled.input`
  -webkit-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
  box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
  padding: 20px;
  margin: 30px 20px;
  font-size: 20px;
  ::placeholder {
    color: gray;
  }
`;

export default observer(Comics);
