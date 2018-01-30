// // // http://eslint.org/docs/user-guide/configuring
module.exports = {
  //文件名 .eslintrc.json
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "commonjs": true
  },
  // "extends": "eslint:recommended",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "installedESLint": true,
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true,
          "arrowFunctions": true,
          "classes": true,
          "modules": true,
          "defaultParams": true
      },
      "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
      "react"
  ],
  "rules": {
      "linebreak-style": [
          "error",
          "unix"
      ],
      //"semi": ["error", "always"],
      "no-empty": 0,
      "comma-dangle": 0,
      "no-unused-vars": 0,
      "no-console": 0,
      "no-const-assign": 2,
      "no-dupe-class-members": 2,
      "no-duplicate-case": 2,
      "no-extra-parens": [2, "functions"],
      "no-self-compare": 2,
      "accessor-pairs": 2,
      "comma-spacing": [2, {
          "before": false,
          "after": true
      }],
      "constructor-super": 2,
      "new-cap": [2, {
          "newIsCap": true,
          "capIsNew": false
      }],
      "new-parens": 2,
      "no-array-constructor": 2,
      "no-class-assign": 2,
      "no-cond-assign": 2
  }
}
// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: 'module',
//     ecmaFeatures: {
//       ex6: true,
//       jsx: true,
//       "experimentalObjectRestSpread": true,
//       "jsx": true,
//       "arrowFunctions": true,
//       "classes": true,
//       "modules": true,
//       "defaultParams": true
//     },
//     "sourceType": "module"
//   },
//   env: {
//     es6: true,
//     browser: true,
//   },
//   // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
//   // extends: 'standard',
//   "extends": ["eslint:recommended", "plugin:react/recommended"],
//   // "extends": ["eslint:all", "plugin:react/all"],
//   // required to lint *.vue files
//   plugins: [
//     "react"
//     // 'html'
//   ],
//   // add your custom rules here
//   'rules': {
//     // "constructor-super":2,
//     // "new-parens": 2,
//     // "no-array-constructor": 2,
//     // "constructor-super": 2,
//     // "no-set-state": "off",
//     // "no-class-assign": 2,
//     // "no-cond-assign": 2
//     // // allow paren-less arrow functions
//     // 'arrow-parens': 0,
//     // // allow async-await
//     // 'generator-star-spacing': 0,
//     // // allow debugger during development
//     // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//   }
// }
//   "rules": {
//     "linebreak-style": [
//         "error",
//         "unix"
//     ],
//     //"semi": ["error", "always"],
//     "no-empty": 0,
//     "comma-dangle": 0,
//     "no-unused-vars": 0,
//     "no-console": 0,
//     "no-const-assign": 2,
//     "no-dupe-class-members": 2,
//     "no-duplicate-case": 2,
//     "no-extra-parens": [2, "functions"],
//     "no-self-compare": 2,
//     "accessor-pairs": 2,
//     "comma-spacing": [2, {
//         "before": false,
//         "after": true
//     }],
//     "constructor-super": 2,
//     "new-cap": [2, {
//         "newIsCap": true,
//         "capIsNew": false
//     }],
//     "new-parens": 2,
//     "no-array-constructor": 2,
//     "no-class-assign": 2,
//     "no-cond-assign": 2
//   }
// }
