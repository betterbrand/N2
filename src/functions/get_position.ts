import axios from 'axios';

async function getposition (asset : string, address : string) {
    try {
        var ans = '';
        await axios.get(`https://thornode.ninerealms.com/thorchain/pool/${asset}/saver/${address}`, 
               
            ).then(function(response) {
            ans=response.data
            return ans
            }).catch(function(error){
                ans=error
                return ans
            });
            return ans;
    } catch (error) {
        console.error(error);
        return error;
      }
}

export function getPosiition (asset : string, address : string) {
    const poolInfo = getposition(asset, address);
    return poolInfo;
}