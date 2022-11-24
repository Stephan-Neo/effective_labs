import { action, makeObservable, observable } from 'mobx';

class AppStore {
  @observable
  isDark: boolean = true;

  constructor() {
    makeObservable(this);
  }

  @action
  setTheme = (isDark: boolean) => {
    this.isDark = isDark;
  };
}

const appStore = new AppStore();
export default appStore;
