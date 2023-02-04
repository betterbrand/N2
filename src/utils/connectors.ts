import { useWeb3React } from "@web3-react/core";

import { InjectedConnector } from "@web3-react/injected-connector";
export const injected = new InjectedConnector({
    supportedChainIds: [137, 80001],
});