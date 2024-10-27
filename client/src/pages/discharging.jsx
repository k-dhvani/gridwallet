import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCity, FaMapMarkerAlt, FaChargingStation, FaCoins } from 'react-icons/fa';

export default function DischargingPage() {
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [station, setStation] = useState('');
  const [powerAmount, setPowerAmount] = useState('');
  const [coins, setCoins] = useState(0);
  const [error, setError] = useState(null); // New state for error handling
  const [loading, setLoading] = useState(false); // New state for loading indicator

  const handleDischargeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Prepare the data to be sent to the backend
    const requestData = {
      city,
      area,
      station,
      powerAmount: parseFloat(powerAmount) // Ensure it's a number
    };

    try {
      // Replace with your actual API endpoint for calculating coins
      const response = await fetch('/wallet/discharging', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Failed to calculate coins. Please try again.');
      }

      const data = await response.json();
      setCoins(data.calculatedCoins); // Assumes API returns { calculatedCoins: <value> }
      
    } catch (err) {
      setError(err.message); // Set error message if something goes wrong
    } finally {
      setLoading(false); // Stop the loading indicator after request completes
    }
  };

  const handleRedeemCoins = async () => {
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual API endpoint for redeeming coins
      const response = await fetch('/api/redeem-coins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coins }),
      });

      if (!response.ok) {
        throw new Error('Failed to redeem coins. Please try again.');
      }

      // Optionally, you can fetch the updated wallet balance after redeeming
      const balanceResponse = await fetch('/api/get-wallet-balance');
      const balanceData = await balanceResponse.json();

      // Update the state or context with the new balance if needed
      // Example: setWalletBalance(balanceData.newBalance);
      
      // Reset the coins state if desired
      setCoins(0);
      
    } catch (err) {
      setError(err.message); // Set error message if something goes wrong
    } finally {
      setLoading(false); // Stop the loading indicator after request completes
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
          <FaChargingStation className="mr-2" /> 
          Vehicle-to-Grid Discharging
        </h1>

        <form onSubmit={handleDischargeSubmit}>
          {/* Select City */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 flex items-center">
              <FaCity className="mr-2" /> Select City
            </label>
            <select
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="" disabled>Select your city</option>
              <option value="City A">City A</option>
              <option value="City B">City B</option>
              <option value="City C">City C</option>
            </select>
          </div>

          {/* Select Area */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Select Area
            </label>
            <select
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            >
              <option value="" disabled>Select your area</option>
              <option value="Area X">Area X</option>
              <option value="Area Y">Area Y</option>
              <option value="Area Z">Area Z</option>
            </select>
          </div>

          {/* Select Charging Station */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 flex items-center">
              <FaChargingStation className="mr-2" /> Select Charging Station
            </label>
            <select
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={station}
              onChange={(e) => setStation(e.target.value)}
              required
            >
              <option value="" disabled>Select charging station</option>
              <option value="Station 1">Station 1</option>
              <option value="Station 2">Station 2</option>
              <option value="Station 3">Station 3</option>
            </select>
          </div>

          {/* Power Amount (kWh) */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Enter Power Amount (kWh)</label>
            <input
              type="number"
              min="1"
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
              placeholder="Enter the amount of power (kWh)"
              value={powerAmount}
              onChange={(e) => setPowerAmount(e.target.value)}
              required
            />
          </div>

          {/* Redeem Coins */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 flex items-center">
              <FaCoins className="mr-2" /> Redeemable Balance
            </label>
            <div className="text-lg font-bold text-green-600">
              {loading ? 'Calculating...' : coins > 0 ? `${coins} Coins` : '-'}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            {loading ? 'Calculating...' : 'Calculate Coins'}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-red-600">
            <p>{error}</p>
          </div>
        )}

        {/* Summary and Proceed to Redeem */}
        {coins > 0 && !loading && (
          <div className="mt-6">
            <div className="p-4 bg-blue-50 rounded-md shadow-md mb-6">
              <h2 className="text-lg font-semibold mb-2">Discharge Summary</h2>
              <p className="text-gray-700">City: {city}</p>
              <p className="text-gray-700">Area: {area}</p>
              <p className="text-gray-700">Station: {station}</p>
              <p className="text-gray-700">Power Discharged: {powerAmount} kWh</p>
              <p className="text-gray-700">Coins Earned: {coins}</p>
            </div>
            <div className="text-center">
              <button
                onClick={handleRedeemCoins}
                className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700"
              >
                Proceed to Redeem
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
