import { useState } from 'react';

export default function Chatbot() {
  const [activeQuestion, setActiveQuestion] = useState(null); // Track the currently active question

  const qaData = [
    {
      question: "What is a V2G network?",
      answer: "V2G, or Vehicle-to-Grid, refers to a system where plug-in electric vehicles (EVs) interact with the power grid. This system allows EVs to store energy when there is excess power and return electricity back to the grid during peak demand periods. This bidirectional flow helps in stabilizing the power grid, as well as offering financial incentives to EV owners by enabling them to participate in energy markets."
    },
    {
      question: "How does V2G charging work?",
      answer: "V2G charging works by allowing electric vehicles to function not only as transportation devices but also as mobile energy storage units. During off-peak times, when electricity is cheaper and the demand is low, EVs can be charged. During peak times, when the grid is under strain, the EVs can discharge energy back into the grid. This exchange is facilitated through smart charging stations that manage when and how energy is stored or released, benefiting both the grid and the vehicle owner."
    },
    {
      question: "What are the benefits of V2G?",
      answer: "V2G offers several key benefits. For the grid, it helps in balancing energy supply and demand, reducing the need for additional infrastructure. For EV owners, it provides an opportunity to generate revenue by selling stored electricity during high-demand periods. Additionally, V2G can enhance energy efficiency and reduce reliance on non-renewable energy sources by leveraging renewable energy stored in EV batteries. Over time, this creates a more sustainable and flexible energy ecosystem."
    },
    {
      question: "How can I manage charging and discharging in V2G?",
      answer: "Charging and discharging in a V2G network are managed through specialized smart chargers and software platforms. These platforms allow EV owners to set preferences, such as when to charge the vehicle or when to discharge electricity back into the grid. Many systems include features that optimize the timing based on real-time energy prices and demand. Users can control these functions via mobile apps or web interfaces, ensuring their vehicle is always ready for use while still generating income."
    },
    {
      question: "What is GridWallet?",
      answer: "GridWallet is a digital wallet specifically designed for managing financial transactions in a Vehicle-to-Grid (V2G) network. It enables EV owners to track energy inflows and outflows between their vehicle and the grid, converting stored electricity into financial credits. Through GridWallet, users can monitor their energy usage, set preferences for when to sell electricity back to the grid, and accumulate earnings based on the energy they supply. This system creates a streamlined way to manage energy trading and payments in the V2G ecosystem."
    },
    {
      question: "How does GridWallet handle transactions?",
      answer: "GridWallet facilitates secure and efficient financial transactions by recording energy exchanges between electric vehicles and the grid. Every time your EV supplies or receives electricity, GridWallet tracks these flows and assigns a monetary value based on current energy rates. The wallet integrates with energy markets to ensure that you are paid fairly for the energy you return to the grid. It also provides detailed reports on energy transactions and helps users monitor their revenue streams over time."
    },
    {
      question: "What kind of financial rewards can I expect with GridWallet?",
      answer: "The financial rewards you can expect from using GridWallet vary depending on several factors, including your vehicle's battery capacity, the amount of energy you supply to the grid, and the timing of your energy contributions. Typically, you can earn more by selling energy during peak demand periods when electricity prices are higher. Your earnings will also be influenced by local energy market conditions, the number of vehicles participating in V2G services, and the total amount of energy returned to the grid. Over time, these rewards can accumulate, offering a meaningful source of passive income."
    },
    {
      question: "How do I transfer funds from my GridWallet to my bank account?",
      answer: "Transferring funds from GridWallet to your bank account is a simple process. First, you need to link your bank account to your GridWallet by providing the necessary banking details. Once the accounts are connected, you can initiate a transfer of your accumulated earnings from energy transactions. GridWallet also provides transaction history and reporting features, allowing you to monitor past transfers and earnings. In most cases, transfers are processed within a few business days, giving you easy access to your financial rewards."
    },
    {
      question: "How is energy pricing determined in a V2G network?",
      answer: "Energy pricing in a V2G network is influenced by several key factors, such as the time of day, overall grid demand, and the availability of renewable energy sources like solar or wind. During times of high demand, the price of electricity typically rises, offering EV owners greater financial incentives to sell their stored energy. Conversely, during off-peak times, energy prices may drop, making it a more cost-effective period to charge your vehicle. GridWallet automatically tracks these price fluctuations to ensure that you get the most value for your energy contributions."
    },
    {
      question: "Is my data secure with GridWallet?",
      answer: "Yes, GridWallet employs advanced security protocols to protect your data. All financial transactions are encrypted, and your personal information is stored in compliance with industry standards to ensure it remains confidential. GridWallet also provides two-factor authentication (2FA) to prevent unauthorized access to your account. Additionally, users can review all transaction history and receive real-time alerts for any significant account activity, ensuring transparency and security at all times."
    }
  ];
  

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index); // Toggle answer visibility
  };

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h2 className='text-2xl font-semibold text-slate-600 mb-6'>Get to know V2G better</h2>
      <div className='flex flex-col gap-4'>
        {qaData.map((qa, index) => (
          <div key={index} className='bg-gray-200 rounded-lg shadow-md overflow-hidden'>
            <button
              onClick={() => handleQuestionClick(index)}
              className='w-full text-left p-4 bg-gray-300 hover:bg-gray-400 transition-colors duration-200'
            >
              {qa.question}
            </button>
            {activeQuestion === index && (
              <div className='p-4 bg-gray-100'>
                <p className='text-gray-600'>{qa.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
