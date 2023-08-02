const allowedOrigins = require("./allowedOrigins");

// const corsOptions = {
//   origin: (origin, callback) => {
//     // allow requests with no origin
//     // (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg =
//         "The CORS policy for this site does not " +
//         "allow access from the specified Origin.";
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
// };

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(null, true);

      // callback(new Error("Not allowed by CORS"));
    }
  },
  credentails: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
