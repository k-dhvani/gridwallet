import Wallet from '../models/wallet.model.js';

// Get wallet details for the current user
export const getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    if (!wallet) {
      return res.status(404).json({ msg: 'Wallet not found' });
    }
    res.json(wallet);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Discharge to grid (earning coins)
export const discharge = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    if (!wallet) {
      return res.status(404).json({ msg: 'Wallet not found' });
    }

    const amountEarned = req.body.amount || 100; // Discharge logic (could be dynamic)
    wallet.balance += amountEarned;

    wallet.transactionHistory.push({
      type: 'credit',
      amount: amountEarned,
    });

    await wallet.save();
    res.json(wallet);
  } catch (error) {
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

    if (wallet.balance < amountToDeduct) {
      return res.status(400).json({ msg: 'Insufficient wallet balance' });
    }

    wallet.balance -= amountToDeduct;

    wallet.transactionHistory.push({
      type: 'debit',
      amount: amountToDeduct,
    });

    await wallet.save();
    res.json(wallet);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
