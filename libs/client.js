// microCMSのAPIを利用するためのSDK初期化です
// 以下のドメインとAPIキーを書き換えてねん

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "service-domain", // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.API_KEY,
});
