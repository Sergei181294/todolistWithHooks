import ReactDOM from 'react-dom/client';
import { RoutesComponent } from './components/Routes/Routes';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"


ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Provider store = {store}>
      <Router>
        <RoutesComponent />
      </Router>
    </Provider>
  );
