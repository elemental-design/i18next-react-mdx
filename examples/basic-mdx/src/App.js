import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      {t('title_md')}
      <p>Hello, World!</p>
      <p>{t('welcome-to-react')}</p>
    </div>
  );
}

export default App;
