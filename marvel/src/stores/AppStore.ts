import { action, makeObservable, observable } from 'mobx';
import { DetailsLink } from '../types/detailsLink';

class AppStore {
  @observable
  isDark: boolean = true;

  @observable
  isLoaded: boolean = false;

  @observable
  comicsLink: DetailsLink[] = [];

  @observable
  seriesLink: DetailsLink[] = [];

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
