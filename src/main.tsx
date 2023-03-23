import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './index.scss';
import 'tailwindcss/tailwind.css';
import styles from './styles/scss/style.module.scss';

import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <p className={styles.testBlue}>123</p>
      <App />
    </StrictMode>
  );
}
