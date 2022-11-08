import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles.css';
import rootReducer from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={rootReducer}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
