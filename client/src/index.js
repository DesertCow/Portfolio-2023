
import App from './App';
import { createRoot } from 'react-dom/client';


//* Create Root
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
      <App />
  </div>
);