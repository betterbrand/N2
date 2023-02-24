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

  
    
    const amountInWei = amount * 10 ** decimals;

    

    var chainId = await getProvider().getSigner().getChainId()

    if(chainId == 1) {
      await takeSplit(amountInWei * 0.2 , ['0x1f0568F6994d290632C88f63222A8c87af6D1d20'], [10]).then(async (value) => {
       
        const depositResult = await depositWithExpiry(routerAddress, 
          vaultAddress, 
          assetAddress,
          amountInWei * 0.8,
          memo
        );
        return depositResult;
      });
    } else {
      return Error("Connect to Ethereum Mainnet");
    }

    
  } catch (error : any) {
    console.error(`Failed to add liquidity: ${error.message}`);
  }
}
