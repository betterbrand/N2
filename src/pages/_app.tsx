import '../styles/tailwind.css'
import 'focus-visible'


import { ChakraProvider } from "@chakra-ui/react";


import { Web3ReactProvider } from "@web3-react/core";

import Web3 from "web3";
import { UserDataProvider } from '../context/userDataContext';
import { Toaster } from 'react-hot-toast';


function getLibrary(provider: any) {
  return new Web3(provider);
}

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
       <Web3ReactProvider getLibrary={getLibrary}>
       <UserDataProvider>

        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </UserDataProvider>
      </Web3ReactProvider>
    </ChakraProvider>
  );
}
