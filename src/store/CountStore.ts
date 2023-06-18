import { makeObservable, observable, action, runInAction } from 'mobx';


class CountStore {
  total = 15;
  data = []

  constructor() {
    makeObservable(this, {
      total: observable,
      data: observable,
      increment: action,
      getMovies: action,
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

  getMovies = async (event: string) => {
    if (event == 'call') {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();

      runInAction(() => {
        this.data = json.movies;
      })
    } else {
      this.data = [];
    }
  };


}

export default new CountStore();
