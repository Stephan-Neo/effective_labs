import { action, makeObservable, observable } from 'mobx';
import { Card } from '../types/card';

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
    if (this.likesCard.includes(card)) {
      this.likesCard = [...this.likesCard.filter((c) => c !== card)];
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
