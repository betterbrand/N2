import { dropAddresses, getProvider } from '../constants/data';
import { NetworkNationSplit__factory} from '../typechain/factories/contracts'
<<<<<<< HEAD
import { IERC20, ERC20, ERC20__factory, IERC20__factory, NetworkNationSplit, THORChain_Router, THORChain_Router__factory } from "../typechain"


import { BigNumber, ethers } from "ethers";

export const takeSplit = async(
    amount : number,
    partners : any,
    percentages : any
=======
import { IERC20, IERC20__factory, NetworkNationSplit, THORChain_Router, THORChain_Router__factory } from "../typechain"


import { BigNumber, ethers, Wallet } from "ethers";

export const takeSplit = async(
    amount : number,
    partners : any
>>>>>>> 9a092cc39fd891d774947fafbf6285ef8fefa4e8
) => {
    try {

       console.log(`${dropAddresses[await getProvider().getSigner().getChainId()]}`)

       console.log(`${await getProvider().getSigner().getChainId()}`)

       console.log(`amount : ${amount}`)

       const split : NetworkNationSplit = NetworkNationSplit__factory.connect(dropAddresses[await getProvider().getSigner().getChainId()],
       getProvider().getSigner()) as NetworkNationSplit;

<<<<<<< HEAD
       const res = await split.collectFee(partners, percentages , {
        value : amount
=======
       const res = await split.collectFee(amount, partners , {
        value : ethers.utils.parseEther(`${amount}`)
>>>>>>> 9a092cc39fd891d774947fafbf6285ef8fefa4e8
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
    amount : number,
    memo : string,
) => {

    const router : THORChain_Router = THORChain_Router__factory.connect(routerAddress, getProvider().getSigner()) as THORChain_Router;

    const res = await router.depositWithExpiry(vaultAddress, assetAddress, amount, memo, 3600);

    return res;

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
<<<<<<< HEAD
    assetAddress : string,
    routerAddress: string,
    tokenAmount: number
): Promise<{ [key: string]: any }> => {
    const token: ERC20 = ERC20__factory.connect(`${assetAddress}`, getProvider().getSigner()) as ERC20;
    const decimals: number = await token.decimals();
=======
    routerAddress: string,
    tokenAmount: number
): Promise<{ [key: string]: any }> => {
    const token: IERC20 = IERC20__factory.connect(routerAddress, getProvider().getSigner()) as IERC20;
    const decimals: number = await token.decimals;
>>>>>>> 9a092cc39fd891d774947fafbf6285ef8fefa4e8
    const tokenAmountWithDecimals = BigNumber.from(
        ethers.utils.parseUnits(tokenAmount.toString(), decimals)
    );

    try {
        const tnx: ethers.ContractTransaction = await token.approve(
<<<<<<< HEAD
            routerAddress,
=======
            dropAddresses[await getProvider().getSigner().getChainId()],
>>>>>>> 9a092cc39fd891d774947fafbf6285ef8fefa4e8
            tokenAmountWithDecimals
        );
        const confirmedTnx: ethers.ContractReceipt = await tnx.wait(3);
        return { tnx: confirmedTnx };
    } catch (err: any) {
        return { error: err.message };
    }
<<<<<<< HEAD
};
=======
};
>>>>>>> 9a092cc39fd891d774947fafbf6285ef8fefa4e8
