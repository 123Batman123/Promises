import read from '../funRead';
import GameSavingLoader from '../promise';

jest.mock('../funRead');

test('test GameSavingLoader', () => {
  read.mockRejectedValue('Error');
  return GameSavingLoader.load().then((data) => {
    expect(data).toEqual('Error');
  });
});
