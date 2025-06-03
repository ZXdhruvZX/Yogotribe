import { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch fact.');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 transition-all">
        <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
          <h1 className="text-2xl font-bold text-purple-300 mb-4">🐱 Cat Facts</h1>

          <button
            onClick={fetchCatFact}
            className="bg-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Get Cat Fact
          </button>

          <div className="mt-6 text-gray-200 text-lg min-h-[4rem]">
            {loading ? (
              <div className="flex justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              </div>
            ) : (
              fact
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
