// Helpers
import axios from 'api/helpers/axios';

// types
import { Card } from '../types/card';

export interface CardResponse {
  data: {
    results: Card[];
  };
}

export const getCards = async (
  url: string,
  offset: number,
  nameStartsWith?: string
): Promise<Card[]> => {
  const res = await axios.get<CardResponse>(`${url}`, {
    params: {
      limit: 10,
      offset,
      nameStartsWith
    }
  });
  return res.data.data.results;
};

export const getCardsV = async (
  url: string,
  offset: number,
  titleStartsWith?: string
): Promise<Card[]> => {
  const res = await axios.get<CardResponse>(`${url}`, {
    params: {
      limit: 10,
      offset,
      titleStartsWith
    }
  });
  return res.data.data.results;
};

export const getCard = async (url: string, id: number): Promise<Card[]> => {
  const res = await axios.get<CardResponse>(`${url}/${id}`);
  return res.data.data.results;
};
