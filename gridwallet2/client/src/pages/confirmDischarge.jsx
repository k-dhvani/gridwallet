import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaCoins, FaCarBattery } from 'react-icons/fa';

export default function ConfirmDischargePage() {
  const [walletBalance, setWalletBalance] = useState(1000); // Placeholder for wallet balance
  const [redeemedCoins, setRedeemedCoins] = useState(200); // Placeholder for redeemed coins
  const [newBalance, setNewBalance] = useState(walletBalance);

  useEffect(() => {
    // Simulate updating the wallet balance after redeeming coins
    setNewBalance(walletBalance + redeemedCoins);
  }, [walletBalance, redeemedCoins]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
          <FaWallet className="mr-2" /> Wallet Balance & Redeem Confirmation
        </h1>

        <div className="mb-6 text-center">
          <div className="p-6 bg-blue-50 rounded-md shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">Success!</h2>
            <p className="text-gray-700">
              You have successfully redeemed <span className="font-bold">{redeemedCoins}</span> coins.
            </p>
            <p className="text-gray-700">Use these coins for charging your EV next time!</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-md shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-2 flex items-center justify-center text-gray-800">
              <FaCoins className="mr-2" /> Wallet Balance After Redemption
            </h2>
            <div className="text-xl font-bold text-green-600">
              {newBalance} Coins
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/wallet">
            <button
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              View Wallet
            </button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Link to="/charging">
            <button
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center"
            >
              <FaCarBattery className="mr-2" /> Use Coins for Charging
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
