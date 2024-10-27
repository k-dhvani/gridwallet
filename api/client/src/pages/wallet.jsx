import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaArrowDown, FaArrowUp } from "react-icons/fa";
import axios from "axios";

const WalletPage = () => {
  const [balance, setBalance] = useState(0); // Default balance
  const [transactionHistory, setTransactionHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch wallet data on component mount
    const fetchWalletData = async () => {
      try {
<<<<<<< HEAD
        const res = await axios.get("/api/wallet", {
=======
        const res = await axios.get("/wallet", {
>>>>>>> origin/fix/wallet
          headers: { "x-auth-token": localStorage.getItem("token") },
        });
        setBalance(res.data.balance);
        setTransactionHistory(res.data.transactionHistory);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWalletData();
  }, []);

  const handleDischarge = async () => {
    try {
      const res = await axios.post(
        "/api/wallet/discharging",
        { amount: 100 }, // Example discharge amount
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      );
      setBalance(res.data.balance);
      setTransactionHistory(res.data.transactionHistory);
      navigate("/discharging");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCharge = async () => {
    try {
      const res = await axios.post(
        "/api/wallet/charging",
        { amount: 50 }, // Example charge amount
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      );
      setBalance(res.data.balance);
      setTransactionHistory(res.data.transactionHistory);
      navigate("/charging");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Wallet</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md transition transform hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800">Balance: ${balance}</h2>

        <div className="mt-4 flex justify-between">
          <button
            className="bg-green-500 text-white flex items-center py-2 px-4 rounded-lg transition duration-300 hover:bg-green-600"
            onClick={handleDischarge}
          >
            <FaArrowUp className="mr-2" /> Discharge to Grid
          </button>

          <button
            className="bg-red-500 text-white flex items-center py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600"
            onClick={handleCharge}
          >
            <FaArrowDown className="mr-2" /> Charge EV
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4">Transaction History</h2>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        {transactionHistory.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          <ul>
            {transactionHistory.map((transaction, index) => (
              <li key={index} className="mb-4">
                {transaction.type === "credit" ? (
                  <span className="text-green-600">
                    +${transaction.amount} (Discharge)
                  </span>
                ) : (
                  <span className="text-red-600">
                    -${transaction.amount} (Charge)
                  </span>
                )}
                <br />
                <small>{new Date(transaction.date).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WalletPage;
