import { ethers } from "ethers";

export const getProvider = () => {
    return new ethers.providers.Web3Provider(window.ethereum);
};

export const dropAddresses: { [key: number]: string } = {
    [80001]: "0x3bF6345A8D96C83faC193a544471dc958232eE57",  
    [5]: "0x32d0BD10fCeD76769ca01aBa8Da930C93f937F1E",
    [1] : "0x7DFB8C00339ee66176CF68bCD4AcD8132029239E"
};