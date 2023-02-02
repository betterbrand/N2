import axios from 'axios';

export const getSupportedTokens = async () => {
    try {
        const response = await axios.get("https://dev-api.thorswap.net/universal/currenciesFull");
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}