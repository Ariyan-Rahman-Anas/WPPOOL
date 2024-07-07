// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./public/*.html"],
//   theme: {
//     extend: {
//       colors: {
//         // Adding custom color
//         primary: "#2042b6",
//         danger: "#ff3811",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        // Adding custom colors
        primary: "#2042b6",
        danger: "#ff3811",
      },
      // Extending to add custom classes
      extend: {
        backgroundColor: {
          primary: "#2042b6",
        },
        textColor: {
          primary: "#2042b6",
        },
        borderColor: {
          primary: "#2042b6",
        },
      },
    },
  },
  plugins: [],
};