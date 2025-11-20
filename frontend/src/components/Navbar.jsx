// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar(){
//   return (
//     <nav className="p-4 shadow-md bg-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to='/' className="text-xl font-bold">Lost & Found</Link>
//         <div className="space-x-4">
//           <Link to='/lost' className="hover:underline">Lost</Link>
//           <Link to='/found' className="hover:underline">Found</Link>
//           <Link to='/report-lost' className="hover:underline">Report Lost</Link>
//           <Link to='/report-found' className="hover:underline">Report Found</Link>
//           <Link to='/login' className="hover:underline">Login</Link>
//         </div>
//       </div>
//     </nav>
//   )
// }


// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-soft border-b border-gray-100">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link
//           to="/"
//           className="text-2xl font-bold text-primary tracking-wide"
//         >
//           Lost&Found
//         </Link>

//         <div className="flex space-x-6 text-gray-700">
//           <Link className="hover:text-primary font-medium" to="/lost">Lost</Link>
//           <Link className="hover:text-primary font-medium" to="/found">Found</Link>
//           <Link className="hover:text-primary font-medium" to="/report-lost">Report Lost</Link>
//           <Link className="hover:text-primary font-medium" to="/report-found">Report Found</Link>
//           <Link className="hover:text-primary font-medium" to="/login">Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="bg-white shadow-soft sticky top-0 z-30">
//       <div className="container-max flex items-center justify-between h-16">

//         {/* LOGO */}
//         <Link to="/" className="flex items-center space-x-3">
//           <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg 
//                           flex items-center justify-center text-white font-bold">
//             LF
//           </div>
//           <div>
//             <div className="text-lg font-semibold text-secondary">Lost & Found</div>
//             <div className="text-sm text-muted">Campus Recovery Portal</div>
//           </div>
//         </Link>

//         {/* NAVIGATION */}
//         <nav className="flex items-center space-x-6 text-sm">

//           <Link to="/lost-items" className="text-muted hover:text-secondary">
//             Lost
//           </Link>

//           <Link to="/found-items" className="text-muted hover:text-secondary">
//             Found
//           </Link>

//           <Link 
//             to="/report-lost" 
//             className="px-3 py-2 rounded-lg bg-primary text-white hover:opacity-95"
//           >
//             Report Lost
//           </Link>

//           <Link 
//             to="/report-found" 
//             className="px-3 py-2 rounded-lg border border-primary text-primary 
//                        hover:bg-primary hover:text-white transition"
//           >
//             Report Found
//           </Link>

//           {/* LOGIN BUTTON */}
//           <Link 
//             to="/login"
//             className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
//           >
//             Login
//           </Link>

//         </nav>
//       </div>
//     </header>
//   );
// }

// frontend/src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30 border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            LF
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-800">Lost & Found</div>
            <div className="text-sm text-gray-500 -mt-1">Campus Recovery Portal</div>
          </div>
        </Link>

        {/* Navigation */}
        {token && (
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/lost" className="text-gray-600 hover:text-gray-900">
              Lost
            </Link>

            <Link to="/found" className="text-gray-600 hover:text-gray-900">
              Found
            </Link>

            <Link
              to="/report-lost"
              className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Report Lost
            </Link>

            <Link
              to="/report-found"
              className="px-3 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Report Found
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </nav>
        )}

        {!token && (
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
