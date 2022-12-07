import { action, makeObservable, observable } from 'mobx';
import { DetailsLink } from '../types/detailsLink';
import { Card } from '../types/card';
import { getCard, getCards } from '../api/Card';

class AppStore {
  @observable
  isDark: boolean = true;

  @observable
  isLoaded: boolean = false;

  @observable
  comicsLink: DetailsLink[] = [];

  @observable
  seriesLink: DetailsLink[] = [];

  @observable
  cards: Card[] = [];

  @observable
  card: Card[] = [];

  @action
  getCard = async (url: string, id: number) => {
    try {
      const { data } = await getCard(url, id);

      this.card = data.data.results;
      this.comicsLink = data.data.results[0].comics.items;
      this.seriesLink = data.data.results[0].series.items;
    } catch (error) {
      console.error(error);
    }
  };

  @action
  getCards = async (url: string) => {
    try {
      const { data } = await getCards(url);

      this.cards = data.data.results;
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
