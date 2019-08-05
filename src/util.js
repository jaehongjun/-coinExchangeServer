import coinList from '../database/coinList';

const BUY = 'BUY';
const SELL = 'SELL';
const MAIN_COIN_PARAM = 'baseCoinCode';
const MATCH_COIN_PARAM = 'mtchCoinCode';
const VIEW_COUNT = 1;

export const manufacture = (data, type) => {
  switch (type) {
    case SELL: {
      return data
        .sort((a, b) => {
          return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
        })
        .slice(0, VIEW_COUNT);
    }
    case BUY: {
      return data
        .sort((a, b) => {
          return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
        })
        .slice(0, VIEW_COUNT);
    }
    default: {
      return {};
    }
  }
};

export const getCoinNameByUrl = url => {
  const parameter = url.split('?')[1];
  const param = [];
  const paramSplit = parameter.split('&');
  Array.from(paramSplit).map(v => (param[v.split('=')[0]] = v.split('=')[1]));
  return [
    getCoinName(param[MAIN_COIN_PARAM]),
    getCoinName(param[MATCH_COIN_PARAM]),
  ];
};

export const getCoinName = key => {
  return coinList.find(list => {
    return list.key === key;
  }).name;
};
