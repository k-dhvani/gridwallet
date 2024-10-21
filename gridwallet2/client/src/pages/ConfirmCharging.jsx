import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ConfirmCharging() {
  const location = useLocation();
  
  // Fallback for handling missing state
  const {
    price = 500, // Default value if price is not passed
    walletBalance = 0, // Default wallet balance
  } = location.state || {};

  const [walletUsed, setWalletUsed] = useState(0);
  const [finalAmount, setFinalAmount] = useState(price);

  // Handle using wallet balance
  const handleWalletUse = (e) => {
    const walletValue = parseFloat(e.target.value) || 0;

    // Ensure wallet used is not more than balance or price
    const validWalletUsed = Math.min(walletValue, walletBalance, price);

    setWalletUsed(validWalletUsed);
    setFinalAmount(price - validWalletUsed);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Confirm Your Charging Payment
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Charging Amount: ₹{price}</h2>
        </div>

        {/* Wallet Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Wallet Balance: ₹{walletBalance}</h3>
          <label className="block text-gray-700 mt-4">
            Enter amount to use from wallet:
          </label>
          <input
            type="number"
            value={walletUsed}
            onChange={handleWalletUse}
            className="mt-2 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="0"
          />
          <p className="mt-2 text-gray-600">
            Wallet used: ₹{walletUsed} | Remaining to pay: ₹{finalAmount}
          </p>
        </div>

        {/* Payment Options */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Choose Payment Method</h2>
          <div className="mt-4">
            <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Pay with UPI
            </button>
            <button className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mt-4">
              Pay with Credit/Debit Card
            </button>
            <button className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 mt-4">
              Pay with Net Banking
            </button>
          </div>
        </div>

        {/* Confirm Payment Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Confirm Payment of ₹{finalAmount}
          </button>
        </div>
      </div>
    </div>
  );
}
