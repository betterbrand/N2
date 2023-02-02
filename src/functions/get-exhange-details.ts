import axios from 'axios';

export const getExchangeDetails = async (asset1 : string, asset2 : string, amount : number) => {
    try {
        const response = await axios.get("https://dev-api.thorswap.net/universal/exchangeAmountDetails", {
            params : {
                "from" : asset1,
                "to" : asset2,
                "amount" : amount.toString()
            }
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}