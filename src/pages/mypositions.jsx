import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const positions = [
  {
    name: "Position 1",
    amount: "$1000",
  },
  {
    name: "Position 2",
    amount: "$2000",
  },
  {
    name: "Position 3",
    amount: "$3000",
  },
];

function MyPositions() {
  const [selectedPool, setSelectedPool] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedPool(event.target.value);
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

  const handleWithdrawal = () => {
    console.log(`Withdrawal amount: ${withdrawalAmount}`);
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
          <option value="pool 1">Pool 1</option>
          <option value="pool 2">Pool 2</option>
          <option value="pool 3">Pool 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <ul className="list-none mt-6">
        {positions.map((position) => {
          const isSelected = position === selectedPosition;
          return (
            <li
              key={position.name}
              className="flex items-center flex-col justify-between py-4 border-b"
            >
              <div className="flex items-center gap-32 justify-between py-4">
              <span className="font-bold">{position.name}</span>
              <span>{position.amount}</span>
              <button onClick={() => handleCardClick(position)}>
                <FontAwesomeIcon
                  icon={isSelected ? faChevronUp : faChevronDown}
                  className={`text-gray-500 cursor-pointer transform transition-transform duration-300 ${
                    isSelected ? "rotate-180" : ""
                  }`}
                />
              </button>

              </div>
            
              {isSelected && (
                <div className="flex justify-between mt-4">
              <input
                className="border border-gray-300 px-4 py-2 rounded-l w-full"
                type="text"
                placeholder="Enter Amount"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
              />
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-r"
                    onClick={handleWithdrawal}
                  >
                    Withdraw

              </button>
            </div>
          )
          }
        </li>
      );
    })}
  </ul>
</div>

  );
}

export default MyPositions;

