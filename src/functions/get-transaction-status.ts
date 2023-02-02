import axios from 'axios';

export const getTransactionStatus = async (id : string) => {
    try {
        const response = await axios.get("https://dev-api.thorswap.net/universal/status", {
            params : {
                "id" : id,
                "type" : "SWAP:TC-TC"
            }
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}