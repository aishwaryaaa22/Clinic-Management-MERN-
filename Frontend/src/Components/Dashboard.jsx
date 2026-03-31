import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', contact: '', date: '', reason: '' });

  const getPatients = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/patients', {
      headers: { 'x-auth-token': token }
    });
    setPatients(res.data);
  };

  useEffect(() => { getPatients(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/api/patients', form, {
      headers: { 'x-auth-token': token }
    });
    getPatients();
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-8 font-sans">
        <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="flex flex-col md:flex-row justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-xl gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white leading-tight">Clinic Portal</h1>
                        <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest">Medical Management</p>
                    </div>
                </div>
                <button 
                    onClick={() => {localStorage.removeItem('token'); window.location.href='/'}} 
                    className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-6 py-3 rounded-xl border border-red-500/20 transition-all font-bold text-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-linear-to-br from-indigo-600 to-indigo-700 p-6 rounded-3xl shadow-lg shadow-indigo-500/20">
                    <p className="text-indigo-100 text-sm font-semibold uppercase">Total Patients</p>
                    <h2 className="text-4xl font-black text-white mt-2">{patients.length}</h2>
                </div>
               
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                
                <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md h-fit sticky top-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-10 w-1 bg-indigo-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-white">Register Patient</h3>
                    </div>
                    
                    <form onSubmit={handleAdd} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1 tracking-tighter">Full Name</label>
                            <input className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="e.g. Aishwarya sharma" onChange={e => setForm({...form, name: e.target.value})} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1 tracking-tighter">Age</label>
                            <input className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="e.g. 21" type="number" onChange={e => setForm({...form, age: e.target.value})} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1 tracking-tighter">Appointment Date</label>
                            <input className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" type="date" onChange={e => setForm({...form, date: e.target.value})} />
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-black text-white shadow-xl shadow-indigo-600/30 transition-all active:scale-95 mt-4">
                            ADD TO QUEUE
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
                    <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-white">Current Appointments</h3>
                        <span className="text-[10px] bg-indigo-500 text-white px-3 py-1 rounded-full font-bold uppercase">Real-time</span>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-800/50 text-indigo-300 text-[10px] uppercase font-black tracking-widest">
                                <tr>
                                    <th className="px-8 py-5">Patient Name</th>
                                    <th className="px-8 py-5 text-center">Age</th>
                                    <th className="px-8 py-5">Scheduled For</th>
                                    <th className="px-8 py-5 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {patients.length > 0 ? patients.map(p => (
                                    <tr key={p._id} className="group hover:bg-indigo-500/5 transition-colors">
                                        <td className="px-8 py-5 font-bold text-white group-hover:text-indigo-400 transition-colors">{p.name}</td>
                                        <td className="px-8 py-5 text-center font-mono text-slate-400">{p.age} yrs</td>
                                        <td className="px-8 py-5 text-indigo-400 font-mono text-sm">{p.date}</td>
                                        <td className="px-8 py-5 text-right">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black rounded-lg border border-emerald-500/20 uppercase tracking-tighter">
                                                <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                                                Confirmed
                                            </span>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="4" className="px-8 py-20 text-center text-slate-500 font-medium italic">
                                            No patients registered in the system yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
);
};

export default Dashboard;
