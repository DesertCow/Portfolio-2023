import App from './App';
// import 'bootstrap';
// import "./style.css";
// import "./reset.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';


//* Create Root
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
      <App />
  </div>
);