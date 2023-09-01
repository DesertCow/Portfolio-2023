import { createRoot } from 'react-dom/client';

//* Import App Routing
import App from './App';


//* Create App Root
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
      <App />
  </div>
);

//!========================= EOF =========================