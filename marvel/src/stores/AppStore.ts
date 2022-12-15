import { action, makeObservable, observable } from 'mobx';

class AppStore {
  @observable
  isDark: boolean = true;

  @observable
  isLoaded: boolean = false;

  @observable
  likes: number[] = [];

  @action
  setTheme = (isDark: boolean) => {
    this.isDark = isDark;
  };

  @action
  setLoaded = (isLoaded: boolean) => {
    this.isLoaded = isLoaded;
  };

  @action
  uploadLikes = (likes: number[]) => {
    if (!likes) {
      return;
    }
    this.likes = likes;
  };

  @action
  setLikes = (like: number) => {
    const copy = Object.assign([], this.likes);
    if (copy.includes(like)) {
      const deletedLikes = copy.filter((value) => value !== like);
      this.likes = deletedLikes;
      localStorage.setItem('likes', JSON.stringify(deletedLikes));
      return;
    }
    copy.push(like);
    this.likes = copy;
    localStorage.setItem('likes', JSON.stringify(this.likes));
  };

  constructor() {
    makeObservable(this);
  }
}

const appStore = new AppStore();
export default appStore;
