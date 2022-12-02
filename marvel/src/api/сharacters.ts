// Helpers
import axios from 'api/helpers/axios';
import { Character } from '../types/character';

export interface CharacterResponse {
  data: {
    results: Character[];
  };
}

export const getCharacters = () =>
  axios.get<CharacterResponse>('v1/public/characters', {
    params: {
      limit: 10
    }
  });

export const getCharacterById = (id: number) =>
  axios.get<CharacterResponse>(`v1/public/characters/${id}`);
