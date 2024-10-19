import { defineChain } from "viem";

export const tppd = /*#__PURE__*/ defineChain({
  id: 21_174,
  name: "TTPD",
  nativeCurrency: { name: "TTPD", symbol: "TTPD", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:9650/ext/bc/tppd/rpc"],
    },
  },
});
