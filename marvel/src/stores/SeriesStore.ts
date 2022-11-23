import { observable, makeObservable } from 'mobx';

// Types
import { Side } from '../types/side';

class SeriesStore {
  @observable
  series: Side[] = [
    {
      id: '1',
      urlImage: './imageCards/Series/pantera.jpg',
      title: 'Black Panther: Wakanda Forever',
      description: 'Black Panther: Wakanda Forever'
    },
    {
      id: '2',
      urlImage: './imageCards/Series/spiderMan.jpg',
      title: 'Spider-Man: No Way Home',
      description: 'Spider-Man: No Way Home'
    },
    {
      id: '3',
      urlImage: './imageCards/Series/strange.jpg',
      title: 'Doctor Strange in the Multiverse of Madness',
      description: 'Doctor Strange in the Multiverse of Madness'
    },
    {
      id: '4',
      urlImage: './imageCards/Series/tor.jpg',
      title: 'Thor: Love and Thunder',
      description: 'Thor: Love and Thunder'
    }
  ];

  constructor() {
    makeObservable(this);
  }
}

const seriesStore = new SeriesStore();

export default seriesStore;
