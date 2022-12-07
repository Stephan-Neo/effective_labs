// Helpers
import axios from 'api/helpers/axios';

// types
import { Card } from '../types/card';

export interface CardResponse {
  data: {
    results: Card[];
  };
}

export const getCards = (url: string) =>
  axios.get<CardResponse>(`${url}`, {
    params: {
      limit: 10
    }
  });

export const getCard = (url: string, id: number) =>
  axios.get<CardResponse>(`${url}/${id}`);
