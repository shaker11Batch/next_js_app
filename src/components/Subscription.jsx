export default function Subscription() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Subscribed with:", email);
    e.target.reset();
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Image + Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Subscribe"
            className="rounded-2xl shadow-lg mb-6 w-full max-w-md"
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Stay Connected with Us!
          </h2>
          <p className="text-gray-600 max-w-md">
            Subscribe to our newsletter and get the latest news, exclusive
            offers, and special updates delivered straight to your inbox.
          </p>
        </div>

        {/* Right Side: Subscription Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Join Our Newsletter
          </h3>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
