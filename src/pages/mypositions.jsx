import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { gettokens } from '../functions/get_supported_tokens'
import { getPosition } from '../functions/get_position';
import { data } from "autoprefixer";
import { getInboundAddressDetails } from '../functions/get-inbound_address'
import {withdrawLiquid} from '../functions/withdraw_liquidity'
import {ethers} from 'ethers'


function MyPositions() {
  const [selectedPool, setSelectedPool] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0.01);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [tokens, setTokens] = useState([])
  const [selectedOption, setSelectedOption] = useState("");
  const [position, setPosition]  = useState("")
  const [inboundAddress, setInboundAddress] = useState("")
  const [basisPoints, setBasisPoints] = useState(0)
  const [positionInETH, setPositionInETH] = useState(0)


  const positions = [
    {
      name: selectedOption,
      amount: withdrawalAmount,
    },
  
  ];

  if (tokens.length == 0) {
    gettokens().then((data) => {
        setTokens(data)

    })
}

const getInboundAddress = async () => {
  const toke = search(selectedOption)
  getInboundAddressDetails("ETH").then((data) => {
      console.log(`Data Inbound : ${data.address}`)
      console.log(`Router Inbound : ${data.router}`)

      setInboundAddress(data)
  })

}
  const handleDropdownChange = (event) => {
    const val = event.target.value
      getPosition(val).then((data) => {
        console.log("Position : ", data)
        const totalValue = data.rune_deposit_value + data.asset_deposit_value;
        console.log("Total Value : ", totalValue);
        const basis = (data.asset_deposit_value / data.luvi_deposit_value) * 10000;
        
        setSelectedPool(val);
        setSelectedOption(val)
        setPosition(data)
        setBasisPoints(basis)

        const valueInWei = ethers.BigNumber.from(data.asset_redeem_value);

        const valueInEth = ethers.utils.formatEther(valueInWei);

        setPositionInETH(valueInEth)
        
      })
  };

 const handleCardClick = (position) => {
  if (selectedPosition === position) {
    setShowCard(false);
    setSelectedPosition(null);
  } else {
    setShowCard(true);
    setSelectedPosition(position);
    setWithdrawalAmount("");
  }
};

  const search = option => tokens.find(obj => obj.asset === option);
   

  const handleWithdrawal = () => {
    console.log(`Withdrawal amount: ${withdrawalAmount}`);
  
    getInboundAddress();

    const toke = search(selectedOption);

    getInboundAddressDetails("ETH").then(async(data) => {

      console.log(`Outbound  Fee : ${data.outbound_fee}`)


      const res = await withdrawLiquid(
        data.address,
        position.asset_redeem_value,
        selectedOption,
        selectedOption.split("-")[1] ?? '0x0000000000000000000000000000000000000000',
        data.router,
        `-:${selectedOption}:${10000}`,
        parseInt(toke.nativeDecimal)
      )
    })
     
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">My Positions</h1>
      <div className="relative inline-block">
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-64"
          value={selectedPool}
          onChange={handleDropdownChange}
        >
          <option value="">Choose a Pool</option>
          {tokens.map((token) =>
                                    <option value={token.asset}>{token.asset}</option>
              )}
          </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div class="flex items-center mb-2">
                                        <div class="w-1/2">Position:</div>
                                        <div class="w-1/2 text-right">{positionInETH} ETH</div>
      </div>
      <div className="flex justify-between mt-4">
              {/* <input
                className="border border-gray-300 px-4 py-2 rounded-l w-full"
                type="text"
                placeholder="Enter Percentage to Liquidate"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
              /> */}
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-r"
                    onClick={handleWithdrawal}
                  >
                    Withdraw

              </button>
            </div>
</div>

  );
}

export default MyPositions;

