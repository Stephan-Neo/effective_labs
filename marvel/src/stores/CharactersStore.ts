import { observable, makeObservable, action } from 'mobx';

// Types
import { Side } from '../types/side';

class CharactersStore {
  @observable
  characters: Side[] = [
    {
      id: '1',
      urlImage: './imageCards/Characters/capitanAmerica.jpg',
      title: 'Capitan America',
      description: 'super hero'
    },
    {
      id: '2',
      urlImage: './imageCards/Characters/goblin.jpg',
      title: 'Goblin',
      description: 'super hero'
    },
    {
      id: '3',
      urlImage: './imageCards/Characters/halk.jpg',
      title: 'Halk',
      description: 'super hero'
    },
    {
      id: '4',
      urlImage: './imageCards/Characters/ironMan.webp',
      title: 'Iron Man',
      description: 'super hero'
    },
    {
      id: '5',
      urlImage: './imageCards/Characters/loki.webp',
      title: 'Loki',
      description: 'super hero'
    },
    {
      id: '6',
      urlImage: './imageCards/Characters/pantera.jpeg',
      title: 'Black Pantera',
      description: 'super hero'
    },
    {
      id: '7',
      urlImage: './imageCards/Characters/SpiderMan.webp',
      title: 'Spider Man',
      description: 'super hero'
    },
    {
      id: '8',
      urlImage: './imageCards/Characters/tor.jpg',
      title: 'Tor',
      description: 'super hero'
    },
    {
      id: '9',
      urlImage: './imageCards/Characters/womanCat.webp',
      title: 'Сatwoman',
      description: 'super hero'
    },
    {
      id: '10',
      urlImage: './imageCards/Characters/vdova.jpg',
      title: 'Vdova',
      description: 'super hero'
    }
  ];

  @action
  getCharacter = (id: string) => {
    return this.characters.filter((ch) => {
      return ch.id === id;
    });
  };

  constructor() {
    makeObservable(this);
  }
}

const charactersStore = new CharactersStore();

export default charactersStore;
