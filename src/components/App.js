import {
  Route, Routes,
} from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

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
