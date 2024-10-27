import Wallet from '../models/wallet.model.js';

// Get wallet details or create a new wallet if not found
export const getWallet = async (req, res) => {
  try {
    // Find the user's wallet
    let wallet = await Wallet.findOne({ user: req.user.id });

    // If no wallet found, create a new one
    if (!wallet) {
      wallet = new Wallet({
        user: req.user.id,
        walletBalance: 0, // Set default balance to 0
        transactionHistory: [], // Start with an empty transaction history
      });
      await wallet.save(); // Save the new wallet
    }
    return res.json({success:true,message:wallet});
  } catch (error) {
    return res.status(500).json({success:false,message:'error in getwallet'+ error});
  }
};


// Discharge to grid (earning coins)
export const discharge = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    if (!wallet) {
      return res.status(404).json({ success:false, message: 'Wallet not found' });
    }

    const { powerAmount } = req.body;
    
    if (!powerAmount || isNaN(powerAmount)) {
      return res.status(400).json({ success:false,message: 'Invalid power amount' });
    }

    // Logic to calculate coins: let's assume 1 kWh gives 10 coins
    const coinsPerKWh = 10;
    const coinsEarned = powerAmount * coinsPerKWh;

    // Update the wallet balance with earned coins
    wallet.walletBalance += coinsEarned;

    // Log the transaction in the wallet's transaction history
    wallet.transactionHistory.push({
      type: 'credit',
      amount: coinsEarned,
      description: `Earned ${coinsEarned} coins for discharging ${powerAmount} kWh`
    });

    // Save the wallet changes
    await wallet.save();

    // Respond with the calculated coins
    // res.json({ calculatedCoins: coinsEarned });
    // Respond with the updated wallet
    return res.json(wallet);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Charge EV (deduct coins)
export const charge = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    if (!wallet) {
      return res.status(404).json({ msg: 'Wallet not found' });
    }

    const amountToDeduct = req.body.amount || 50; // Charge logic (could be dynamic)

    if (wallet.walletBalance < amountToDeduct) {
      return res.status(400).json({ msg: 'Insufficient wallet balance' });
    }

    wallet.walletBalance -= amountToDeduct;

    wallet.transactionHistory.push({
      type: 'debit',
      amount: amountToDeduct,
    });

    await wallet.save();
    return res.status(200).json(wallet);
  } catch (error) {
    return res.status(500).send('Server Error');
  }
};
