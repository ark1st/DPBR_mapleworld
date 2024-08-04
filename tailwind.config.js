/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-background00": "#fff",
        "background-background20": "#f7f9fa",
        "text-text500": "#6c7680",
        "text-text800": "#292e33",
        "background-background40": "#edf1f5",
        "text-text300": "#98a5b3",
        "text-text00": "#e4e9ee",
        "dpbr-dpbrred": "#ff6d6a",
        gray: "rgba(0, 0, 0, 0.2)",
        "text-text700": "#525c66",
      },
      spacing: {},
      fontFamily: {
        "dpbr-typography-f12-md": "'Spoqa Han Sans Neo'",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
