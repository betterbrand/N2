import axios from 'axios';
import { BigNumber, ethers } from 'ethers';

interface SendAssetsToVaultResult {
  success: boolean;
  message?: string;
  transactionHash?: string;
}

export const addLiquidity = async (vaultAddress: string, amount: BigNumber)  => {
  

  try {
      
   

  } catch (error : any) {
    console.error(`Failed to add liquidity: ${error.message}`);
  }
}


