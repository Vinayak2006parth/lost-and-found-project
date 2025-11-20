// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import API from '../api/api'

// export default function ItemDetails(){
//   const { id } = useParams()
//   const [item, setItem] = useState(null)
//   useEffect(()=>{ if(id) fetchItem() },[id])
//   const fetchItem = async ()=>{
//     try{
//       const res = await API.get(`/items/${id}`)
//       setItem(res.data)
//     }catch(err){ console.error(err) }
//   }
//   if(!item) return <div className='p-4'>Loading...</div>
//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white p-4 rounded shadow max-w-3xl">
//         <img src={item.image || '/placeholder.png'} className="w-full h-96 object-cover rounded" alt={item.itemName} />
//         <h2 className="text-2xl font-bold mt-4">{item.itemName}</h2>
//         <p className="mt-2">{item.description}</p>
//         <p className="mt-2">Location: {item.location}</p>
//         <p className="mt-2">Status: {item.status}</p>
//       </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../api/api'

export default function ItemDetails(){
  const { id } = useParams()
  const [item, setItem] = useState(null)
  useEffect(()=>{ if(id) fetchItem() },[id])
  const fetchItem = async ()=>{ try{ const res = await API.get(`/items/${id}`); setItem(res.data);}catch(e){console.error(e)} }
  if(!item) return <div className='p-8'>Loading...</div>
  return (
    <div className="container-max py-12">
      <div className="bg-white rounded-xl shadow-soft p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <img src={item.image || '/placeholder.png'} className="w-full h-96 object-cover rounded-lg" alt={item.itemName} />
        </div>
        <div className="p-2">
          <h1 className="text-2xl font-bold text-secondary">{item.itemName}</h1>
          <p className="text-muted mt-2">{item.description}</p>
          <div className="mt-4">
            <p><strong>Location:</strong> {item.location}</p>
            <p className="mt-1"><strong>Date:</strong> {item.date ? new Date(item.date).toLocaleDateString() : '—'}</p>
            <p className="mt-1"><strong>Status:</strong> {item.status}</p>
            <p className="mt-3"><strong>Contact:</strong> {item.contactInfo || 'Not provided'}</p>
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="px-4 py-2 bg-primary text-white rounded-lg">Claim</button>
            <button className="px-4 py-2 border rounded-lg">Report Issue</button>
          </div>
        </div>
      </div>
    </div>
  )
}
