import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles.css';
import store from './redux/configureStore';
import { getBooks } from './redux/books/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getBooks());
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
