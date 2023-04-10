module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
  },
  parserOptions: {
    ecmaFeatures: {
      // * kalo kamu pake file dengan ekstensi (.jsx) maka tambahkan baris ini
      jsx: true,

      // * kalo kamu pake file dengan ekstensi (.tsx) maka tambahkan baris ini
      // tsx: true,
    },
  },
  // fix eslint  Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.
  requireConfigFile: false,
};
