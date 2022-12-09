import { action, makeObservable, observable } from 'mobx';
import { Card } from '../types/card';

class CardsStore {
  @observable
  cards: Card[] = [];

  @observable
  card: Card[] = [];

  @action
  clearCards = () => {
    this.cards = [];
    this.card = [];
  };

  @action
  setCards = (cards: Card[]) => {
    this.cards = [...this.cards, ...cards];
  };

  @action
  setCard = (card: Card[]) => {
    this.card = card;
  };

  constructor() {
    makeObservable(this);
  }
}

const cardsStore = new CardsStore();
export default cardsStore;
