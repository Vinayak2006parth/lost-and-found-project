// import React, { useState } from 'react'
// import API from '../api/api'

// export default function ReportFound(){
//   const [form, setForm] = useState({ itemName:'', category:'', description:'', location:'', date:'' })
//   const [image, setImage] = useState(null)
//   const handleSubmit = async (e) =>{
//     e.preventDefault();
//     try{
//       const data = new FormData();
//       Object.keys(form).forEach(k=>data.append(k, form[k]));
//       if(image) data.append('image', image);
//       await API.post('/items/report-found', data, { headers: { 'Content-Type': 'multipart/form-data' } });
//       alert('Reported');
//       setForm({ itemName:'', category:'', description:'', location:'', date:'' })
//       setImage(null)
//     }catch(err){ console.error(err); alert('Error') }
//   }
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl mb-4">Report Found Item</h2>
//       <form onSubmit={handleSubmit} className="space-y-3 max-w-lg bg-white p-4 rounded shadow">
//         <input required className="w-full p-2 border" placeholder="Item Name" value={form.itemName} onChange={e=>setForm({...form,itemName:e.target.value})} />
//         <input className="w-full p-2 border" placeholder="Category" value={form.category} onChange={e=>setForm({...form,category:e.target.value})} />
//         <textarea className="w-full p-2 border" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
//         <input className="w-full p-2 border" placeholder="Location Found" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} />
//         <input className="w-full p-2 border" type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} />
//         <input className="w-full" type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])} />
//         <button className="px-4 py-2 bg-green-600 text-white rounded" type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }


// import React, { useState } from "react";
// import API from "../api/api";

// export default function ReportFound() {
//   const [form, setForm] = useState({
//     itemName: "",
//     category: "",
//     description: "",
//     location: "",
//     date: "",
//     contactInfo: ""
//   });

//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();
//       Object.keys(form).forEach((k) => data.append(k, form[k]));
//       if (image) data.append("image", image);

//       await API.post("/items/report-found", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Found item reported!");

//       setForm({ itemName: "", category: "", description: "", location: "", date: "", contactInfo: "" });
//       setImage(null);

//     } catch (err) {
//       console.error(err);
//       alert("Error reporting item.");
//     }
//   };

//   return (
//     <div className="container-max py-12">
//       <h2 className="text-3xl font-bold text-secondary mb-6">Report Found Item</h2>

//       <form onSubmit={handleSubmit} className="max-w-xl bg-white p-6 rounded-xl shadow-soft space-y-4">

//         <input className="w-full p-3 border border-gray-200 rounded-lg" required placeholder="Item Name" value={form.itemName} onChange={(e)=>setForm({...form,itemName:e.target.value})}/>

//         <input className="w-full p-3 border border-gray-200 rounded-lg" placeholder="Category" value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}/>

//         <textarea className="w-full p-3 border border-gray-200 rounded-lg" placeholder="Description" rows="3" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}/>

//         <input className="w-full p-3 border border-gray-200 rounded-lg" placeholder="Location Found" value={form.location} onChange={(e)=>setForm({...form,location:e.target.value})}/>

//         <input type="date" className="w-full p-3 border border-gray-200 rounded-lg" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})}/>

//         <input className="w-full p-3 border border-gray-200 rounded-lg" placeholder="Contact Info" value={form.contactInfo} onChange={(e)=>setForm({...form,contactInfo:e.target.value})}/>

//         <input type="file" accept="image/*" onChange={(e)=>setImage(e.target.files[0])} />

//         <button className="w-full py-3 bg-primary text-white rounded-lg text-lg">Submit Found Report</button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import API from "../api/api";

export default function ReportFound() {
  const [form, setForm] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    date: "",
    contactInfo: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const submitFound = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(form).forEach((key) => data.append(key, form[key]));
      if (image) data.append("image", image);

      await API.post("/items/report-found", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Found item submitted successfully!");

      setForm({
        itemName: "",
        category: "",
        description: "",
        location: "",
        date: "",
        contactInfo: "",
      });
      setPreview("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Error submitting item.");
    }
  };

  return (
    <div className="container-max py-12">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-soft">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          Report Found Item
        </h2>

        <form onSubmit={submitFound} className="space-y-5">

          <div>
            <label className="text-sm font-semibold text-secondary">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              value={form.itemName}
              onChange={(e) =>
                setForm({ ...form, itemName: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="What did you find?"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-secondary">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              required
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Electronics / Bag / ID Card / Other"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-secondary">
              Description
            </label>
            <textarea
              rows="3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Describe the condition or unique identifiers"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-semibold text-secondary">
              Found Location
            </label>
            <input
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Where did you find it?"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-secondary">
              Date Found
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-secondary">
              Contact Info <span className="text-red-500">*</span>
            </label>
            <input
              required
              value={form.contactInfo}
              onChange={(e) =>
                setForm({ ...form, contactInfo: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Phone or Email"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-secondary">
              Upload Item Image (optional)
            </label>
            <div className="mt-2 p-4 bg-gray-50 border border-gray-300 rounded-xl text-center cursor-pointer">
              <input type="file" accept="image/*" onChange={handleImage} />

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="mt-4 rounded-xl h-40 w-full object-cover"
                />
              )}
            </div>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-lg text-lg">
            Submit Found Report
          </button>
        </form>
      </div>
    </div>
  );
}
