module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      spacing: {
        custom: "78px",
      },
      colors: {
        orange: {
          custom: "#EE4622",
        },
        danger: "#FF0742",
        success: "#0ACF83",
        green: {
          custom: "#3BB54A",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
