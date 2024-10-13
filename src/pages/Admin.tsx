import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../lib/supabaseClient"; // Adjust the path to your Supabase client setup
import Image from "../assets/doctor-writing.jpg";
import Logo from "../assets/lwc-logo.png"

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Reset error message
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        console.log("Logged in successfully", data);
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center min-h-screen h-screen">
      <div className="hidden md:block md:w-1/5 lg:w-1/4 h-full shadow-inner">
        <img src={Image} alt="Doctor Writing" className="object-cover h-full w-full" />
      </div>
      <div className=' flex h-screen w-3/4 items-center justify-center relative'>
        <img src={Logo} alt="Logo placeholder" className='absolute top-4 left-2 w-[200px] cursor-pointer' onClick={() => navigate('/')} />
        <div className="w-full md:max-w-[40em] bg-white p-6 rounded-lg justify-center">
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className=''>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-[30px] font-thin">Email</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[40px] px-2 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white text-black text-1xl"
                required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2 text-[30px] font-thin">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[40px] px-4 py-2 border rounded-lg focus:outline-none focus:border-site bg-white text-black"
                required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-site text-white py-2 rounded-lg hover:bg-blue-300 focus:border-none transition-all"
            >
                Log In
            </button>
            </form>
        </div>
        </div>
      </div>
  );
};

export default Admin;
