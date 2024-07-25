/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#edeef1",
          "300": "#eee",
          "400": "#f6f6f8",
          "500": "#f5f5f5",
        },
        gray: {
          "100": "#888a8d",
          "200": "#282b2e",
          "300": "#17191d",
          "400": "#16181b",
        },
        gainsboro: "#d9dadc",
        darkgray: {
          "100": "#acacac",
          "200": "#9fa1a7",
          "300": "#999a9d",
        },
        dimgray: {
          "100": "#666a6d",
          "200": "#666",
        },
        chocolate: {
          "100": "#f78029",
          "200": "#f06c27",
        },
        darkslategray: "#484a4d",
      },
      spacing: {},
      fontFamily: {
        poppins: "Noto Sans CJK",
      },
      borderRadius: {
        xl: "20px",
        "11xs-3": "1.3px",
        "2xl": "21px",
      },
    },
    fontSize: {
      "2xs": "11px",
      xs: "12px",
      sm: "14px",
      mini: "15px",
      smi: "13px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
