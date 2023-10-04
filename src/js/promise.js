import json from './funJson';
import read from './funRead';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response))
      .then((response) => new GameSaving(JSON.parse(response)))
      .catch((error) => error);
  }
}
