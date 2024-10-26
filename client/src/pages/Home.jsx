import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [v2gNews, setV2gNews] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);

  useEffect(() => {
    const fetchV2GNews = async () => {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=vehicle-to-grid&apiKey=eff95c5d0aa94b2f93c26d3197935f4a"
        );
        const data = await res.json();
        setV2gNews(data.articles.slice(0, 6)); // Show only the latest 6 articles
      } catch (error) {
        console.log(error);
      }
    };

    fetchV2GNews();
  }, []);

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  const closeDetails = () => {
    setSelectedBox(null);
  };

  // Updated boxes data with detailed descriptions and image URLs
  const boxesData = [
    {
      title: "GridWallet Hub",
      description: "Access all your V2G services in one place.",
      detailedDescription: "GridWallet Hub allows you to manage all your vehicle-to-grid services efficiently, ensuring seamless transactions and monitoring.",
      imageUrl: "https://cdn.chimpify.net/60dec449a8587288798b4587/2022/09/V2G-3.png", // Replace with actual image URL
    },
    {
      title: "Charging Stations",
      description: "Find and book charging stations nearby.",
      detailedDescription: "Our Charging Stations feature helps you locate and reserve charging stations in your vicinity, ensuring you never run out of power.",
      imageUrl: "https://tridenstechnology.com/wp-content/uploads/2022/05/V2G-vehicle-to-grid-1.jpg", // Replace with actual image URL
    },
    {
      title: "Energy Management",
      description: "Manage your energy transactions with ease.",
      detailedDescription: "The Energy Management tool allows users to monitor and optimize their energy transactions, maximizing savings.",
      imageUrl: "https://www.tokyocentury.co.jp/tc-news-en/cms/assets/uploads/Article41-img-05.jpg", // Replace with actual image URL
    },
    {
      title: "Customized Solutions",
      description: "Tailored solutions for all your energy needs.",
      detailedDescription: "Get access to customized energy solutions tailored specifically for your needs, enhancing your overall experience.",
      imageUrl: "https://media.licdn.com/dms/image/D4D12AQHHFUxyW6t0BQ/article-cover_image-shrink_600_2000/0/1680640728436?e=2147483647&v=beta&t=BftXsfFUEAaxwFErOMaL_Pafg0B9XA8zrJ2Wr_wHUyg", // Replace with actual image URL
    },
  ];

  return (
    <div>
      {/* Top section */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Turn energy into <span className="text-slate-500">opportunity</span>
          <br />
          and fuel your savings with{" "}
          <span className="text-slate-400">GridWallet</span>
        </h1>
        <div className="text-gray-600 text-xs sm:text-sm">
          GridWallet is the go-to solution for seamless energy transactions in
          the V2G network.
          <br />
          Discover a variety of tools to help you earn more and save smarter
          with your electric vehicle.
        </div>
        <div className="flex space-x-4">
          <Link
            to={"/chatbot"}
            className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
          >
            New to V2G??
          </Link>
          <Link
            to={"/wallet"}
            className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
          >
            Let's get started...
          </Link>
        </div>
      </div>

      {/* Four boxes section */}
      <div className="max-w-6xl mx-auto p-3 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {boxesData.map((box, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 text-center rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleBoxClick(box)}
          >
            <h3 className="text-xl font-bold mb-4">{box.title}</h3>
            <p className="text-gray-600">{box.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for detailed description */}
      {selectedBox && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">{selectedBox.title}</h2>
            {selectedBox.imageUrl && (
              <img
                src={selectedBox.imageUrl}
                alt={selectedBox.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <p className="text-gray-600 mb-4">{selectedBox.detailedDescription}</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={closeDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Latest in V2G Section */}
      <div className="max-w-6xl mx-auto p-3 my-10">
        <h2 className="text-2xl font-semibold text-slate-600 mb-6">
          Latest in V2G
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {v2gNews.length > 0 ? (
            v2gNews.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 font-bold text-lg hover:underline block mb-2"
                >
                  {article.title}
                </a>
                <p className="text-gray-600 text-sm mb-3">
                  {article.description}
                </p>
                <span className="text-gray-500 text-xs">
                  {new Date(article.publishedAt).toLocaleDateString()} |{" "}
                  {article.source.name}
                </span>
              </div>
            ))
          ) : (
            <p>No recent V2G news available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
