import axios from 'axios';

async function getExchangeDetails(asset1: string, asset2: string, amount: number) {
  try {
    var ans = ''
    await axios.get("https://dev-api.thorswap.net/universal/exchangeAmountDetails", {
      params: {
        "from": asset1,
        "to": asset2,
        "amount": amount.toString()
      }
    }).then(function (response) {
      ans = response.data
      return ans
    })
      .catch(function (error) {
        ans = error
        return ans
      });
    return ans

  } catch (error) {
    console.error(error);
    return error;
  }
}