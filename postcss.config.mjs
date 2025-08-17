const config = {
  plugins: ["@tailwindcss/postcss"],
  extend: {
    keyframes: {
      "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      "fade-in-up": {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "pulse-slow": {
        "0%, 100%": { opacity: "0.9" },
        "50%": { opacity: "1" },
      },
    },
    animation: {
      "fade-in": "fade-in 1s ease-out forwards",
      "fade-in-up": "fade-in-up 1s ease-out forwards",
      "pulse-slow": "pulse-slow 6s ease-in-out infinite",
    },
  },
};

export default config;
