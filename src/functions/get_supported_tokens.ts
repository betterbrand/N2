

import axios from 'axios';

async function getSupportedTokens(){
	var ans=''
    await axios.get("https://midgard.ninerealms.com/v2/pools")
    .then(function(response){
    	ans=response.data
    	return ans
    })
    .catch(function(error){
    	ans=error
        return ans
    });
    return ans  
}
export function gettokens(){
  const tokens= getSupportedTokens()
  return tokens
}