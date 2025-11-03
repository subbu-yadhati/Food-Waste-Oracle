import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');

    axios.get('http://localhost:5000/api/auth/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setUser(res.data))
    .catch(() => {
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="card mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className="text-gray-600">Let's reduce food waste together.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold">Waste Saved</h3>
            <p className="text-3xl font-bold mt-2">12.3 kg</p>
            <p className="text-sm opacity-90">This month</p>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold">Money Saved</h3>
            <p className="text-3xl font-bold mt-2">$48</p>
            <p className="text-sm opacity-90">This month</p>
          </div>
          <div className="bg-gradient-to-br from-teal-400 to-cyan-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold">AI Tips Used</h3>
            <p className="text-3xl font-bold mt-2">28</p>
            <p className="text-sm opacity-90">This week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;