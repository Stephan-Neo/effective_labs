import { action, makeObservable, observable } from 'mobx';
import { Card } from '../types/card';
import { getCard, getCards } from '../api/Card';

class AppStore {
  @observable
  isDark: boolean = true;

  @observable
  isLoaded: boolean = false;

  @observable
  cards: Card[] = [];

  @observable
  card: Card[] = [];

  @action
  getCard = async (url: string, id: number) => {
    try {
      this.card = await getCard(url, id);
    } catch (error) {
      console.error(error);
    }
  };

  @action
  getCards = async (url: string, offset: number) => {
    try {
      this.cards = await getCards(url, offset);
    } catch (error) {
      console.error(error);
    }
  };

  constructor() {
    makeObservable(this);
  }

  @action
  setTheme = (isDark: boolean) => {
    this.isDark = isDark;
  };

  @action
  setLoaded = (isLoaded: boolean) => {
    this.isLoaded = isLoaded;
  };
}

const appStore = new AppStore();
export default appStore;
