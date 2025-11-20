// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function ItemCard({ item }){
//   return (
//     <div className="border rounded p-3 bg-white shadow-sm">
//       <img src={item.image || '/placeholder.png'} alt={item.itemName} className="h-48 w-full object-cover rounded" />
//       <h3 className="font-semibold mt-2">{item.itemName}</h3>
//       <p className="text-sm">{item.location} - {item.date ? new Date(item.date).toLocaleDateString() : ''}</p>
//       <p className="text-xs">Status: {item.status}</p>
//       <Link to={`/item/${item._id}`} className="inline-block mt-2 text-blue-600">View Details</Link>
//     </div>
//   )
// }


// import React from "react";
// import { Link } from "react-router-dom";

// export default function ItemCard({ item }) {
//   return (
//     <div className="bg-white shadow-soft border rounded-2xl p-4 hover:shadow-md transition">
//       <img
//         src={item?.image || "/placeholder.png"}
//         alt={item.itemName}
//         className="h-56 w-full object-cover rounded-xl mb-3"
//       />

//       <h3 className="text-lg font-semibold text-secondary">{item.itemName}</h3>

//       <p className="text-sm text-gray-600 mt-1">
//         {item.location} • {item.date ? new Date(item.date).toLocaleDateString() : ""}
//       </p>

//       <span className="inline-block mt-2 px-3 py-1 text-xs bg-primary text-white rounded-full">
//         {item.status}
//       </span>

//       <Link
//         to={`/item/${item._id}`}
//         className="block mt-4 text-primary font-medium hover:underline"
//       >
//         View Details →
//       </Link>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard({ item }){
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden hover:translate-y-1 transform transition">
      <div className="h-56 bg-gray-100">
        <img src={item.image || '/placeholder.png'} alt={item.itemName} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-secondary">{item.itemName}</h3>
            <p className="text-sm text-muted mt-1">{item.location} • {item.date ? new Date(item.date).toLocaleDateString() : ''}</p>
          </div>
          <div>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${item.status==='FOUND' ? 'bg-green-100 text-green-700':'bg-yellow-100 text-yellow-800'}`}>{item.status}</span>
          </div>
        </div>

        <p className="text-sm text-muted mt-3 line-clamp-3">{item.description || 'No description provided.'}</p>

        <div className="mt-4 flex items-center justify-between">
          <Link to={`/item/${item._id}`} className="text-primary font-medium">View details →</Link>
          <button className="text-sm px-3 py-2 bg-gray-50 rounded-lg border">Share</button>
        </div>
      </div>
    </div>
  );
}
