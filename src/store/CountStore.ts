import { makeObservable, observable, action } from 'mobx';

class CountStore {
  total = 15;

  constructor() {
    makeObservable(this, {
      total: observable,
      increment: action,
    });
  }

  increment = (type: string) => {
    switch (type) {
      case '+':
        this.total += 1;
        break;
      case '-':
        this.total -= 1;
        break;
      default:
        break;
    }
  };
}

export default new CountStore();
