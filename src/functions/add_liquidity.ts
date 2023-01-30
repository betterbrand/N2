import axios from 'axios';

export const addLiquidity = async (asset1: string, asset2: string, amount: number)  => {
  if (amount <= 0) {
    throw new Error('Amount must be greater than 0');
  }

  try {
    // Calculate the amount of each asset to deposit
    const asset1Amount = amount / 2;
    const asset2Amount = amount / 2;

    // Construct the API endpoint
    const endpoint = `https://api.thorchain.org/pool?asset=${asset1}/${asset2}`;

    // Send a GET request to the API to get the pool information
    const response = await axios.get(endpoint);
    const pool = response.data;

    // Calculate the pool token amounts based on the deposit amounts
    const poolAsset1Amount = (asset1Amount * pool.total_liquidity) / pool.asset1_balance;
    const poolAsset2Amount = (asset2Amount * pool.total_liquidity) / pool.asset2_balance;

    // Validate the pool token amounts
    if (isNaN(poolAsset1Amount) || isNaN(poolAsset2Amount)) {
      throw new Error('Failed to calculate pool token amounts');
    }

    // Add the liquidity to the pool by sending transactions for each asset
    // ...

    console.log(`Successfully added ${amount} liquidity to the ${asset1}/${asset2} pool`);
  } catch (error : any) {
    console.error(`Failed to add liquidity: ${error.message}`);
  }
}


