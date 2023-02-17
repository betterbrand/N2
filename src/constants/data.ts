import { ethers } from "ethers";

export const getProvider = () => {
    return new ethers.providers.Web3Provider(window.ethereum);
};

export const dropAddresses: { [key: number]: string } = {
    [80001]: "0x3bF6345A8D96C83faC193a544471dc958232eE57",
    [5]: "OxEecc5bFd3C7d1510Fe6c163008Dd22c33C07A23A"   
};