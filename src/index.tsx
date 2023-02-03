import ReactDOM from 'react-dom/client';
import { RoutesComponent } from './components/Routes/Routes';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Router>
      <RoutesComponent />
    </Router>
  );
