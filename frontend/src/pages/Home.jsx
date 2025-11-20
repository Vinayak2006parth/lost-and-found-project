// import React, { useEffect, useState } from 'react'
// import API from '../api/api'
// import ItemCard from '../components/ItemCard'

// export default function Home(){
//   const [items, setItems] = useState([])
//   useEffect(()=>{ fetchItems() },[])
//   const fetchItems = async ()=>{
//     try{
//       const res = await API.get('/items?limit=8')
//       setItems(res.data)
//     }catch(err){ console.error(err) }
//   }
//   return (
//     <div className="container mx-auto p-4">
//       <header className="text-center my-8">
//         <h1 className="text-3xl font-bold">Find What You Lost, Return What You Found</h1>
//       </header>
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {items.map(i => <ItemCard key={i._id} item={i} />)}
//       </section>
//     </div>
//   )
// }

// 
// import React, { useEffect, useState } from 'react';
// import API from '../api/api';
// import ItemCard from '../components/ItemCard';

// export default function Home(){
//   const [items, setItems] = useState([]);
//   useEffect(()=>{ fetchItems() },[]);
//   const fetchItems = async ()=>{ try{ const res = await API.get('/items?limit=9'); setItems(res.data); }catch(e){ console.error(e); } }

//   return (
//     <div>
//       <section className="bg-gradient-to-r from-white to-surface py-20">
//         <div className="container-max text-center">
//           <h1 className="text-4xl font-extrabold text-secondary">Find lost items or return found ones — fast.</h1>
//           <p className="text-muted mt-3 max-w-2xl mx-auto">Secure, simple, and built for campus communities. Post an item in seconds and help reunite belongings.</p>

//           <div className="mt-8 flex items-center justify-center space-x-3">
//             <a href="/report-lost" className="px-5 py-3 bg-primary text-white rounded-lg shadow">Report Lost</a>
//             <a href="/report-found" className="px-5 py-3 border rounded-lg">Report Found</a>
//           </div>
//         </div>
//       </section>

//       <main className="container-max py-12">
//         <h2 className="text-2xl font-semibold text-secondary mb-6">Recently added</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {items.map(i=> <ItemCard key={i._id} item={i} />)}
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import API from "../api/api";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await API.get("/items?limit=9");
      setItems(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Find lost items or return found ones — fast.
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Secure, simple, and built for campus communities. Post an item in seconds
            and help reunite belongings with their rightful owners.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/report-lost"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Report Lost
            </a>

            <a
              href="/report-found"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Report Found
            </a>
          </div>
        </div>
      </section>

      {/* RECENT ITEMS */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Recently added
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-600 text-center mt-10">No items added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((i) => (
              <ItemCard key={i._id} item={i} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
