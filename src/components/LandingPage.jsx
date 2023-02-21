import React, { useState, useRef } from 'react';
import { gettokens } from '../functions/get_supported_tokens'
import { addLiquidity } from '../functions/add_liquidity'
import { getPoolInfo } from '../functions/get_pool_info'
import { getMinimumAmount } from '../functions/get_minimum_amount_to_send'
import { getInboundAddressDetails } from '../functions/get-inbound_address'
import Error from './Error';


const LandingPage = () => {

    const [tokens, setTokens] = useState([])
    const [pool, setPool] = useState('');
    if (tokens.length == 0) {
        gettokens().then((data) => {
            setTokens(data)
            getPoolInfo('AVAX.AVAX').then((data) => {
                setPool(data.status)
            })
        })
    }

    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState('')
    const [quote, setQuote] = useState('')
    const [amt, setAmt] = useState(null)
    const [quoteError, setQuoteError] = useState('')
    const [inboundaddress, setInboundAddress] = useState('')
    const [liquidityError, setLiquidityError] = useState()


    const handleToken = (event) => {
        const val = event.target.value
        getPoolInfo(val).then((data) => {
            setSelectedOption(val)
            setPool(data.status)
        })

    }

    const getInboundAddress = () => {
        const toke = search(selectedOption)
        getInboundAddressDetails(toke.ticker).then((data) => {
            console.log(`Data Inbound : ${data}`)
            setInboundAddress(data.address)
        })

    }
    const search = option => tokens.find(obj => obj.apiIdentifier === option);
    const getQuoteHandler = (event) => {

        const toke = search(selectedOption)
        console.log(toke.decimals)
        document.getElementById("quoteSpinner").className = "flex justify-center items-center inline-block"
        getMinimumAmount(selectedOption, amt, toke.decimals).then((data) => {
            console.log(data, 'oo')
            setQuote(data)
            setQuoteError('')
            document.getElementById("quoteSpinner").className = "flex justify-center items-center hidden"
        }).catch((error) => {
            setQuoteError(error)
            document.getElementById("quoteSpinner").className = "flex justify-center items-center hidden"
        })

    }

    const amtChange = (e) => {
        const val = e.target.value
        setAmt(val)
        document.getElementById("aLabel").className = "text-black-600"
    }


    const addLiquid = (event) => {
        event.preventDefault()
        if (quoteError.length == 0) {

            const item = search(selectedOption)
            console.log(`amount in page: ${item.decimals}`)

            getInboundAddress();

            addLiquidity(quote.inbound_address,
                amt,
                item.ticker,
                inboundaddress.address,
                inboundaddress.router,
                item.decimals).then((data) => {
                    console.log(data, 'data')
                }).catch((error) => {
                    console.log(error.message, 'error')
                    setLiquidityError(error.message)
                })
        }
    }

    const containerRef = useRef(null);
    const [allChecked, setAllChecked] = useState(false);

    function handleCheckboxes() {
        const checkboxes = containerRef.current.querySelectorAll('input[type="checkbox"]');
        let allChecked = true;

        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                allChecked = false;
            }
        });

        setAllChecked(allChecked);
    }




    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Deposit Your Crypto Now</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        learn more about our service
                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={addLiquid}>
                        <div>
                            <label htmlFor="crypto" className="block text-sm font-medium text-gray-700">
                                Select your cryptocurrency
                            </label>
                            <select
                                id="crypto"
                                name="crypto"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={selectedOption}
                                onChange={handleToken}

                            >   <option value={null}>Select an option</option>
                                {tokens.map((token) =>
                                    <option value={token.apiIdentifier}>{token.name}</option>
                                )}
                            </select>
                        </div>

                        {selectedOption &&
                            <div>
                                <label htmlFor="crypto" className="block text-sm font-medium text-gray-700">
                                    Selected Coin
                                </label>
                                <p id="pool">
                                    <span className="text-blue-600">{selectedOption}</span>
                                </p>

                            </div>
                        }

                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700" id="aLabel">
                                Enter the amount you want to deposit
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 py-4 sm:text-sm border-gray-500 rounded-md"
                                    placeholder="0.00"
                                    onChange={amtChange}
                                />
                            </div>
                        </div>

                        {
                            quote.expected_amount_out && <div class="bg-white rounded-lg shadow-lg p-6">
                                <div class="text-lg font-bold mb-4">Quote:</div>
                                <div class="flex flex-col">
                                    <div class="flex items-center mb-2">
                                        <div class="w-1/2">Total Deposit:</div>
                                        <div class="w-1/2 text-right">100</div>
                                    </div>
                                    <div class="flex items-center mb-2">
                                        <div class="w-1/2">Network Nation Split:</div>
                                        <div class="w-1/2 text-right">10</div>
                                    </div>
                                    <div class="flex items-center mb-2">
                                        <div class="w-1/2">Gas:</div>
                                        <div class="w-1/2 text-right">5</div>
                                    </div>
                                    <div class="flex items-center mb-2">
                                        <div class="w-1/2">Total liquidity:</div>
                                        <div class="w-1/2 text-right">85</div>
                                    </div>
                                </div>
                            </div>
                        }



                        {quote.expected_amount_out &&
                            <div class="flex flex-col space-y-4" ref={containerRef} onChange={handleCheckboxes}>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" />
                                    <span class="ml-2 text-gray-700 text-sm">I understand this is an experiential alpha software release not intended for significant amounts of value.</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" />
                                    <span class="ml-2 text-gray-700 text-sm">By using this free, open source, tool I understand and agree to any and all terms published on this site and to the software license detailed in the repository.</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" />
                                    <span class="ml-2 text-gray-700 text-sm">I use this tool and associated tools at my own risk and hold harmless anyone associated with NetworkNation.org</span>
                                </label>
                            </div>
                        }




                        {quote.error || liquidityError && <Error message={quote.error || liquidityError} />}

                        <div className="flex justify-center items-center hidden" id="quoteSpinner">
                            <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-blue-600" role="status">
                                <span className="visually-hidden">.</span>
                            </div>
                        </div>
                        {
                            amt && <div>
                                <button
                                    onClick={getQuoteHandler}
                                    type="button"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Show Quote
                                </button>
                            </div>
                        }





                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Liquidity
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;