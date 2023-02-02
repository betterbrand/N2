import axios from 'axios';

export const getMinimumAmountToSend = async (asset1 : string, asset2 : string) => {
    try {
        const response = await axios.get("https://dev-api.thorswap.net/universal/minAmountDetails", 
            {
                params : {
                    "from" : asset1,
                    "to" : asset2
                }
            }
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}