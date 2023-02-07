import axios from 'axios';
import { depositWithExpiry, takeSplit } from '../smartContract/contract_functions';


export const addLiquidity = async (vaultAddress: string, 
  amount: number,
  chainId : string, 
  wallet : string, 
  asset : string,
  assetAddress : string,
  routerAddress : string,
  decimals : number)  => {
  try {
    
    const amountInWei = amount * 10 ** decimals;

    

    const memo = `+:${asset}`;

    await takeSplit(amountInWei * 0.2, ['0xD04cB36A3e97150311Cf71798C40C3ae56b16339'])

    await depositWithExpiry(routerAddress, vaultAddress, assetAddress, amountInWei * 0.8, memo);


    
    
  } catch (error : any) {
    console.error(`Failed to add liquidity: ${error.message}`);
  }
}


