import '../styles/tailwind.css'
import 'focus-visible'

import { Chain } from "@chain-registry/types";
import { ChakraProvider } from "@chakra-ui/react";
import { Decimal } from "@cosmjs/math";
import { GasPrice } from "@cosmjs/stargate";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as leapWallets } from "@cosmos-kit/leap";

import { ChainProvider, defaultTheme } from "@cosmos-kit/react";
import { wallets as vectisWallets } from "@cosmos-kit/vectis";
import { wallets as wcv2Wallets } from "@cosmos-kit/walletconnect-v2";
import { assets, chains } from "chain-registry";

import { Web3ReactProvider } from "@web3-react/core";

import Web3 from "web3";
import { UserDataProvider } from '../context/userDataContext';
import { Toaster } from 'react-hot-toast';


function getLibrary(provider: any) {
  return new Web3(provider);
}

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
       <Web3ReactProvider getLibrary={getLibrary}>
       <UserDataProvider>

        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </UserDataProvider>
      </Web3ReactProvider>
    </ChakraProvider>
  );
}
