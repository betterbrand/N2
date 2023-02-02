import axios from 'axios';

export const getCheckHealth = async () => {
    try {
        const response = await axios.get("https://dev-api.thorswap.net/universal");
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}