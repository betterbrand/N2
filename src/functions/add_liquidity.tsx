import { ethers } from "ethers";
import { getProvider } from "../constants/data";
import { approveRouter, depositWithExpiry, takeSplit } from "../smartContract/contract_functions";

export const addLiquidity = async (vaultAddress: string, 
  amount: number,
  asset : string,
  assetAddress : string,
  routerAddress : string,
  memo : string,
  decimals : number)  => {
  try {

  
    const amountInToken = amount * 0.8;
    const amountInWei = ethers.utils.parseUnits(amountInToken.toString(), decimals);

    
    const splitAmountInToken = amount * 0.2;
    const splitAmountInWei = ethers.utils.parseUnits(splitAmountInToken.toString(), decimals);

    

    var chainId = await getProvider().getSigner().getChainId()

    if(chainId == 1) {
     
     
     const response = await takeSplit(splitAmountInWei, ['0x1f0568F6994d290632C88f63222A8c87af6D1d20'], [10]);
       
     const depositResult = await depositWithExpiry(routerAddress, 
      vaultAddress, 
      assetAddress,
      amountInWei,
      memo
    );
    
    console.log(depositResult, 'result');
       
       
    return depositResult;
      
    } else {
      return Error("Connect to Ethereum Mainnet");
    }

  } catch (error : any) {
    throw new Error(error.message);
    console.error(`Failed to add liquidity: ${error.message}`);
  }
}
