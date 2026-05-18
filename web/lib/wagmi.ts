import { http, createConfig } from "wagmi";
import { defineChain } from "viem";

export const kiteChain = defineChain({
  id: 2366,
  name: "Kite",
  nativeCurrency: { name: "KITE", symbol: "KITE", decimals: 18 },
  rpcUrls: { default: { http: ["https://rpc.gokite.ai"] } },
});

export const config = createConfig({
  chains: [kiteChain],
  transports: {
    [kiteChain.id]: http(),
  },
});
