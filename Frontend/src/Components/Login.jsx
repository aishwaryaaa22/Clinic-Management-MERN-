import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', credentials);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            alert("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-tr from-slate-900 via-indigo-900 to-slate-900 p-6">
  
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 transform transition-all duration-500">
                
                
                <div className="text-center mb-10">
                    <div className="inline-block p-3 rounded-2xl bg-indigo-500/20 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Clinic Login</h2>
                    <p className="text-indigo-200/70 mt-2 font-medium">Management Portal Access</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-indigo-300 uppercase ml-1">Username</label>
                        <input 
                            type="text" 
                            placeholder="Enter your username" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-indigo-300/30 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 transition-all"
                            onChange={e => setCredentials({...credentials, username: e.target.value})} 
                            required 
                        />
                    </div>
                    
        
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-indigo-300 uppercase ml-1">Password</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-indigo-300/30 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 transition-all"
                            onChange={e => setCredentials({...credentials, password: e.target.value})} 
                            required 
                        />
                    </div>
      
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all active:scale-95 disabled:opacity-50 flex justify-center items-center"
                    >
                        {loading ? "Submitting...": "Access Dashboard"}
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-indigo-200/50 text-sm">
                        Need access? 
                        <Link to="/register" className="ml-2 text-white font-bold hover:text-indigo-400 transition-colors underline decoration-indigo-500/50 underline-offset-4">
                            Create Staff Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;