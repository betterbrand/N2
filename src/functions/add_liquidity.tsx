import axios from 'axios';
import { depositWithExpiry, takeSplit } from '../smartContract/contract_functions';


export const addLiquidity = async (vaultAddress: string, 
  amount: number,
  asset : string,
  assetAddress : string,
  routerAddress : string,
  decimals : number)  => {
  try {



    
    const amountInWei = amount * 10 ** decimals;


    
    const memo = `+:${asset}`;

    await takeSplit(amountInWei * 0.2, ['0x1f0568F6994d290632C88f63222A8c87af6D1d20'])

    await depositWithExpiry(routerAddress, vaultAddress, assetAddress, amountInWei * 0.8, memo);
    
    
  } catch (error : any) {
    console.error(`Failed to add liquidity: ${error.message}`);
  }
}


