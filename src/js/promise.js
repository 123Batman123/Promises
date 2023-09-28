import json from './funJson';
import read from './funRead';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response))
      .then((response) => JSON.parse(response))
      .catch((error) => error.message);
  }
}
