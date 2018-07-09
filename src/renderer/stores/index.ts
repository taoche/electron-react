import AppStore from './app/index';

class RootStore {
  public appStore: AppStore;

  public constructor() {
    this.appStore = new AppStore();
  }
}

export default new RootStore();
export { AppStore };
