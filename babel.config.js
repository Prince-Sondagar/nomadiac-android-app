// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   env: {
//     production: {
//       plugins: ['react-native-paper/babel', [
//         'react-native-reanimated/plugin', {
//           relativeSourceLocation: true,
//         },
//       ]],

//     },
//   },
// };

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
  ],
};