import { dropAddresses, getProvider } from '../constants/data';
import { NetworkNationSplit__factory} from '../typechain/factories/contracts'
import { IERC20, ERC20, ERC20__factory, IERC20__factory, NetworkNationSplit, THORChain_Router, THORChain_Router__factory } from "../typechain"


import { BigNumber, ethers } from "ethers";

export const takeSplit = async(
    amount : BigNumber,
    partners : any,
    percentages : any
) => {
    try {

     
       const split : NetworkNationSplit = NetworkNationSplit__factory.connect(dropAddresses[await getProvider().getSigner().getChainId()],
       getProvider().getSigner()) as NetworkNationSplit;

       const res = await split.collectFee(partners, percentages , {
        value : amount
       });

       return res;

    } catch(err) {
        throw err;
    }
}

export const depositWithExpiry = async(
    routerAddress : string,
    vaultAddress : string,
    assetAddress : string,
    amount : BigNumber,
    memo : string,
) => {

    const router : THORChain_Router = THORChain_Router__factory.connect(routerAddress, getProvider().getSigner()) as THORChain_Router;

    const res = await router.depositWithExpiry(vaultAddress, assetAddress, amount, memo, getDateInUnixPlus60Minutes(), {
        gasLimit : BigNumber.from(150000)
    });

    return res;

} 

function getDateInUnixPlus60Minutes(): number {
    const date = new Date();
    const unixTimestamp = Math.floor(date.getTime() / 1000); // divide by 1000 to convert milliseconds to seconds
    const unixTimestampPlus60Minutes = unixTimestamp + (60 * 60); // add 60 minutes in seconds
    return unixTimestampPlus60Minutes;
  }

let averageGasPriceCache: BigNumber | undefined = undefined;
const tokenTransferCostCache: { [key: string]: BigNumber } = {};

export async function getEstimatedGasFee(
    gasOnlyForTokenTnx: number,
    participants: number,
    provider: ethers.Signer
): Promise<string> {
    const averageGasPrice = averageGasPriceCache ?? (await provider.getGasPrice());
    averageGasPriceCache = averageGasPrice;
    const baseGas = BigNumber.from(21000);
    const airdropUtilityCost = BigNumber.from(145389);

    const estimatedGas = airdropUtilityCost.add(gasOnlyForTokenTnx * participants).add(baseGas);

    const costWei = estimatedGas.mul(averageGasPrice);

    return ethers.utils.formatEther(costWei);
}

export const approveRouter = async (
    assetAddress : string,
    routerAddress: string,
    tokenAmount: number,
    decimals : number,
): Promise<{ [key: string]: any }> => {
    const token: ERC20 = ERC20__factory.connect(assetAddress, getProvider().getSigner()) as ERC20;
  

    try {
        const tnx: ethers.ContractTransaction = await token.approve(
            routerAddress,
            tokenAmount
        );
        const confirmedTnx: ethers.ContractReceipt = await tnx.wait(3);
        return { tnx: confirmedTnx };
    } catch (err: any) {
        return { error: err.message };
    }
};
