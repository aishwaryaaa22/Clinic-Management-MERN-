import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({ 
        fullName: '', email: '', username: '', password: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/auth/register', form);
            alert("Staff Registration Successful!");
            navigate('/');
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br  from-slate-900 via-indigo-900 to-slate-900 p-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 w-full max-w-2xl rounded-3xl shadow-2xl p-8 lg:p-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white">Staff Onboarding</h2>
                    <p className="text-indigo-300/60 text-sm">Fill in the details to create a new medical account.</p>
                </div>

                <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="md:col-span-2">
                        <label className="text-xs font-bold text-indigo-300 uppercase block mb-2">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Aishwarya sharma"
                            onChange={e => setForm({...form, fullName: e.target.value})} 
                            required 
                        />
                    </div>

        
                    <div>
                        <label className="text-xs font-bold text-indigo-300 uppercase block mb-2">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="aishwarya056789@gmail.com"
                            onChange={e => setForm({...form, email: e.target.value})} 
                            required 
                        />
                    </div>

                    
                    <div>
                        <label className="text-xs font-bold text-indigo-300 uppercase block mb-2">Username</label>
                        <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="aish123"
                            onChange={e => setForm({...form, username: e.target.value})} 
                            required 
                        />
                    </div>

                    
                    <div>
                        <label className="text-xs font-bold text-indigo-300 uppercase block mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="••••••••"
                            onChange={e => setForm({...form, password: e.target.value})} 
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="md:col-span-2 mt-4 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl text-white font-bold shadow-lg shadow-indigo-500/30 transition-all active:scale-95 disabled:opacity-50"
                    >
                        {loading ? "Registering..." : "Complete Registration"}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link to="/" className="text-indigo-300/50 hover:text-white text-sm transition-colors">
                        ← Back to Staff Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;