import React, { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import cardsStore from '../../stores/CardsStore';
import { ApiLink } from '../../types/apiLink';
import CardLayout from '../../components/Card';
import { getCardsV } from '../../api/Card';
import Error from '../../components/Error';

type Inputs = {
  example: string;
};
function Series(): ReactElement {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<Inputs>();

  const [offset, setOffset] = useState(0);
  const [startSearch, setStartSearch] = useState(0);
  const [search, setSearch] = useState('a');
  const [isRemoteCards, setIsRemoteCards] = useState(true);
  const [countCards, setCountCards] = useState(0);
  const [error, setError] = useState<string>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSearch(data.example || 'a');
    setOffset(0);
    cardsStore.clearCards();
    setStartSearch(startSearch + 1);
    setCountCards(0);
  };

  useEffect(() => {
    cardsStore.clearCards();
  }, []);

  useEffect(() => {
    setIsRemoteCards(true);
    setError('');
    getCardsV(ApiLink.series, offset, search)
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

  const Wrapper = styled.div`
    height: 85%;
    padding: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `;

  const Search = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px 20px 0 30px;
    justify-content: space-between;
  `;

  const Input = styled.input`
    width: 100%;
    -webkit-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    padding: 10px;
    margin-right: 20px;
    font-size: 20px;
    ::placeholder {
      color: gray;
    }
  `;

  const Button = styled.button`
    width: 200px;
    text-align: center;
    padding: 15px;
    font-size: 20px;
    font-weight: 700;
    background: red;
    -webkit-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
    box-shadow: 1px -1px 8px 6px rgba(34, 60, 80, 0.2);
  `;
  return (
    <>
      {!error ? (
        <>
          <Search onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('example')} type="text" />
            <Button type="submit">
              <p>{t('search')}</p>
            </Button>
          </Search>
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

export default observer(Series);
