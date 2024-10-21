import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const walletSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  transactionHistory: [
    {
      type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, { timestamps: true });

export default mongoose.model('Wallet', walletSchema);
