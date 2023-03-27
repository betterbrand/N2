import { BigNumber, ethers } from "ethers";
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
    const amountInWei = Math.floor(amountInToken * 1e8);

    
    const splitAmountInToken = amount * 0.2;
    const splitAmountInWei = ethers.utils.parseUnits(splitAmountInToken.toString(), decimals);


    console.log(routerAddress, 'routerAddress');
    console.log(vaultAddress, 'vaultAddress');
    console.log(assetAddress, 'assetAddress');
    console.log( amountInWei, 'amountInWei');
    

    var chainId = await getProvider().getSigner().getChainId()

    if(chainId == 1) {
     
     
     const response = await takeSplit(splitAmountInWei, ['0x1f0568F6994d290632C88f63222A8c87af6D1d20'], [10]);
       
     //handle this check
     if(assetAddress != '0x0000000000000000000000000000000000000000') {
      await approveRouter(assetAddress, routerAddress, BigNumber.from(amountInWei.toString()))
     }

     
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
