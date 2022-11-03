import {
  Route, Routes,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

const App = () => (
  <>
    <main className="d-flex">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </main>
  </>
);

export default App;
