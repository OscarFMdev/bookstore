import {
  Route, Routes,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
