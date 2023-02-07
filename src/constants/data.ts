import { ethers } from "ethers";

export const getProvider = () => {
    return new ethers.providers.Web3Provider(window.ethereum);
};

export const dropAddresses: { [key: number]: string } = {
    [8001]: "0xD04cB36A3e97150311Cf71798C40C3ae56b16339",
    
};