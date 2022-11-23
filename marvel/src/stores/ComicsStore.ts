import { observable, makeObservable } from 'mobx';

// Types
import { Side } from '../types/side';

class ComicsStore {
  @observable
  comics: Side[] = [
    {
      id: '1',
      urlImage: './imageCards/Comics/starWars.jpg',
      title: 'Star Wars',
      description: 'Star Wars'
    },
    {
      id: '2',
      urlImage: './imageCards/Comics/pantera.jpg',
      title: 'Fantastic Four',
      description: 'The first appearance of the Black Panther'
    },
    {
      id: '3',
      urlImage: './imageCards/Comics/ASpider.jpg',
      title: 'The Amazing Spider-Man',
      description: 'The Amazing Spider-Man'
    },
    {
      id: '4',
      urlImage: './imageCards/Comics/XMan.jpg',
      title: 'X-Men',
      description: 'X-Men'
    }
  ];

  constructor() {
    makeObservable(this);
  }
}

const comicsStore = new ComicsStore();

export default comicsStore;
