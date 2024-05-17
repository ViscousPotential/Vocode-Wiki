const pkgName = 'Vocode Wiki';

export default {
  lang: 'en',
  files: '**/*.mdx',
  ignore: ['./*.md'],
  title: pkgName,
  description: ``,
  menu: [
    'Introduction',
    { name: 'Transcribers', menu: ["Whisper (recommended)", "Vosk", "Faster Whisper"] },
    { name: 'Transformers', menu: [] },
    { name: 'Exporters', menu: [] },
  ],
  groups: {
    '': [],
    Configuration: ['Transcribers', 'Transformers', 'Exporters'],
  },
  repository: "https://github.com/ViscousPotential/Vocode-Wiki",
  themeConfig: {
    search: false,
    initialColorMode: 'dark',
    showMarkdownEditButton: false,
    showDarkModeSwitch: false,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: true,
    },
    logo: {
      src: {
        light: '',
        dark: ''
      },
    },
    menu: {
      search: true,
      headings: {
        rightSide: true,
        depth: 3,
      },
    },
  },
  docgenConfig: {
    searchPatterns: [
      '../**/*.{ts,tsx,js,jsx,mjs}',
      '../theme/src/gatsby-theme-docz/custom-components/**/*.{ts,tsx,js,jsx,mjs}',
      '!**/node_modules',
      '!../**/node_modules',
      '!**/doczrc.js',
      '!../**/doczrc.js',
    ],
  },
  filterComponents: (files) =>
    files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
