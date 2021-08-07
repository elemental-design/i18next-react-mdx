# i18next-react-mdx
i18next processor for rendering React.js with mdx

## Getting Started

Make sure `i18next` and `react-i18next` are installed.

Installation:

```sh
npm i --save i18next-react-mdx
```

Create an i18next config file:

**i18n/index.js**

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// PATCH
import mdxProcessor, { markdownParser } from 'i18next-react-mdx';

const components = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />,
  Demo: () => <p>This is a demo component</p>
}
// END PATCH

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
  // PATCH
  .use(mdxProcessor(markdownParser({ components, scope })))
  // END PATCH
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
```

Import your `i18next` config into your React app.

**App.js**

```js
ReactDOM.render(
  <React.StrictMode>
  // PATCH
    <I18nextProvider i18n={i18n}>
  // END PATCH
      <App />
  // PATCH
    </I18nextProvider>
  // END PATCH
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Usage

```js
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div className="App">
      {t('title_md')}
      <p>Hello, World!</p>
      <p>{t('welcome-to-react')}</p>
    </div>
  );
}
```
