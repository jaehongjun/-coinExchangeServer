import axios from "axios";
import tradeCoinListJson from "../database/tradeCoinList";

export const instance = axios.create({
  baseURL: "https://www.velic.io/cexp/v1/trade/hoga/list",
  timeout: 10000,
  headers: { "Access-Control-Allow-Origin": "*" }
});
export const call = async ({ baseCoinCode, mtchCoinCode }) => {
  const result = await instance.get(
    `?baseCoinCode=${baseCoinCode}&mtchCoinCode=${mtchCoinCode}`
  );

  return { data: result.data, url: result.config.url };
};
export const dataMap = async list => {
  let a = new Array();
  const rue = await Array.from(list).map(async (subList, index) => {
    return await call({
      baseCoinCode: subList.baseCoinCode,
      mtchCoinCode: subList.mtchCoinCode
    });
  });
  return rue;
};
export const search = async (req, res) => {
  try {
    const list = tradeCoinListJson.tradeSite[0].searchList;

    const a = await dataMap(list);

    await res.send(a);
    console.log(a);
  } catch (error) {
    console.log(error);
  } finally {
    await res.end();
  }
};
