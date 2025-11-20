// // // import React from 'react';
// // // import { Routes, Route, Navigate } from 'react-router-dom';
// // // import Navbar from './components/Navbar';

// // // import Home from './pages/Home';
// // // import LostItems from './pages/LostItems';
// // // import FoundItems from './pages/FoundItems';
// // // import ReportLost from './pages/ReportLost';
// // // import ReportFound from './pages/ReportFound';
// // // import ItemDetails from './pages/ItemDetails';
// // // import Login from './pages/Login';
// // // import Register from './pages/Register';

// // // import ProtectedRoute from './components/ProtectedRoute';

// // // // CHECK IF LOGGED IN
// // // const isLoggedIn = () => {
// // //   return localStorage.getItem("token") ? true : false;
// // // };

// // // export default function App() {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50">

// // //       {/* SHOW NAVBAR ONLY WHEN LOGGED IN */}
// // //       {isLoggedIn() && <Navbar />}

// // //       <Routes>

// // //         {/* LOGIN + REGISTER — always accessible */}
// // //         <Route
// // //           path="/login"
// // //           element={
// // //             isLoggedIn() ? <Navigate to="/" /> : <Login />
// // //           }
// // //         />

// // //         <Route
// // //           path="/register"
// // //           element={
// // //             isLoggedIn() ? <Navigate to="/" /> : <Register />
// // //           }
// // //         />

// // //         {/* PROTECTED PAGES */}
// // //         <Route
// // //           path="/"
// // //           element={
// // //             <ProtectedRoute>
// // //               <Home />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         <Route
// // //           path="/lost"
// // //           element={
// // //             <ProtectedRoute>
// // //               <LostItems />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         <Route
// // //           path="/found"
// // //           element={
// // //             <ProtectedRoute>
// // //               <FoundItems />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         <Route
// // //           path="/report-lost"
// // //           element={
// // //             <ProtectedRoute>
// // //               <ReportLost />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         <Route
// // //           path="/report-found"
// // //           element={
// // //             <ProtectedRoute>
// // //               <ReportFound />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         <Route
// // //           path="/item/:id"
// // //           element={
// // //             <ProtectedRoute>
// // //               <ItemDetails />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         <Route
// // //           path="/dashboard"
// // //           element={
// // //             <ProtectedRoute>
// // //               <div className="p-4">Dashboard</div>
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         {/* Any unknown route → Redirect to login */}
// // //         <Route path="*" element={<Navigate to="/login" />} />

// // //       </Routes>

// // //     </div>
// // //   );
// // // }

// // // frontend/src/App.jsx
// // import React from 'react';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './pages/Home';
// // import LostItems from './pages/LostItems';
// // import FoundItems from './pages/FoundItems';
// // import ReportLost from './pages/ReportLost';
// // import ReportFound from './pages/ReportFound';
// // import ItemDetails from './pages/ItemDetails';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // import ProtectedRoute from './components/ProtectedRoute';

// // const isLoggedIn = () => !!localStorage.getItem("token");

// // export default function App(){
// //   return (
// //     <BrowserRouter>
// //       <div className="min-h-screen bg-gray-50">
// //         {isLoggedIn() && <Navbar />}

// //         <Routes>
// //           {/* Auth */}
// //           <Route path="/login" element={isLoggedIn() ? <Navigate to="/" /> : <Login />} />
// //           <Route path="/register" element={isLoggedIn() ? <Navigate to="/" /> : <Register />} />

// //           {/* Protected: require login */}
// //           <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
// //           <Route path="/lost" element={<ProtectedRoute><LostItems /></ProtectedRoute>} />
// //           <Route path="/found" element={<ProtectedRoute><FoundItems /></ProtectedRoute>} />
// //           <Route path="/report-lost" element={<ProtectedRoute><ReportLost /></ProtectedRoute>} />
// //           <Route path="/report-found" element={<ProtectedRoute><ReportFound /></ProtectedRoute>} />
// //           <Route path="/item/:id" element={<ProtectedRoute><ItemDetails /></ProtectedRoute>} />

// //           {/* fallback */}
// //           <Route path="*" element={<Navigate to="/login" replace />} />
// //         </Routes>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }


// // frontend/src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import LostItems from "./pages/LostItems";
// import FoundItems from "./pages/FoundItems";
// import ReportLost from "./pages/ReportLost";
// import ReportFound from "./pages/ReportFound";
// import ItemDetails from "./pages/ItemDetails";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import ProtectedRoute from "./components/ProtectedRoute";

// const isLoggedIn = () => !!localStorage.getItem("token");

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gray-50">

//         {/* Show navbar only if logged in */}
//         {isLoggedIn() && <Navbar />}

//         <Routes>
//           {/* Login allowed only when not logged in */}
//           <Route 
//             path="/login" 
//             element={isLoggedIn() ? <Navigate to="/" /> : <Login />} 
//           />

//           <Route 
//             path="/register" 
//             element={isLoggedIn() ? <Navigate to="/" /> : <Register />} 
//           />

//           {/* Protected pages */}
//           <Route 
//             path="/" 
//             element={<ProtectedRoute><Home /></ProtectedRoute>} 
//           />
          
//           <Route 
//             path="/lost" 
//             element={<ProtectedRoute><LostItems /></ProtectedRoute>} 
//           />

//           <Route 
//             path="/found" 
//             element={<ProtectedRoute><FoundItems /></ProtectedRoute>} 
//           />

//           <Route 
//             path="/report-lost" 
//             element={<ProtectedRoute><ReportLost /></ProtectedRoute>} 
//           />

//           <Route 
//             path="/report-found" 
//             element={<ProtectedRoute><ReportFound /></ProtectedRoute>} 
//           />

//           <Route 
//             path="/item/:id" 
//             element={<ProtectedRoute><ItemDetails /></ProtectedRoute>} 
//           />

//           <Route 
//             path="*" 
//             element={<Navigate to="/login" replace />} 
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// frontend/src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import ItemDetails from "./pages/ItemDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Show navbar only if logged in */}
      {isLoggedIn() && <Navbar />}

      <Routes>
        {/* Login ONLY when logged out */}
        <Route
          path="/login"
          element={isLoggedIn() ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/register"
          element={isLoggedIn() ? <Navigate to="/" /> : <Register />}
        />

        {/* Protected */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/lost" element={<ProtectedRoute><LostItems /></ProtectedRoute>} />
        <Route path="/found" element={<ProtectedRoute><FoundItems /></ProtectedRoute>} />
        <Route path="/report-lost" element={<ProtectedRoute><ReportLost /></ProtectedRoute>} />
        <Route path="/report-found" element={<ProtectedRoute><ReportFound /></ProtectedRoute>} />
        <Route path="/item/:id" element={<ProtectedRoute><ItemDetails /></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}
