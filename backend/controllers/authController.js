// backend/controllers/authController.js
// Temporary auth controller for testing (no DB required).
// Logs incoming request for debugging; remove logs later.

// exports.login = (req, res) => {
//   // debug logs — remove after verifying everything works
//   console.log("=== LOGIN REQUEST START ===");
//   console.log("Headers:", req.headers);
//   console.log("Body (raw):", req.body);
//   console.log("=== LOGIN REQUEST END ===");

//   const { email, password } = req.body || {};

//   // TEMP ADMIN CREDENTIALS (for testing only)
//   const TEMP_EMAIL = "admin@gmail.com";
//   const TEMP_PASSWORD = "12345";

//   // trim inputs (avoid whitespace mismatch)
//   const recvEmail = typeof email === "string" ? email.trim() : email;
//   const recvPassword = typeof password === "string" ? password.trim() : password;

//   console.log("Compared values ->", { recvEmail, recvPassword });

//   if (recvEmail === TEMP_EMAIL && recvPassword === TEMP_PASSWORD) {
//     return res.json({
//       success: true,
//       msg: "Login successful",
//       token: "temp_admin_token",
//       role: "admin",
//     });
//   }

//   return res.status(401).json({
//     success: false,
//     msg: "Invalid Email or Password",
//   });
// };
exports.login = (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN RECEIVED:", email, password); // ADD THIS

  const TEMP_EMAIL = "admin@gmail.com";
  const TEMP_PASSWORD = "12345";

  if (email === TEMP_EMAIL && password === TEMP_PASSWORD) {
    return res.json({
      success: true,
      msg: "Login successful",
      token: "temp_admin_token"
    });
  }

  return res.status(401).json({ success: false, msg: "Invalid Email or Password" });
};
