import { useState } from "react";
import { Book, X, ShoppingCart } from "lucide-react";

const Resources = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const Resources = [
    {
      id: 1,
      title: "Mastering React",
      description: "A complete guide to building apps with React.",
      price: "Kes 15",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Tailwind Magic",
      description: "Design faster with Tailwind CSS best practices.",
      price: "Kes 12",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description: "Everything you need to know about JavaScript.",
      price: "Kes 18",
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleBuy = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-teal-500 rounded-full mb-4">
            <Book className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Available eBooks</h1>
          <p className="text-green-600 max-w-lg mx-auto">
            Discover our collection of educational resources to support your mental wellness journey
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Resources.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-green-900 mb-2">{book.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-green-700 font-bold text-lg">{book.price}</span>
                  <button
                    onClick={() => handleBuy(book)}
                    className="flex items-center bg-gradient-to-r from-green-600 to-teal-500 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-teal-600 transition-all shadow-md"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedBook && (
          <div className="fixed inset-0 flex items-center justify-center p-4 bg- bg-opacity-60 backdrop-blur-sm z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-green-600 to-teal-500 p-5 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Purchase: {selectedBook.title}</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white hover:text-green-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-green-100 mt-1">Complete your purchase below</p>
              </div>

              {/* Modal Form */}
              <form className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <p className="text-xs text-gray-500 text-center">
                  We'll contact you within 24 hours with details on how to receive your eBook
                </p>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg hover:from-green-700 hover:to-teal-600 transition-all shadow-md"
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;