// import React, { useEffect, useState } from 'react'
// import API from '../api/api'
// import ItemCard from '../components/ItemCard'

// export default function FoundItems(){
//   const [items, setItems] = useState([])
//   useEffect(()=>{ fetchItems() },[])
//   const fetchItems = async ()=>{
//     try{
//       const res = await API.get('/items?status=FOUND')
//       setItems(res.data)
//     }catch(err){ console.error(err) }
//   }
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl mb-4">Found Items</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {items.map(i => <ItemCard key={i._id} item={i} />)}
//       </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from "react";
import API from "../api/api";
import ItemCard from "../components/ItemCard";

export default function FoundItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await API.get("/items?status=FOUND");
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container-max py-12">
      <h2 className="text-3xl font-bold text-secondary mb-6">
        Found Items
      </h2>

      {items.length === 0 && (
        <div className="text-muted text-lg mt-10 text-center">
          No found items uploaded yet.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <ItemCard key={i._id} item={i} />
        ))}
      </div>
    </div>
  );
}
