import { action, makeObservable, observable } from 'mobx';
import { Card } from '../types/card';
import appStore from './AppStore';

class CardsStore {
  @observable
  cards: Card[] = [];

  @observable
  card: Card[] = [];

  @observable
  likesCard: Card[] = [];

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

  @action
  setLikeCard = (card: Card) => {
    if (appStore.likes.includes(card.id)) {
      this.likesCard = [...this.likesCard.filter((c) => c.id !== card.id)];
      localStorage.setItem('likeCards', JSON.stringify(this.likesCard));
      return;
    }
    this.likesCard = [...this.likesCard, card];
    localStorage.setItem('likeCards', JSON.stringify(this.likesCard));
  };

  @action
  uploadLikeCards = (cards: Card[]) => {
    if (!cards) {
      return;
    }
    this.likesCard = cards;
  };

  constructor() {
    makeObservable(this);
  }
}

const cardsStore = new CardsStore();
export default cardsStore;
