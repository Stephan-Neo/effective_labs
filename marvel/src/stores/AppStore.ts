import { action, makeObservable, observable } from 'mobx';

class AppStore {
  @observable
  isDark: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  setProfile = (isDark: boolean) => {
    this.isDark = isDark;
  };
}

const appStore = new AppStore();
export default appStore;
