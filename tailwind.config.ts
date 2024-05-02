import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presenter/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'menu-icon':
          "url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=%270 0 30 30%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath  stroke=%27rgba%280, 0, 21, 0.5%29%27 stroke-width=%272.25%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
export default config;
