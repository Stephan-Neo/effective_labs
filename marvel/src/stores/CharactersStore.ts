import { observable, makeObservable, action } from 'mobx';
import { getCharacterById, getCharacters } from '../api/сharacters';
// Types
import { Character } from '../types/character';
import appStore from './AppStore';

class CharactersStore {
  @observable
  characters: Character[] = [];

  @observable
  character: Character[] = [];

  @action
  getCharacter = async (id: number) => {
    try {
      const { data } = await getCharacterById(id);

      this.character = data.data.results;
      appStore.comicsLink = data.data.results[0].comics.items;
      appStore.seriesLink = data.data.results[0].series.items;
    } catch (error) {
      console.error(error);
    }
  };

  @action
  getCharacters = async () => {
    try {
      const { data } = await getCharacters();

      this.characters = data.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  constructor() {
    makeObservable(this);
  }
}

const charactersStore = new CharactersStore();

export default charactersStore;
