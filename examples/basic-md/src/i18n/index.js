import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import mdxProcessor, { markdownParser } from 'i18next-react-md';

const components = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />,
  Demo: () => <p>This is a demo component</p>
}

// Data available in MDX:
const scope = {
  somethingInScope: 1
}

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "title_md": "# Hello, **World!**",
      "welcome-to-react": "Welcome to React and react-i18next",
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(mdxProcessor(markdownParser({ components, scope })))
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    postProcess: ['react-markdown'],
  });

export default i18n;
