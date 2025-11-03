import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 bg-[var(--tw-bg-opacity)] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        {/* Logo + Title */}
        <div className="mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Food Waste <span className="text-green-600">Oracle</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered insights to reduce household food waste, save money, and help the planet.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link to="/register" className="btn-primary text-lg">
            Get Started Free
          </Link>
          <Link to="/login" className="btn-secondary text-lg">
            Login
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500">
          <div>Reduces waste by 40%</div>
          <div>Used by 10k+ families</div>
          <div>Backed by UN SDG 12.3</div>
        </div>
      </div>
    </div>
  );
};

export default Home;