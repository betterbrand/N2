import axios from 'axios';

export const addLiquidity = async (asset1: string, asset2: string, amount: number, address : string)  => {
  if (amount <= 0) {
    throw new Error('Amount must be greater than 0');
  }

  try {
    
    const response = await axios.post("https://dev-api.thorswap.net/universal/transaction", {
      data : {
        "from" : asset1,
        "to" : asset2,
        "address" : address,
        "amount" : amount.toString(),
        "slippage" : 1,
        "affiliateFee": 10,​
        "affiliateAddress": "thor160yye65pf9rzwrgqmtgav69n6zlsyfpgm9a7xk"
      }
    });

    return response.data;

  } catch (error : any) {
    console.error(`Failed to add liquidity: ${error.message}`);
  }
}


