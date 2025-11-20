// import React, { useState } from 'react'
// import API from '../api/api'
// import { useNavigate } from 'react-router-dom'

// export default function Register(){
//   const [form, setForm] = useState({ name:'', email:'', password:'', confirm:'' })
//   const navigate = useNavigate()
//   const handle = async (e) =>{
//     e.preventDefault();
//     if(form.password !== form.confirm){ alert('Passwords do not match'); return }
//     try{
//       await API.post('/auth/register', { name: form.name, email: form.email, password: form.password })
//       alert('Registered');
//       navigate('/login')
//     }catch(err){ console.error(err); alert('Error') }
//   }
//   return (
//     <div className="container p-4">
//       <h2 className="text-2xl mb-4">Register</h2>
//       <form onSubmit={handle} className="space-y-2 max-w-sm bg-white p-4 rounded shadow">
//         <input required className="w-full p-2 border" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
//         <input required className="w-full p-2 border" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
//         <input required className="w-full p-2 border" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
//         <input required className="w-full p-2 border" type="password" placeholder="Confirm Password" value={form.confirm} onChange={e=>setForm({...form,confirm:e.target.value})} />
//         <button className="px-4 py-2 bg-green-600 text-white rounded" type="submit">Register</button>
//       </form>
//     </div>
//   )
// }


import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name:"", email:"", password:"", confirm:"" });
  const nav = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    if(form.password !== form.confirm) return alert("Passwords do not match");
    try{
      await API.post("/auth/register", form);
      alert("Account created!");
      nav("/login");
    }catch{
      alert("Error registering.");
    }
  }

  return (
    <div className="container-max py-12 flex justify-center">
      <form onSubmit={handle} className="bg-white p-8 max-w-md w-full rounded-xl shadow-soft space-y-4">

        <h2 className="text-3xl font-bold text-secondary text-center">Register</h2>

        <input className="w-full p-3 border rounded-lg" placeholder="Name" required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>

        <input className="w-full p-3 border rounded-lg" placeholder="Email" required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>

        <input className="w-full p-3 border rounded-lg" placeholder="Password" type="password" required value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>

        <input className="w-full p-3 border rounded-lg" placeholder="Confirm Password" type="password" required value={form.confirm} onChange={(e)=>setForm({...form,confirm:e.target.value})}/>

        <button className="w-full py-3 bg-primary text-white rounded-lg">Create Account</button>

      </form>
    </div>
  );
}
