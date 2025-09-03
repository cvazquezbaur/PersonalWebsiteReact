import './App.css'
import {lazy, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Layout from './Pages/Layout';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Landing = lazy(() => import('./Pages/Landing'));
const Ski = lazy(() => import('./Pages/Ski'));
const Sing = lazy(() => import('./Pages/Sing'));
const Tech = lazy(() => import('./Pages/Tech'));

function App() {
  return (
     <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="ski" element={<Ski />} />
          <Route path="sing" element={<Sing />} />
          <Route path="tech" element={<Tech />} />
        </Route>
      </Routes>
     </Suspense>
  )
}

export default App
